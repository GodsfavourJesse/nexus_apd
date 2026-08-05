"use client";

import { withdrawalService } from "@/app/services/clientServices/withdrawal.service";
import { useQuery } from "@tanstack/react-query";

export function useGetWithdrawals() {
    return useQuery({
        queryKey: ["withdrawals"],

        queryFn: withdrawalService.findAll,
    });
}