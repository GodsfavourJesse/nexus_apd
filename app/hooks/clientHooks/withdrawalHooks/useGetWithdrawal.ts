"use client";

import { withdrawalService } from "@/app/services/clientServices/withdrawal.service";
import { useQuery } from "@tanstack/react-query";

export function useGetWithdrawal(
    withdrawalId?: string,
) {
    return useQuery({
        queryKey: [
            "withdrawal",
            withdrawalId,
        ],

        queryFn: () =>
            withdrawalService.findById(
                withdrawalId!,
            ),

        enabled: !!withdrawalId,
    });
}