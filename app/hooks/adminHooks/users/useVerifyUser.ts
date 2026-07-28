"use client";

import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { userService } from "../../../services/adminServices/user.service";

export function useVerifyUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) =>
            userService.verifyUser(id),

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