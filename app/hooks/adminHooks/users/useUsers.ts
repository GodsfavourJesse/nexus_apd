"use client";

import { useQuery } from "@tanstack/react-query";

import { userService } from "../../../services/adminServices/user.service";

interface UseUsersOptions {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}

export function useUsers(
    options?: UseUsersOptions,
) {
    return useQuery({
        queryKey: [
            "admin-users",
            options,
        ],

        queryFn: () =>
            userService.getUsers({
                page: String(
                    options?.page ?? 1,
                ),

                limit: String(
                    options?.limit ?? 20,
                ),

                sortBy:
                    options?.sortBy ??
                    "createdAt",

                sortOrder:
                    options?.sortOrder ??
                    "desc",
            }),
    });
}