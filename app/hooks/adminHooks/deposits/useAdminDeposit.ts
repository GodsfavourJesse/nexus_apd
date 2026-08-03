"use client";

import { adminDepositService } from "@/app/services/adminServices/admin-deposit.service";
import { useQuery } from "@tanstack/react-query";

export const useAdminDeposit = (
    depositId: string,
) => {
    return useQuery({
        queryKey: [
            "admin-deposit",
            depositId,
        ],

        queryFn: () =>
            adminDepositService.findById(
                depositId,
            ),

        enabled: !!depositId,
    });
};