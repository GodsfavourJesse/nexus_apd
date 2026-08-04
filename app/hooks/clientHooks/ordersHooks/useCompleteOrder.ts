"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { orderService } from "@/app/services/clientServices/order.service";
import { orderKeys } from "./order.keys";
import { walletKeys } from "../walletHooks/wallet.keys";
import { transactionKeys } from "../transactionHooks/transaction.keys";

export function useCompleteOrderItem() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: (
            itemId: string,
        ) =>
            orderService.completeOrderItem(
                itemId,
            ),

        onSuccess: async (_, itemId) => {
            await Promise.all([
                
                // Orders
                queryClient.invalidateQueries({
                    queryKey: orderKeys.today(),
                }),

                queryClient.invalidateQueries({
                    queryKey: orderKeys.items(),
                }),

                queryClient.invalidateQueries({
                    queryKey: orderKeys.item(itemId),
                }),
                // Wallet
                queryClient.invalidateQueries({
                    queryKey: walletKeys.all,
                }),
                // Transactions
                queryClient.invalidateQueries({
                    queryKey: transactionKeys.all,
                }),

            ]);

        },
    });
}