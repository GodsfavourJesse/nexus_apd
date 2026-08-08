"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { upgradeService } from "@/app/services/clientServices/upgrade.service";

export function useCreateUpgradeRequest() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn:
            upgradeService.createUpgradeRequest,

        onSuccess: () => {
            toast.success(
                "Upgrade request submitted successfully.",
            );

            queryClient.invalidateQueries({
                queryKey: ["upgrade-requests"],
            });
        },

        onError: (error: any) => {
            toast.error(
                error?.response?.data?.message ??
                    "Unable to submit upgrade request.",
            );
        },
    });
}