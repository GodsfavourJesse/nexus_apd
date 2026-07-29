"use client";

import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { dailyOrderConfigService } from "@/app/services/adminServices/dailyOrderConfig.service";

export function useDeleteDailyOrderConfig() {
    const queryClient =
        useQueryClient();

    return useMutation({
        mutationFn: (id: string) =>
            dailyOrderConfigService.deleteConfig(
                id,
            ),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [
                    "daily-order-configs",
                ],
            });
        },
    });
}