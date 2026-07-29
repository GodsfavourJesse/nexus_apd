"use client";

import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { dailyOrderConfigService } from "@/app/services/adminServices/dailyOrderConfig.service";

export function useDeactivateDailyOrderConfig() {

    const queryClient =
        useQueryClient();

    return useMutation({
        mutationFn: (
            id: string,
        ) =>
            dailyOrderConfigService.deactivateConfig(
                id,
            ),

        onSuccess: (_, id) => {

            queryClient.invalidateQueries({
                queryKey: [
                    "daily-order-configs",
                ],
            });

            queryClient.invalidateQueries({
                queryKey: [
                    "daily-order-config",
                    id,
                ],
            });
        },
    });
}