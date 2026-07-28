"use client";

import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { userService } from "../../../services/adminServices/user.service";

export function useActivateUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) =>
            userService.activateUser(id),

        onSuccess: (_, id) => {
            queryClient.invalidateQueries({
                queryKey: ["admin-users"],
            });

            queryClient.invalidateQueries({
                queryKey: [
                    "admin-user",
                    id,
                ],
            });
        },
    });
}