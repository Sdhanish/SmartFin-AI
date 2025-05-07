"use server";

import { db } from "@/lib/prisma";
import { subDays } from "date-fns";

const ACCOUNT_ID = "";
const USER_ID = "";

// Categories with their typical amount ranges
const CATEGORIES = {
  INCOME: [
    { name: "salary", range: [5000, 8000] },
    { name: "freelance", range: [1000, 3000] },
    { name: "investments", range: [500, 2000] },
    { name: "other-income", range: [100, 1000] },
  ],
  EXPENSE: [
    { name: "housing", range: [1000, 2000] },
    { name: "transportation", range: [100, 500] },
    { name: "groceries", range: [200, 600] },
    { name: "utilities", range: [100, 300] },
    { name: "entertainment", range: [50, 200] },
    { name: "food", range: [50, 150] },
    { name: "shopping", range: [100, 500] },
    { name: "healthcare", range: [100, 1000] },
    { name: "education", range: [200, 1000] },
    { name: "travel", range: [500, 2000] },
  ],
};

// Helper to generate random amount within a range
function getRandomAmount(min, max) {
  return Number((Math.random() * (max - min) + min).toFixed(2));
}

// Helper to get random category with amount
function getRandomCategory(type) {
  const categories = CATEGORIES[type];
  const category = categories[Math.floor(Math.random() * categories.length)];
  const amount = getRandomAmount(category.range[0], category.range[1]);
  return { category: category.name, amount };
}

export async function seedTransactions() {
  try {
    const incomeTarget = 30000;
    const expenseTarget = 27000;
    
    let totalIncome = 0;
    let totalExpense = 0;
    
    const transactions = [];

    // Helper function to create income or expense transactions
    const createTransaction = (type, targetAmount) => {
      let currentTotal = 0;
      let transactionList = [];
      
      while (currentTotal < targetAmount) {
        const { category, amount } = getRandomCategory(type);
        if (currentTotal + amount > targetAmount) {
          continue; // Skip if adding this amount would exceed the target
        }
        
        const date = subDays(new Date(), Math.floor(Math.random() * 90)); // Random date within 90 days
        const transaction = {
          id: crypto.randomUUID(),
          type,
          amount,
          description: `${
            type === "INCOME" ? "Received" : "Paid for"
          } ${category}`,
          date,
          category,
          status: "COMPLETED",
          userId: USER_ID,
          accountId: ACCOUNT_ID,
          createdAt: date,
          updatedAt: date,
        };
        
        currentTotal += amount;
        transactionList.push(transaction);
      }

      return transactionList;
    };

    // Create income and expense transactions
    const incomeTransactions = createTransaction("INCOME", incomeTarget);
    const expenseTransactions = createTransaction("EXPENSE", expenseTarget);

    // Combine income and expense transactions
    transactions.push(...incomeTransactions, ...expenseTransactions);

    // Calculate the total balance from the generated transactions
    let totalBalance = 0;
    transactions.forEach((transaction) => {
      totalBalance += transaction.type === "INCOME" ? transaction.amount : -transaction.amount;
    });

    // Insert transactions in batches and update account balance
    await db.$transaction(async (tx) => {
      // Clear existing transactions
      await tx.transaction.deleteMany({
        where: { accountId: ACCOUNT_ID },
      });

      // Insert new transactions
      await tx.transaction.createMany({
        data: transactions,
      });

      // Update account balance
      await tx.account.update({
        where: { id: ACCOUNT_ID },
        data: { balance: totalBalance },
      });
    });

    return {
      success: true,
      message: `Created ${transactions.length} transactions`,
    };
  } catch (error) {
    console.error("Error seeding transactions:", error);
    return { success: false, error: error.message };
  }
}
