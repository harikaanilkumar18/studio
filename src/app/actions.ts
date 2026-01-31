"use server";

import { getPersonalizedRecommendations } from "@/ai/flows/personalized-spending-recommendations";
import { summarizeSpendingHabits } from "@/ai/flows/summarize-spending-habits";
import { transactions } from "@/lib/data";

export async function getSummaryAction() {
  try {
    const transactionData = transactions
      .map(
        (t) =>
          `Date: ${t.date}, Description: ${t.description}, Amount: ${t.amount}, Category: ${t.category}`
      )
      .join("\n");
    return await summarizeSpendingHabits({ transactionData });
  } catch (error) {
    console.error("Error getting summary:", error);
    return { summary: "Could not generate summary due to an error." };
  }
}

export async function getRecommendationsAction() {
  try {
    return await getPersonalizedRecommendations({
      transactionHistory: transactions,
    });
  } catch (error) {
    console.error("Error getting recommendations:", error);
    return { recommendations: [] };
  }
}
