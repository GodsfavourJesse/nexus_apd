"use client";

import { depositService } from "@/app/services/clientServices/deposit.service";
import { useQuery } from "@tanstack/react-query";

export function useDeposit(
    depositId: string,
) {
    return useQuery({
        queryKey: [
            "deposit",
            depositId,
        ],

        queryFn: () =>
            depositService.getDeposit(
                depositId,
            ),

        enabled: !!depositId,
    });
}