"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

import { transactionService } from "@/app/services/clientServices/transaction.service";
import { transactionKeys } from "./transaction.keys";


const TRANSACTIONS_LIMIT = 20;


export function useTransactions() {

    const query =
        useInfiniteQuery({

            queryKey:
                transactionKeys.list(),

            queryFn: async ({
                pageParam = 1,
            }) => {

                return transactionService.getTransactions(
                    pageParam,
                    TRANSACTIONS_LIMIT,
                );

            },


            initialPageParam: 1,


            getNextPageParam: (
                lastPage,
            ) => {

                if (
                    !lastPage.pagination.hasNextPage
                ) {
                    return undefined;
                }


                return (
                    lastPage.pagination.page + 1
                );

            },


            staleTime: 30_000,

            gcTime:
                5 * 60 * 1000,

            refetchOnMount: true,

            refetchOnReconnect: true,

            refetchOnWindowFocus: true,

        });


    const transactions =
        query.data?.pages.flatMap(
            page => page.data,
        ) ?? [];


    return {

        ...query,

        transactions,

    };

}