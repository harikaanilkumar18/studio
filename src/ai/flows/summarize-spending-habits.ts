'use server';

/**
 * @fileOverview Summarizes a user's spending habits to provide key insights.
 *
 * - summarizeSpendingHabits - A function that takes transaction data and returns a summary of spending habits.
 * - SummarizeSpendingHabitsInput - The input type for the summarizeSpendingHabits function.
 * - SummarizeSpendingHabitsOutput - The return type for the summarizeSpendingHabits function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeSpendingHabitsInputSchema = z.object({
  transactionData: z.string().describe('A string containing the user transaction data.'),
});
export type SummarizeSpendingHabitsInput = z.infer<typeof SummarizeSpendingHabitsInputSchema>;

const SummarizeSpendingHabitsOutputSchema = z.object({
  summary: z.string().describe('A summary of the user spending habits.'),
});
export type SummarizeSpendingHabitsOutput = z.infer<typeof SummarizeSpendingHabitsOutputSchema>;

export async function summarizeSpendingHabits(input: SummarizeSpendingHabitsInput): Promise<SummarizeSpendingHabitsOutput> {
  return summarizeSpendingHabitsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeSpendingHabitsPrompt',
  input: {schema: SummarizeSpendingHabitsInputSchema},
  output: {schema: SummarizeSpendingHabitsOutputSchema},
  prompt: `You are a personal finance expert. Please analyze the following transaction data and provide a concise summary of the user\'s spending habits.

Transaction Data:
{{{transactionData}}}

Summary: `,
});

const summarizeSpendingHabitsFlow = ai.defineFlow(
  {
    name: 'summarizeSpendingHabitsFlow',
    inputSchema: SummarizeSpendingHabitsInputSchema,
    outputSchema: SummarizeSpendingHabitsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
