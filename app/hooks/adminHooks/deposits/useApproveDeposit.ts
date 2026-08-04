"use client";

import { adminDepositService } from "@/app/services/adminServices/admin-deposit.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useApproveDeposit = () => {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn: ({
            depositId,
            data,
        }: {
            depositId: string;
            data: {
                adminRemark?: string;
            };
        }) =>
            adminDepositService.approve(
                depositId,
                data,
            ),

        onSuccess: (_, variables) => {
            toast.success(
                "Deposit approved successfully.",
            );

            queryClient.invalidateQueries({
                queryKey:[
                    "admin-deposits",
                ],
            });

            queryClient.invalidateQueries({
                queryKey:[
                    "pending-admin-deposits",
                ],
            });

            queryClient.invalidateQueries({
                queryKey:[
                    "admin-deposit",
                    variables.depositId,
                ],
            });
        },

        onError: (
            error: any,
        ) => {

            toast.error(
                error?.response?.data?.message ??
                    "Failed to approve deposit.",
            );

        },

    });

};