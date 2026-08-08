"use client";

import { useQuery } from "@tanstack/react-query";

import { upgradeService } from "@/app/services/clientServices/upgrade.service";

export function useValidateUpgrade(
    membershipPlanId: string,
) {
    return useQuery({
        queryKey: [
            "upgrade-validation",
            membershipPlanId,
        ],

        queryFn: () =>
            upgradeService.validateUpgrade(
                membershipPlanId,
            ),

        // IMPORTANT:
        // Do not automatically validate when the page loads.
        enabled: false,

        staleTime: 0,
    });
}