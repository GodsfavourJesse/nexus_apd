import { TransactionStatus, TransactionType } from "@/app/constants/transaction.constants";

export interface Transaction {
    id: string;

    userId: string;

    walletId: string;

    amount: string;

    balanceBefore: string;

    balanceAfter: string;

    type: TransactionType;

    status: TransactionStatus;

    reference: string;

    description: string | null;

    metadata: Record<string, unknown> | null;

    createdAt: string;

    updatedAt: string;
}

export interface TransactionPagination {

    page: number;

    limit: number;

    total: number;

    totalPages: number;

    hasNextPage: boolean;

    hasPreviousPage: boolean;
}

export interface TransactionResponse {
    success: boolean;

    data: Transaction;
}

export interface TransactionsResponse {
    success: boolean;
    data: Transaction[];
    pagination: TransactionPagination;
}