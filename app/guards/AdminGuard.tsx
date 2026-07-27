"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { authService } from "@/app/services/auth.service";
import { useAuthStore } from "@/app/store/auth.store";
import { ROUTES } from "@/app/constants/routes";

interface Props {
    children: ReactNode;
}

export default function AdminGuard({
    children,
}: Props) {

    const router = useRouter();

    const pathname = usePathname();

    const {
        user,
        isAuthenticated,
        setUser,
        logout,
    } = useAuthStore();

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        let mounted = true;

        async function verify() {

            try {

                /**
                 * Already authenticated
                 * from Zustand.
                 */
                if (
                    isAuthenticated &&
                    user
                ) {

                    if (
                        user.role !==
                        "admin"
                    ) {

                        router.replace(
                            ROUTES.DASHBOARD,
                        );

                        return;
                    }

                    setLoading(false);

                    return;
                }

                /**
                 * Refresh or first load.
                 * Verify from backend.
                 */
                const response =
                    await authService.me();

                const currentUser =
                    response.data;

                /**
                 * Update store.
                 */
                setUser(
                    currentUser,
                );

                if (
                    currentUser.role !==
                    "admin"
                ) {

                    router.replace(
                        ROUTES.DASHBOARD,
                    );

                    return;
                }

            } catch {

                logout();

                router.replace(
                    `${ROUTES.ADMIN_LOGIN}?redirect=${encodeURIComponent(
                        pathname,
                    )}`,
                );

                return;

            } finally {

                if (mounted) {

                    setLoading(
                        false,
                    );

                }

            }

        }

        verify();

        return () => {

            mounted = false;

        };

    }, [
        pathname,
        router,
        user,
        isAuthenticated,
        logout,
        setUser,
    ]);

    if (loading) {

        return (

            <div
                className="
                    flex
                    min-h-screen
                    items-center
                    justify-center
                    bg-gray-50
                "
            >

                <div className="text-center">

                    <div
                        className="
                            mx-auto
                            h-12
                            w-12
                            animate-spin
                            rounded-full
                            border-4
                            border-gray-200
                            border-t-black
                        "
                    />

                    <h2
                        className="
                            mt-6
                            text-lg
                            font-semibold
                        "
                    >
                        Verifying Administrator
                    </h2>

                    <p
                        className="
                            mt-2
                            text-sm
                            text-gray-500
                        "
                    >
                        Please wait...
                    </p>

                </div>

            </div>

        );

    }

    if (
        !isAuthenticated ||
        !user ||
        user.role !== "admin"
    ) {

        return null;

    }

    return <>{children}</>;
}