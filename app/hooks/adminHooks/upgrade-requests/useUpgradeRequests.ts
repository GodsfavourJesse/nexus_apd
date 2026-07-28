"use client";

import { upgradeRequestService } from "@/app/services/adminServices/upgrade-request.service";
import { useQuery } from "@tanstack/react-query";

export function useUpgradeRequests() {
    return useQuery({
        queryKey: ["admin-upgrade-requests"],

        queryFn: () =>
            upgradeRequestService.getRequests(),
    });
}