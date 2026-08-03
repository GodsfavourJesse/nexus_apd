"use client";

import { useQuery } from "@tanstack/react-query";

import { orderKeys } from "./order.keys";
import { orderService } from "@/app/services/clientServices/order.service";

export function useOrderItem(
    itemId: string,
) {
    return useQuery({
        queryKey:
            orderKeys.item(itemId),

        queryFn: () =>
            orderService.getOrderItem(
                itemId,
            ),

        enabled: !!itemId,
    });
}