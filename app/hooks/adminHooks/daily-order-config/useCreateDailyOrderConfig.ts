"use client";

import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { dailyOrderConfigService } from "@/app/services/adminServices/dailyOrderConfig.service";

export function useCreateDailyOrderConfig() {

    const queryClient =
        useQueryClient();

    return useMutation({
        mutationFn:
            dailyOrderConfigService.createConfig,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [
                    "daily-order-configs",
                ],
            });
        },
    });
}