"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { withdrawalService } from "@/app/services/adminServices/withdrawal.service";

export function useMarkPaidWithdrawal(
    id: string,
) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () =>
            withdrawalService.markPaid(id),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["withdrawals"],
            });

            queryClient.invalidateQueries({
                queryKey: [
                    "withdrawal",
                    id,
                ],
            });
        },
    });
}