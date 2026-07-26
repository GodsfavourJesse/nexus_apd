import { create } from "zustand";
import {
    createJSONStorage,
    persist,
} from "zustand/middleware";

export interface Wallet {
    id: string;

    userId: string;

    availableBalance: string;

    heldBalance: string;

    totalEarned: string;

    totalDeposited: string;

    totalWithdrawn: string;

    createdAt: string;

    updatedAt: string;
}

interface WalletState {
    wallet: Wallet | null;

    setWallet: (
        wallet: Wallet | null
    ) => void;

    clearWallet: () => void;
}

export const useWalletStore =
    create<WalletState>()(
        persist(
            (set) => ({
                wallet: null,

                setWallet: (wallet) =>
                    set({
                        wallet,
                    }),

                clearWallet: () =>
                    set({
                        wallet: null,
                    }),
            }),
            {
                name: "wallet-storage",

                storage: createJSONStorage(
                    () => localStorage
                ),

                partialize: (state) => ({
                    wallet: state.wallet,
                }),
            }
        )
    );