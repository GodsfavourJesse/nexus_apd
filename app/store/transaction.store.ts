"use client";

import { create } from "zustand";

import { Transaction } from "@/app/types/clientTypes/transaction.types";

interface TransactionState {

    transactions: Transaction[];

    setTransactions: (
        transactions: Transaction[],
    ) => void;

    clearTransactions: () => void;

}

export const useTransactionStore =
    create<TransactionState>((set) => ({

        transactions: [],

        setTransactions: (
            transactions,
        ) =>
            set({
                transactions,
            }),

        clearTransactions: () =>
            set({
                transactions: [],
            }),

    }));