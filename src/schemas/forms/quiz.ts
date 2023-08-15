import { z } from "zod";

export const quizCreationSchema = z.object({
  topic: z.string().min(4, { message: "Topic must be at least 4 characters" }),
  type: z.enum(["multiple_choice", "open_ended"]),
  amount: z
    .number()
    .min(1)
    .max(10, { message: "Number must be between 1 and 10" }),
});
