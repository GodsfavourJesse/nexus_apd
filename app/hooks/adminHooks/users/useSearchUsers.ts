"use client";

import { useQuery } from "@tanstack/react-query";

import { userService } from "../../../services/adminServices/user.service";

export function useSearchUsers(
    query: string,
) {
    return useQuery({
        queryKey: [
            "admin-users-search",
            query,
        ],

        queryFn: () =>
            userService.searchUsers(
                query,
            ),

        enabled:
            query.trim().length > 0,
    });
}