"use server";

import { db } from "@/lib/prisma";
import { subDays } from "date-fns";

const ACCOUNT_ID = "b72bfd5c-a802-46f3-9d96-cd401945f201";
const USER_ID = "fcd8e04e-c2b4-410c-9980-c670bd75dad7";

const TARGET_INCOME = 30000;
const TARGET_EXPENSE = 25000;

const CATEGORIES = {
  INCOME: [
    { name: "salary", range: [3000, 5000] },
    { name: "freelance", range: [500, 2000] },
    { name: "investments", range: [300, 1500] },
    { name: "other-income", range: [100, 1000] },
  ],
  EXPENSE: [
    { name: "housing", range: [800, 1500] },
    { name: "transportation", range: [50, 200] },
    { name: "groceries", range: [100, 400] },
    { name: "utilities", range: [50, 200] },
    { name: "entertainment", range: [30, 150] },
    { name: "food", range: [40, 120] },
    { name: "shopping", range: [80, 300] },
    { name: "healthcare", range: [100, 800] },
    { name: "education", range: [100, 700] },
    { name: "travel", range: [200, 1500] },
  ],
};

function getRandomAmount(min, max) {
  return Number((Math.random() * (max - min) + min).toFixed(2));
}

function getRandomCategory(type) {
  const list = CATEGORIES[type];
  const item = list[Math.floor(Math.random() * list.length)];
  const amount = getRandomAmount(item.range[0], item.range[1]);
  return { category: item.name, amount };
}

export async function seedTransactions() {
  try {
    const transactions = [];
    let incomeTotal = 0;
    let expenseTotal = 0;

    // Seed income first to ensure expenses don't exceed it
    while (incomeTotal < TARGET_INCOME) {
      const { category, amount } = getRandomCategory("INCOME");
      const date = subDays(new Date(), Math.floor(Math.random() * 90));

      transactions.push({
        id: crypto.randomUUID(),
        type: "INCOME",
        amount,
        description: `Received ${category}`,
        date,
        category,
        status: "COMPLETED",
        userId: USER_ID,
        accountId: ACCOUNT_ID,
        createdAt: date,
        updatedAt: date,
      });

      incomeTotal += amount;
    }

    while (expenseTotal < TARGET_EXPENSE && expenseTotal < incomeTotal) {
      const { category, amount } = getRandomCategory("EXPENSE");
      if (expenseTotal + amount > incomeTotal) break;

      const date = subDays(new Date(), Math.floor(Math.random() * 90));

      transactions.push({
        id: crypto.randomUUID(),
        type: "EXPENSE",
        amount,
        description: `Paid for ${category}`,
        date,
        category,
        status: "COMPLETED",
        userId: USER_ID,
        accountId: ACCOUNT_ID,
        createdAt: date,
        updatedAt: date,
      });

      expenseTotal += amount;
    }

    const finalBalance = incomeTotal - expenseTotal;

    // Write to DB
    await db.$transaction(async (tx) => {
      await tx.transaction.deleteMany({ where: { accountId: ACCOUNT_ID } });

      await tx.transaction.createMany({ data: transactions });

      await tx.account.update({
        where: { id: ACCOUNT_ID },
        data: { balance: finalBalance },
      });
    });

    return {
      success: true,
      message: `Seeded ${transactions.length} transactions. Income: ₹${incomeTotal.toFixed(
        2
      )}, Expense: ₹${expenseTotal.toFixed(2)}, Balance: ₹${finalBalance.toFixed(2)}`,
    };
  } catch (error) {
    console.error("Error seeding transactions:", error);
    return { success: false, error: error.message };
  }
}
