export interface Wallet {
    id: string;

    userId: string;

    availableBalance: string;

    heldBalance: string;

    totalEarned: string;

    totalDeposited: string;

    totalWithdrawn: string;

    createdAt: string;

    updatedAt: string;
}

export interface WalletResponse {
    success: boolean;

    data: Wallet;
}