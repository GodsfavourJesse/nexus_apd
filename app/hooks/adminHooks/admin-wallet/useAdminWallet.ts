"use client";


import { getAdminWallet } from "@/app/services/adminServices/admin-wallet.service";
import {
    useQuery,
} from "@tanstack/react-query";



export function useAdminWallet(){

    return useQuery({

        queryKey:[
            "admin-wallet",
        ],


        queryFn:
            getAdminWallet,

    });

}