"use client";

import { useQuery } from "@tanstack/react-query";
import { transactionService } from "@/app/services/clientServices/transaction.service";
import { transactionKeys } from "./transaction.keys";
import { useTransactionStore } from "@/app/store/transaction.store";

export function useTransactions() {

    const setTransactions = useTransactionStore(
        state => state.setTransactions,
    );

    return useQuery({
        queryKey: transactionKeys.list(),

        queryFn: async () => {
            const transactions = await transactionService.getTransactions();

            setTransactions(
                transactions,
            );

            return transactions;

        },

        staleTime: 30_000,
        gcTime: 5 * 60 * 1000,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true,

    });

}