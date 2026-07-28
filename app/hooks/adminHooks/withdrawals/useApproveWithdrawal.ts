"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { withdrawalService } from "@/app/services/adminServices/withdrawal.service";
import { ApproveWithdrawalDto } from "@/app/types/adminTypes/withdrawal.types";

export function useApproveWithdrawal(
    id: string,
) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (
            data?: ApproveWithdrawalDto,
        ) =>
            withdrawalService.approveWithdrawal(
                id,
                data,
            ),

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