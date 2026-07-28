"use client";

import { upgradeRequestService } from "@/app/services/adminServices/upgrade-request.service";
import { useQuery } from "@tanstack/react-query";

export function useUpgradeRequest(
    id?: string,
) {
    return useQuery({
        queryKey: [
            "admin-upgrade-request",
            id,
        ],

        queryFn: () =>
            upgradeRequestService.getRequest(
                id!,
            ),

        enabled: !!id,
    });
}