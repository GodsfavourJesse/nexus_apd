import axiosInstance from "@/app/lib/axios";

import {
    Wallet,
    WalletResponse,
} from "@/app/types/clientTypes/wallet.types";

class WalletService {

    async getWallet(): Promise<Wallet> {

        const response =
            await axiosInstance.get<WalletResponse>(
                "/wallet",
            );

        return response.data.data;
    }

    async refreshWallet(): Promise<Wallet> {

        return this.getWallet();

    }

    async getBalance() {

        const response =
            await axiosInstance.get(
                "/wallet/balance",
            );

        return response.data.data;
    }
}

export const walletService =
    new WalletService();