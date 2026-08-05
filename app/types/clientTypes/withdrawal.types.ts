// Withdrawal status.
// Matches backend WithdrawalStatus enum.
export enum WithdrawalStatus {
    PENDING = "pending",
    APPROVED = "approved",
    REJECTED = "rejected",
    PAID = "paid",
}

// Create withdrawal request.
export interface CreateWithdrawalDto {
    amount: string;
    accountName: string;
    accountNumber: string;
    bankName: string;
}

// User withdrawal.
export interface Withdrawal {
    id: string;
    userId: string;
    walletId: string;
    amount: string;
    accountName: string;
    accountNumber: string;
    bankName: string;
    status: WithdrawalStatus;
    reviewedBy: string | null;
    reviewedAt: string | null;
    adminRemark: string | null;
    createdAt: string;
    updatedAt: string;
}

// Withdrawal details returned by GET /withdrawals/:id
export interface WithdrawalDetails extends Withdrawal {}

// Withdrawal list response.
export interface WithdrawalsResponse {
    success: boolean;
    data: Withdrawal[];
}

// Single withdrawal response.
export interface WithdrawalResponse {
    success: boolean;
    data: WithdrawalDetails;
}

// Create withdrawal response.
export interface CreateWithdrawalResponse {
    success: boolean;
    message: string;
    data: Withdrawal;
}
