"use client";

import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {
    UpdateDailyOrderConfigDto,
} from "@/app/types/adminTypes/dailyOrderConfig.types";

import { dailyOrderConfigService } from "@/app/services/adminServices/dailyOrderConfig.service";

interface UpdateConfigMutation {
    id: string;
    data: UpdateDailyOrderConfigDto;
}

export function useUpdateDailyOrderConfig() {

    const queryClient =
        useQueryClient();

    return useMutation({
        mutationFn: ({
            id,
            data,
        }: UpdateConfigMutation) =>
            dailyOrderConfigService.updateConfig(
                id,
                data,
            ),

        onSuccess: (_, variables) => {

            queryClient.invalidateQueries({
                queryKey: [
                    "daily-order-configs",
                ],
            });

            queryClient.invalidateQueries({
                queryKey: [
                    "daily-order-config",
                    variables.id,
                ],
            });
        },
    });
}