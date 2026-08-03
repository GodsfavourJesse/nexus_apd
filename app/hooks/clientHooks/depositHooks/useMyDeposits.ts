"use client";

import { depositService } from "@/app/services/clientServices/deposit.service";
import { useQuery } from "@tanstack/react-query";

export function useMyDeposits() {
    return useQuery({
        queryKey: ["my-deposits"],

        queryFn: () =>
            depositService.getMyDeposits(),
    });
}