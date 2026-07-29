"use client";

import { useQuery } from "@tanstack/react-query";

import { dailyOrderConfigService } from "@/app/services/adminServices/dailyOrderConfig.service";

export function useDailyOrderConfigs() {
    return useQuery({
        queryKey: ["daily-order-configs"],

        queryFn: () =>
            dailyOrderConfigService.getConfigs(),
    });
}