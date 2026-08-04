import axiosInstance from "@/app/lib/axios";

import { Transaction, TransactionResponse,
    TransactionsResponse,
} from "@/app/types/clientTypes/transaction.types";

class TransactionService {

    // Returns every transaction belonging to
    // the authenticated user.
    async getTransactions(): Promise<Transaction[]> {

        const response =
            await axiosInstance.get<TransactionsResponse>(
                "/transactions",
            );

        return response.data.data;
    }

    // Returns one transaction by ID.
    async getTransaction(
        id: string,
    ): Promise<Transaction> {

        const response =
            await axiosInstance.get<TransactionResponse>(
                `/transactions/${id}`,
            );

        return response.data.data;
    }

    // Returns one transaction by reference.
    async getTransactionByReference(
        reference: string,
    ): Promise<Transaction> {

        const response =
            await axiosInstance.get<TransactionResponse>(
                `/transactions/reference/${reference}`,
            );

        return response.data.data;
    }
}

export const transactionService =
    new TransactionService();