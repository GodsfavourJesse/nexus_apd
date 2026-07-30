"use client";

import { useEffect, useState } from "react";
import axiosInstance from "@/app/lib/axios";
import { useAuthStore } from "@/app/store/auth.store";

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const {
        refreshToken,
        setUser,
        logout,
    } = useAuthStore();

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        async function restoreSession() {

            if (!refreshToken) {
                setLoading(false);
                return;
            }

            try {

                const refreshResponse = await axiosInstance.post(
                    "/auth/refresh",
                    {
                        refreshToken,
                    }
                );

                const {
                    accessToken: newAccessToken,
                    refreshToken: newRefreshToken,
                } = refreshResponse.data.data;

                useAuthStore
                    .getState()
                    .login(
                        newAccessToken,
                        newRefreshToken,
                    );

                const response = await axiosInstance.get(
                    "/auth/me"
                );

                setUser(response.data.data);

            } catch {

                logout();

            } finally {

                setLoading(false);

            }

        }

        restoreSession();

    }, []);

    if (loading) {
        return null;
    }

    return children;
}