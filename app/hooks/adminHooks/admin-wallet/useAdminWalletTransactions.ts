"use client";


import { getAdminWalletTransactions } from "@/app/services/adminServices/admin-wallet-transaction.service";
import {
    useQuery,
} from "@tanstack/react-query";



export function useAdminWalletTransactions(){


    return useQuery({

        queryKey:[
            "admin-wallet-transactions",
        ],


        queryFn:
            getAdminWalletTransactions,

    });

}