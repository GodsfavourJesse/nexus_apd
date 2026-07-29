"use client";

import { useQuery } from "@tanstack/react-query";

import { membershipPlanService } from "@/app/services/adminServices/membershipPlan.service";

export function useMembershipPlans() {
    return useQuery({
        queryKey: [
            "membership-plans",
        ],

        queryFn: () =>
            membershipPlanService.getMembershipPlans(),
    });
}