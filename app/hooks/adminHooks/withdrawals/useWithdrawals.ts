"use client";

import { useQuery } from "@tanstack/react-query";

import { withdrawalService } from "@/app/services/adminServices/withdrawal.service";

export function useWithdrawals() {
    return useQuery({
        queryKey: ["withdrawals"],

        queryFn: () =>
            withdrawalService.getWithdrawals(),
    });
}