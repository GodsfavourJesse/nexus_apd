export interface AdminWalletTransaction {
    id: string;
    type: string;
    amount: string;
    balanceBefore: string;
    balanceAfter: string;
    description: string;
    metadata?: Record<string, unknown>;
    createdAt: string;
}

export interface AdminWalletTransactionResponse {
    success: boolean;
    data: AdminWalletTransaction[];
}