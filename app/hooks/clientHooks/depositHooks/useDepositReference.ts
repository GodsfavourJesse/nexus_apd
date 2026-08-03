"use client";

import { depositService } from "@/app/services/clientServices/deposit.service";
import { useQuery } from "@tanstack/react-query";

export function useDepositByReference(
    reference?: string,
) {
    return useQuery({
        queryKey: [
            "deposit",
            "reference",
            reference,
        ],

        queryFn: async () => {
            if (!reference) {
                throw new Error(
                    "Deposit reference is required.",
                );
            }

            return depositService.getDepositByReference(
                reference,
            );
        },

        enabled:
            typeof reference === "string" &&
            reference.trim().length > 0,

        staleTime: 1000 * 60 * 5, // 5 minutes

        gcTime: 1000 * 60 * 10, // 10 minutes

        retry: 1,

        refetchOnWindowFocus: false,
    });
}