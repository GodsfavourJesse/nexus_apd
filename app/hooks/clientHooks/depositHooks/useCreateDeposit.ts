"use client";

import { depositService } from "@/app/services/clientServices/deposit.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCreateDeposit() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: depositService.createDeposit.bind(
            depositService,
        ),

        onSuccess: () => {
            toast.success(
                "Deposit request submitted successfully.",
            );

            queryClient.invalidateQueries({
                queryKey: ["my-deposits"],
            });
        },
    });
}