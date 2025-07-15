'use server';
/**
 * @fileOverview An AI tutor that can answer questions about a specific course chapter.
 *
 * - askTutor - A function that takes a question and chapter context and returns an answer.
 * - AskTutorInput - The input type for the askTutor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const AskTutorInputSchema = z.object({
  chapterContext: z.string().describe('The content of the course chapter the user is asking about.'),
  question: z.string().describe('The user\'s question about the chapter content.'),
});
export type AskTutorInput = z.infer<typeof AskTutorInputSchema>;

export async function askTutor(input: AskTutorInput): Promise<string> {
    const {output} = await askTutorFlow(input);
    return output!;
}

const tutorPrompt = ai.definePrompt({
  name: 'tutorPrompt',
  input: {schema: AskTutorInputSchema},
  prompt: `You are a helpful and encouraging AI tutor for an online learning platform. Your goal is to help the user understand the provided course material.

Here is the content from the chapter they are currently studying:
---
{{chapterContext}}
---

The user has the following question:
"{{question}}"

Based *only* on the provided chapter content, answer the user's question. If the question cannot be answered from the text, politely state that the information is not in this chapter. Keep your answer concise and easy to understand.
`,
});

const askTutorFlow = ai.defineFlow(
  {
    name: 'askTutorFlow',
    inputSchema: AskTutorInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const llmResponse = await tutorPrompt(input);
    return llmResponse.text;
  }
);
