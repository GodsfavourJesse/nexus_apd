"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { withdrawalService } from "@/app/services/adminServices/withdrawal.service";
import { RejectWithdrawalDto } from "@/app/types/adminTypes/withdrawal.types";

export function useRejectWithdrawal(
    id: string,
) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (
            data: RejectWithdrawalDto,
        ) =>
            withdrawalService.rejectWithdrawal(
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