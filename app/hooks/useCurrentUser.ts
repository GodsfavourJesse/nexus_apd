"use client";

import { useAuthStore } from "@/app/store/auth.store";

export function useCurrentUser() {

    const {
        user,
        isAuthenticated,
    } = useAuthStore();

    return {
        user,
        isAuthenticated,
    };

}