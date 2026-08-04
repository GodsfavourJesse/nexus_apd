"use client";

import { useQuery } from "@tanstack/react-query";

import { transactionService } from "@/app/services/clientServices/transaction.service";
import { transactionKeys } from "./transaction.keys";

export function useTransaction(
    id: string,
) {

    return useQuery({

        queryKey:
            transactionKeys.detail(id),

        queryFn: () =>
            transactionService.getTransaction(
                id,
            ),

        enabled:
            !!id,

        staleTime:
            30_000,

        gcTime:
            5 * 60 * 1000,

    });

}