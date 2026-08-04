import { create } from "zustand";
import {
    createJSONStorage,
    persist,
} from "zustand/middleware";

import { User } from "../types/clientTypes/auth";

interface AuthState {
    user: User | null;

    accessToken: string | null;

    refreshToken: string | null;

    isAuthenticated: boolean;

    isAdmin: boolean;

    isUser: boolean;

    setUser: (
        user: User | null,
    ) => void;

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

                setUser: (user) =>
                    set({

                        user,

                        isAdmin:
                            user?.role ===
                            "admin",

                        isUser:
                            user?.role ===
                            "user",

                    }),

                login: (
                    accessToken,
                    refreshToken,
                ) =>
                    set({

                        accessToken,

                        refreshToken,

                        isAuthenticated: true,

                    }),

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
                        () => localStorage,
                    ),

                partialize: (state) => ({

                    accessToken:
                        state.accessToken,

                    refreshToken:
                        state.refreshToken,

                    isAuthenticated:
                        state.isAuthenticated,

                }),

            },
        ),
    );