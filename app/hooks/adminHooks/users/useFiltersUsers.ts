"use client";

import { useQuery } from "@tanstack/react-query";

import { userService } from "../../../services/adminServices/user.service";

export interface UserFilterOptions {
    membershipPlanId?: string;
    isActive?: boolean;
    isVerified?: boolean;
    role?: string;
    createdFrom?: string;
    createdTo?: string;
}

export function useFilterUsers(
    filters: UserFilterOptions,
) {
    const hasFilters = Object.values(filters).some(
        (value) =>
            value !== undefined &&
            value !== "",
    );

    return useQuery({
        queryKey: [
            "admin-users-filter",
            filters,
        ],

        enabled: hasFilters,

        queryFn: () => {

            const params: Record<
                string,
                string
            > = {};

            if (
                filters.membershipPlanId
            ) {
                params.membershipPlanId =
                    filters.membershipPlanId;
            }

            if (
                filters.isActive !==
                undefined
            ) {
                params.isActive =
                    String(
                        filters.isActive,
                    );
            }

            if (
                filters.isVerified !==
                undefined
            ) {
                params.isVerified =
                    String(
                        filters.isVerified,
                    );
            }

            if (filters.role) {
                params.role =
                    filters.role;
            }

            if (
                filters.createdFrom
            ) {
                params.createdFrom =
                    filters.createdFrom;
            }

            if (
                filters.createdTo
            ) {
                params.createdTo =
                    filters.createdTo;
            }

            return userService.filterUsers(
                params,
            );
        },
    });
}