import api from "@/app/lib/axios";

import {
    AdminWalletResponse,
} from "@/app/types/adminTypes/adminWallet.types";


export async function getAdminWallet(){

    const response =
        await api.get<AdminWalletResponse>(
            "/admin/wallet"
        );


    return response.data;

}