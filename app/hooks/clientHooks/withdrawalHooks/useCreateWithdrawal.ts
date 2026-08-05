"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { CreateWithdrawalDto } from "@/app/types/clientTypes/withdrawal.types";
import { withdrawalService } from "@/app/services/clientServices/withdrawal.service";

export function useCreateWithdrawal() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: CreateWithdrawalDto) =>
            withdrawalService.create(data),

        onSuccess: () => {
            toast.success(
                "Withdrawal request submitted successfully.",
            );

            queryClient.invalidateQueries({
                queryKey: ["withdrawals"],
            });
        },

        onError: (error: any) => {
            toast.error(
                error?.response?.data?.message ??
                    "Unable to submit withdrawal request.",
            );
        },
    });
}