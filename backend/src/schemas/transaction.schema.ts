import { z } from "zod";

const transactionSchema = z.object({
  amount: z.number({
    message: "Amount must be a number and is required",
  }),
  description: z.string({
    message: "Description must be a string and is required",
  }),
});

export { transactionSchema };
