import { create } from "zustand";
import {
    createJSONStorage,
    persist,
} from "zustand/middleware";

import { User } from "../types/auth";

interface AuthState {
    user: User | null;

    accessToken: string | null;

    refreshToken: string | null;

    isAuthenticated: boolean;

    isAdmin: boolean;

    isUser: boolean;

    /**
     * Stores the authenticated user.
     */
    setUser: (
        user: User | null,
    ) => void;

    /**
     * Stores only the tokens.
     * User is loaded afterwards from /auth/me.
     */
    login: (
        accessToken: string,
        refreshToken: string,
    ) => void;

    logout: () => void;
}

export const useAuthStore =
    create<AuthState>()(
        persist(
            (set) => ({
                user: null,

                accessToken: null,

                refreshToken: null,

                isAuthenticated: false,

                isAdmin: false,

                isUser: false,

                /**
                 * Save authenticated user.
                 */
                setUser: (
                    user,
                ) =>
                    set({
                        user,

                        isAuthenticated:
                            !!user,

                        isAdmin:
                            user?.role ===
                            "admin",

                        isUser:
                            user?.role ===
                            "user",
                    }),

                /**
                 * Save tokens only.
                 */
                login: (
                    accessToken,
                    refreshToken,
                ) =>
                    set({
                        accessToken,
                        refreshToken,
                        isAuthenticated: true,
                    }),

                /**
                 * Logout.
                 */
                logout: () =>
                    set({
                        user: null,

                        accessToken: null,

                        refreshToken: null,

                        isAuthenticated: false,

                        isAdmin: false,

                        isUser: false,
                    }),
            }),

            {
                name: "auth-storage",

                storage:
                    createJSONStorage(
                        () =>
                            localStorage,
                    ),

                partialize: (
                    state,
                ) => ({
                    user: state.user,

                    accessToken:
                        state.accessToken,

                    refreshToken:
                        state.refreshToken,

                    isAuthenticated:
                        state.isAuthenticated,

                    isAdmin:
                        state.isAdmin,

                    isUser:
                        state.isUser,
                }),
            },
        ),
    );