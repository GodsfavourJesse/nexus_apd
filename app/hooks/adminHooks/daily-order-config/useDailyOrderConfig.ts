"use client";

import { useQuery } from "@tanstack/react-query";

import { dailyOrderConfigService } from "@/app/services/adminServices/dailyOrderConfig.service";

export function useDailyOrderConfig(id: string) {
    return useQuery({
        queryKey: [
            "daily-order-config",
            id,
        ],

        queryFn: () =>
            dailyOrderConfigService.getConfig(id),

        enabled: !!id,
    });
}