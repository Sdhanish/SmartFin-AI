'use server';
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";


// Create Wallet Entry (JS version)
export async function createWalletEntry(amount, accountId) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");


      // 🚫 Reject invalid amounts
      if (!amount || typeof amount !== "number" || amount <= 0) {
        throw new Error("Amount must be a positive number");
      }

    const account = await db.account.findUnique({
      where: {
        id: accountId,
        userId: user.id,
      },
    });

    if (!account) throw new Error("Account not found");

    const currentBalance = parseFloat(account.balance);
    const newBalance = currentBalance - amount;

    if (newBalance < 0) {
      throw new Error("Insufficient account balance to create wallet entry");
    }

    const wallet = await db.$transaction(async (tx) => {
      const newWallet = await tx.wallet.create({
        data: {
          userId: user.id,
          accountId,
          balance: amount,
        },
      });

      await tx.account.update({
        where: { id: accountId },
        data: { balance: newBalance },
      });

      return newWallet;
    });

    // ✅ Revalidate relevant paths
    revalidatePath("/dashboard");
    revalidatePath(`/account/${accountId}`);

    // ✅ Serialize and return
    return {
      success: true,
      data: {
        ...wallet,
        balance: wallet.balance.toNumber(),
        createdAt: wallet.createdAt.toISOString(),
        updatedAt: wallet.updatedAt.toISOString(),
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
}


// Get Wallet Balance (sum of all wallet entries)
export async function getWalletBalance() {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    const wallets = await db.wallet.findMany({
      where: {
        userId: user.id,
      },
      select: {
        balance: true,
      },
    });

    const totalBalance = wallets.reduce((sum, wallet) => {
      return sum + parseFloat(wallet.balance); // ✅ Convert Decimal to float
    }, 0);
  

    return { success: true, balance: totalBalance };
  } catch (error) {
    throw new Error(error.message);
  }
}




export async function withdrawFromWallet(amount) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user) throw new Error("User not found");

    // Validate amount
    if (!amount || typeof amount !== "number" || amount <= 0) {
      throw new Error("Amount must be a positive number");
    }

    // Get all wallet entries for the user, ordered oldest first
    const wallets = await db.wallet.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "asc" },
    });

    const totalBalance = wallets.reduce((sum, w) => sum + parseFloat(w.balance), 0);

    if (totalBalance < amount) {
      throw new Error("Insufficient wallet balance to withdraw");
    }

    let remainingAmount = amount;

    // Process each wallet entry, deducting until the amount is covered
    for (const wallet of wallets) {
      const walletBalance = parseFloat(wallet.balance);

      if (remainingAmount <= 0) break;

      if (walletBalance <= remainingAmount) {
        // Delete this wallet — its entire balance is used
        await db.wallet.delete({ where: { id: wallet.id } });
        remainingAmount -= walletBalance;
      } else {
        // Update this wallet with the remaining balance
        const newBalance = walletBalance - remainingAmount;
        await db.wallet.update({
          where: { id: wallet.id },
          data: { balance: newBalance },
        });
        remainingAmount = 0;
      }
    }

    // ✅ Revalidate paths
    revalidatePath("/dashboard");

    const finalBalance = totalBalance - amount;

    return {
      success: true,
      message: `₹${amount} withdrawn successfully`,
      remainingBalance: finalBalance,
    };

  } catch (error) {
    throw new Error(error.message);
  }
}






