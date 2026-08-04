"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { walletService } from "@/app/services/clientServices/wallet.service";
import { useWalletStore } from "@/app/store/wallet.store";
import { walletKeys } from "./wallet.keys";

export function useWallet() {

    const setWallet =
        useWalletStore(
            (state) => state.setWallet,
        );

    const query = useQuery({

        queryKey: walletKeys.detail(),

        queryFn: () =>
            walletService.getWallet(),

        staleTime: 30_000,

        gcTime: 5 * 60 * 1000,

        refetchOnWindowFocus: true,

        refetchOnReconnect: true,

        refetchOnMount: true,

    });

    useEffect(() => {

        if (query.data) {
            setWallet(query.data);
        }

    }, [
        query.data,
        setWallet,
    ]);

    return query;
}