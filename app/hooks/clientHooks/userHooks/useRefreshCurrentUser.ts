"use client";

import { useQueryClient } from "@tanstack/react-query";
import { currentUserKeys } from "./currentUser.keys";

export function useRefreshCurrentUser() {
    const queryClient = useQueryClient();

    return async () => {
        await queryClient.invalidateQueries({
            queryKey: currentUserKeys.me(),
        });
    };
}