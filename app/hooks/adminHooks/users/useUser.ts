"use client";

import { useQuery } from "@tanstack/react-query";

import { userService } from "../../../services/adminServices/user.service";

export function useUser(
    userId?: string,
) {
    return useQuery({
        queryKey: [
            "admin-user",
            userId,
        ],

        queryFn: () =>
            userService.getUser(
                userId!,
            ),

        enabled: !!userId,
    });
}