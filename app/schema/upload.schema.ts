import { z } from "zod";

export const paymentFormSchema = z.object({
    senderAccountName: z
        .string()
        .trim()
        .min(3, "Sender account name is required.")
        .max(100),

    senderAccountNumber: z
        .string()
        .trim()
        .regex(/^\d{10}$/, "Account number must be exactly 10 digits."),

    senderBankName: z
        .string()
        .trim()
        .min(2, "Sender bank is required.")
        .max(100),
});

export type PaymentFormValues =
    z.infer<typeof paymentFormSchema>;