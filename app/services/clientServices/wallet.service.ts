import { WalletResponse } from "../../types/clientTypes/wallet.types";
import { api } from "../api";

class WalletService {

    getWallet() {
        return api.get<WalletResponse>("/wallet");
    }

    getBalance() {
        return api.get<{
            success: boolean;

            data: {
                availableBalance: string;
                heldBalance: string;
                totalEarned: string;
                totalDeposited: string;
                totalWithdrawn: string;
            };
        }>("/wallet/balance");
    }
}

export const walletService = new WalletService();