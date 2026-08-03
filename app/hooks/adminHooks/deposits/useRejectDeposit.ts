"use client";

import { adminDepositService } from "@/app/services/adminServices/admin-deposit.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useRejectDeposit = () => {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn: ({
            depositId,
            data,
        }: {
            depositId: string;
            data: {
                adminRemark: string;
            };
        }) =>
            adminDepositService.reject(
                depositId,
                data,
            ),

        onSuccess: () => {

            toast.success(
                "Deposit rejected successfully.",
            );

            queryClient.invalidateQueries({
                queryKey: [
                    "admin-deposits",
                ],
            });

            queryClient.invalidateQueries({
                queryKey: [
                    "pending-admin-deposits",
                ],
            });

        },

        onError: (
            error: any,
        ) => {

            toast.error(
                error?.response?.data?.message ??
                    "Failed to reject deposit.",
            );

        },

    });

};