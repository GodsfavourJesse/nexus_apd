"use client";

import { useQuery } from "@tanstack/react-query";

import { membershipService } from "@/app/services/clientServices/membership.service";

export function useMemberships() {
    return useQuery({
        queryKey: ["memberships"],

        queryFn: () =>
            membershipService.getMemberships(),

        staleTime: 1000 * 60 * 5,
    });
}