"use client";

import { adminDepositService } from "@/app/services/adminServices/admin-deposit.service";
import { useQuery } from "@tanstack/react-query";

export const useAdminDeposits = () => {
    return useQuery({
        queryKey: ["admin-deposits"],

        queryFn: () =>
            adminDepositService.findAll(),
    });
};