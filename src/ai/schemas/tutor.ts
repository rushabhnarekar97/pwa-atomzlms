/**
 * @fileOverview Defines the schema and types for the AI Tutor.
 *
 * - AskTutorInputSchema - The Zod schema for the tutor input.
 * - AskTutorInput - The TypeScript type for the tutor input.
 */
import { z } from 'zod';

export const AskTutorInputSchema = z.object({
  chapterContext: z.string().describe('The content of the course chapter the user is asking about.'),
  question: z.string().describe('The user\'s question about the chapter content.'),
});
export type AskTutorInput = z.infer<typeof AskTutorInputSchema>;
