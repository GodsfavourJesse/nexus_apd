"use client";

import { useQueryClient } from "@tanstack/react-query";
import { transactionKeys } from "./transaction.keys";

export function useRefreshTransactions() {

    const queryClient = useQueryClient();

    return async () => {
        await queryClient.invalidateQueries({
            queryKey: transactionKeys.all,
        });

    };

}