"use client";

import { useQuery } from "@tanstack/react-query";

import { transactionService } from "@/app/services/clientServices/transaction.service";


export function useTransaction(
    id: string,
) {

    return useQuery({

        queryKey: [
            "transaction",
            id,
        ],


        queryFn: () =>
            transactionService.getTransaction(
                id,
            ),


        enabled:
            Boolean(id),


        staleTime:
            30_000,

    });

}