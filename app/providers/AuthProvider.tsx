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
        accessToken,
        user,
        setUser,
        logout,
    } = useAuthStore();

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        let mounted = true;

        async function initialize() {

            /**
             * No authenticated session.
             */
            if (!accessToken) {

                if (mounted) {
                    setLoading(false);
                }

                return;

            }

            /**
             * User already loaded.
             */
            if (user) {

                if (mounted) {
                    setLoading(false);
                }

                return;

            }

            try {

                /**
                 * If the access token has expired,
                 * the Axios interceptor will refresh
                 * it automatically before retrying
                 * this request.
                 */
                const response =
                    await axiosInstance.get(
                        "/auth/me",
                    );

                if (mounted) {

                    setUser(
                        response.data.data,
                    );

                }

            } catch {

                if (mounted) {

                    logout();

                }

            } finally {

                if (mounted) {

                    setLoading(false);

                }

            }

        }

        initialize();

        return () => {

            mounted = false;

        };

    }, [
        accessToken,
        user,
        setUser,
        logout,
    ]);

    if (loading) {

        return null;

    }

    return children;

}