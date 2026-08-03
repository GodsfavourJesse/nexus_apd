"use client";

import { adminDepositService } from "@/app/services/adminServices/admin-deposit.service";
import { useQuery } from "@tanstack/react-query";

export const usePendingDeposits = () => {
    return useQuery({
        queryKey: ["pending-admin-deposits"],

        queryFn: () =>
            adminDepositService.findPending(),
    });
};