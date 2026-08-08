"use client";

import { useQuery } from "@tanstack/react-query";
import { membershipService } from "@/app/services/clientServices/membership.service";

export function useMembership(
    slug: string,
) {
    return useQuery({
        queryKey: [
            "membership",
            slug,
        ],

        queryFn: () => membershipService.getMembershipBySlug(
            slug,
        ),

        enabled: !!slug,

        staleTime: 1000 * 60 * 5,
    });
}