'use server'

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";


const serializeTransaction =(obj)=>{
  const serialized={...obj};

  
if(obj.balance){
  serialized.balance=obj.balance.toNumber();
}
  
if(obj.amount){
  serialized.amount=obj.amount.toNumber();
}

return serialized;
};


export async function createAccount(data) {
  try {
    const {userId} = await auth();
    if(!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where:{
        clerkUserId: userId
      },
    });

    if(!user){
      throw new Error("User not Found");
    }

const balanceFloat =parseFloat(data.balance)

// convert balance to float before saving
if (isNaN(balanceFloat)){
  throw new Error("Invalid balance amount");

}


// Check if the users first account
const existingAccounts = await db.account.findMany({
  where:{
    userId:user.id
  },
});


const shouldBeDefault =existingAccounts.length===0?true:data.isDefault;


// if this account should be default, unset other default accounts
if(shouldBeDefault){
  await db.account.updateMany({
    where :{userId:user.id,isDefault:true},
    data:{isDefault:false},
  });
}

const account = await db.account.create({
  data:{
    ...data,
    balance:balanceFloat,
    userId:user.id,
    isDefault:shouldBeDefault,
  },
});

const serializedAccount =  serializeTransaction(account);

revalidatePath("/dashboard");
return {success:"true",data:serializedAccount};
  } catch (error) {
    throw new Error(error.message);
  }
}



export async function getUserAccounts() {
  const {userId} = await auth();
    if(!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where:{
        clerkUserId: userId
      },
    });

    if(!user){
      throw new Error("User not Found");
    }

    const accounts = await db.account.findMany({
      where:{userId:user.id},
      orderBy:{createdAt:"desc"},
      include:{
        _count:{
          select:{
            transactions:true,
          },
        },
      },
    });

    // console.log("Fetched Accounts:", accounts); // Debugging

    const serializedAccount=accounts.map(serializeTransaction);

    return serializedAccount;
}

export async function getDashboardData() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  // Get all user transactions
  const transactions = await db.transaction.findMany({
    where: { userId: user.id },
    orderBy: { date: "desc" },
  });

  return transactions.map(serializeTransaction);
}


export async function deleteAccount(accountId) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // Check if account exists and belongs to user
    const account = await db.account.findUnique({
      where: { id: accountId },
    });

    if (!account || account.userId !== user.id) {
      throw new Error("Account not found or unauthorized");
    }

    // Check if this is the default account
    if (account.isDefault) {
      throw new Error("Cannot delete default account. Set another account as default first.");
    }

    // Delete all transactions associated with this account
    await db.transaction.deleteMany({
      where: { accountId },
    });

    // Note: We're NOT deleting budgets here since they're user-specific
    // and not tied to individual accounts

    // Finally, delete the account itself
    await db.account.delete({
      where: { id: accountId },
    });

    revalidatePath("/dashboard");
    return { success: true, message: "Account and all associated transactions deleted successfully" };
  } catch (error) {
    throw new Error(error.message);
  }
}