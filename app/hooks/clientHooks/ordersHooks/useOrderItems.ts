"use client";

import { useQuery } from "@tanstack/react-query";

import { orderKeys } from "./order.keys";
import { orderService } from "@/app/services/clientServices/order.service";

export function useOrderItems() {
    return useQuery({
        queryKey: orderKeys.items(),

        queryFn: () =>
            orderService.getOrderItems(),
    });
}