import axiosInstance from "@/app/lib/axios";

import { Transaction, TransactionResponse,
    TransactionsResponse,
} from "@/app/types/clientTypes/transaction.types";

class TransactionService {

    // Returns paginated transaction belonging to the authenticated user.
    async getTransactions(
        page: number = 1,
        limit: number = 20,
    ): Promise<TransactionsResponse> {

        const response =
            await axiosInstance.get<TransactionsResponse>(
                "/transactions",
                {
                    params: {
                        page,
                        limit,
                    },
                },
            );

        return response.data;
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