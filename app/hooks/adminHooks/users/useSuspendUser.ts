"use client";

import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { userService } from "../../../services/adminServices/user.service";

export function useSuspendUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) =>
            userService.suspendUser(id),

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