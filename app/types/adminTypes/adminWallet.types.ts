export interface AdminWallet {
    id: string;

    availableBalance: string;

    heldBalance: string;

    totalEarned: string;

    totalDeposited: string;

    totalWithdrawn: string;

    createdAt: string;

    updatedAt: string;
}


export interface AdminWalletResponse {
    success: boolean;

    data: {
        wallet: AdminWallet;
    };
}