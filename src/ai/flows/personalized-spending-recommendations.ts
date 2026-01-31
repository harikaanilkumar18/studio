'use server';

/**
 * @fileOverview Provides personalized spending recommendations based on transaction history.
 *
 * - getPersonalizedRecommendations - A function that returns personalized recommendations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TransactionSchema = z.object({
  date: z.string().describe('The date of the transaction (YYYY-MM-DD).'),
  description: z.string().describe('A brief description of the transaction.'),
  amount: z.number().describe('The amount of the transaction.'),
  category: z.string().describe('The category of the transaction (e.g., food, shopping, travel).'),
});

const PersonalizedRecommendationsInputSchema = z.object({
  transactionHistory: z
    .array(TransactionSchema)
    .describe('An array of transaction objects representing the user’s spending history.'),
});
export type PersonalizedRecommendationsInput = z.infer<typeof PersonalizedRecommendationsInputSchema>;

const RecommendationSchema = z.object({
  recommendation: z.string().describe('A personalized recommendation for reducing spending or maximizing savings.'),
  reason: z.string().describe('The reason behind the recommendation based on the transaction history.'),
});

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z.array(RecommendationSchema).describe('An array of personalized recommendations.'),
});
export type PersonalizedRecommendationsOutput = z.infer<typeof PersonalizedRecommendationsOutputSchema>;

export async function getPersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedSpendingRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedSpendingRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are a personal finance advisor. Analyze the user's transaction history and provide personalized recommendations to reduce spending and maximize savings.

Transaction History:
{{#each transactionHistory}}
- Date: {{date}}, Description: {{description}}, Amount: {{amount}}, Category: {{category}}
{{/each}}

Provide recommendations that are specific, actionable, and relevant to the user's spending patterns. Include the reason behind each recommendation.

Format the output as a JSON array of recommendations with the fields 'recommendation' and 'reason'.

Example:
[
  {
    "recommendation": "Reduce eating out by 20% by cooking more meals at home.",
    "reason": "You spent ₹40000 on restaurants last month, which is higher than average."
  },
  {
    "recommendation": "Consider using public transport or cycling for short commutes.",
    "reason": "You spent ₹16000 on fuel last month."
  }
]
`,
});

const personalizedSpendingRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedSpendingRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
