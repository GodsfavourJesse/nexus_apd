"use client";

import { useQuery } from "@tanstack/react-query";

import { withdrawalService } from "@/app/services/adminServices/withdrawal.service";

export function useWithdrawal(
    id: string,
) {
    return useQuery({
        queryKey: ["withdrawal", id],

        queryFn: () =>
            withdrawalService.getWithdrawal(id),

        enabled: !!id,
    });
}