import { z } from "zod";

// Approve Deposits
export const approveDepositSchema = z.object({
    adminRemark: z
        .string()
        .trim()
        .max(
            500,
            "Remark cannot exceed 500 characters.",
        )
        .optional(),
});

export type ApproveDepositFormValues =
    z.infer<typeof approveDepositSchema>;

// Reject Deposits
export const rejectDepositSchema = z.object({
    adminRemark: z
        .string()
        .trim()
        .min(
            3,
            "Please provide a rejection reason.",
        )
        .max(
            500,
            "Remark cannot exceed 500 characters.",
        ),
});

export type RejectDepositFormValues =
    z.infer<typeof rejectDepositSchema>;