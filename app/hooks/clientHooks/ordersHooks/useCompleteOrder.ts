"use client";

import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { orderService } from "@/app/services/clientServices/order.service";
import { orderKeys } from "./order.keys";

export function useCompleteOrderItem() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn: (
            itemId: string,
        ) =>
            orderService.completeOrderItem(
                itemId,
            ),

        onSuccess: async (_, itemId) => {

            await Promise.all([

                queryClient.invalidateQueries({
                    queryKey: orderKeys.today(),
                }),

                queryClient.invalidateQueries({
                    queryKey: orderKeys.items(),
                }),

                queryClient.invalidateQueries({
                    queryKey: orderKeys.item(itemId),
                }),

            ]);

        },

    });

}