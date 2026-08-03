"use client";

import { depositService } from "@/app/services/clientServices/deposit.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCancelDeposit() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (
            depositId: string,
        ) =>
            depositService.cancelDeposit(
                depositId,
            ),

        onSuccess: () => {
            toast.success(
                "Deposit request cancelled successfully.",
            );

            queryClient.invalidateQueries({
                queryKey: ["my-deposits"],
            });

            queryClient.invalidateQueries({
                queryKey: ["deposit"],
            });
        },
    });
}