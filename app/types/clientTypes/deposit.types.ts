export type DepositStatus =
    | "pending"
    // | "under_review"
    | "approved"
    | "declined"
    // | "cancelled";

export interface Deposit {
    id: string;

    reference: string;

    userId: string;

    walletId: string;

    amount: string;

    senderAccountName: string;

    senderAccountNumber: string;

    senderBankName: string;

    paymentReceipt: string;

    status: DepositStatus;

    reviewedBy?: string | null;

    reviewedAt?: string | null;

    adminRemark?: string | null;

    metadata?: Record<string, unknown> | null;

    createdAt: string;

    updatedAt: string;
}

export interface CreateDepositDto {
    amount: number;

    senderAccountName: string;

    senderAccountNumber: string;

    senderBankName: string;

    paymentReceipt: string;
}