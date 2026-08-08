"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { upgradeService } from "@/app/services/clientServices/upgrade.service";

export function useCancelUpgradeRequest() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: upgradeService.cancelUpgradeRequest,

        onSuccess: () => {
            toast.success(
                "Upgrade request cancelled.",
            );

            queryClient.invalidateQueries({
                queryKey: ["upgrade-requests"],
            });

            queryClient.invalidateQueries({
                queryKey: ["upgrade-validation"],
            });
        },

        onError: (error: any) => {
            toast.error(
                error?.response?.data?.message ??
                    "Unable to cancel upgrade request.",
            );
        },
    });
}