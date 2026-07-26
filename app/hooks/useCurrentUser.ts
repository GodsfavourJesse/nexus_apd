"use client";

import { useEffect } from "react";

import { authService } from "@/app/services/auth.service";
import { useAuthStore } from "@/app/store/auth.store";

export function useCurrentUser() {
    const {
        accessToken,
        user,
        setUser,
        logout,
    } = useAuthStore();

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        /**
         * Already loaded.
         */
        if (user) {
            return;
        }

        const loadUser =
            async () => {
                try {
                    const me =
                        await authService.me();

                    setUser(
                        me.data,
                    );
                } catch {
                    logout();
                }
            };

        loadUser();
    }, [
        accessToken,
        user,
        setUser,
        logout,
    ]);
}