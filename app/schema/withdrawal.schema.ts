import { z } from "zod";

/**
 * Withdrawal form validation.
 */
export const createWithdrawalSchema = z.object({
    amount: z
        .string()
        .trim()
        .min(1, "Withdrawal amount is required.")
        .refine(
            (value) => {
                const amount = Number(value);

                return (
                    Number.isFinite(amount) &&
                    amount > 0
                );
            },
            {
                message:
                    "Enter a valid withdrawal amount.",
            },
        ),

    accountName: z
        .string()
        .trim()
        .min(
            3,
            "Account name must be at least 3 characters.",
        )
        .max(
            100,
            "Account name cannot exceed 100 characters.",
        ),

    accountNumber: z
        .string()
        .trim()
        .regex(
            /^\d{10}$/,
            "Account number must be exactly 10 digits.",
        ),

    bankName: z
        .string()
        .trim()
        .min(
            2,
            "Bank name is required.",
        )
        .max(
            100,
            "Bank name cannot exceed 100 characters.",
        ),
});

/**
 * Form values inferred from schema.
 */
export type CreateWithdrawalFormValues =
    z.infer<
        typeof createWithdrawalSchema
    >;