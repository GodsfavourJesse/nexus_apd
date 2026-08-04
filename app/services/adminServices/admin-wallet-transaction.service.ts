import api from "@/app/lib/axios";

import {
    AdminWalletTransactionResponse,
} from "@/app/types/adminTypes/adminWalletTransaction.types";


export async function getAdminWalletTransactions(){

    const response =
        await api.get<AdminWalletTransactionResponse>(
            "/admin/wallet/transactions"
        );


    return response.data;

}