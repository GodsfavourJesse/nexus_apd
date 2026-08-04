"use client";

import { useQueryClient } from "@tanstack/react-query";

import { walletKeys } from "./wallet.keys";

export function useRefreshWallet() {

    const queryClient =
        useQueryClient();

    const invalidate =
        () =>
            queryClient.invalidateQueries({

                queryKey:
                    walletKeys.detail(),

            });

    const refetch =
        () =>
            queryClient.refetchQueries({

                queryKey:
                    walletKeys.detail(),

            });

    return {

        invalidate,

        refetch,

    };

}