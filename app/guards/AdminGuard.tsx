"use client";

import { ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { ROUTES } from "@/app/constants/routes";
import { useAuthStore } from "@/app/store/auth.store";

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
    } = useAuthStore();

    useEffect(() => {

        /**
         * Wait until AuthProvider
         * finishes restoring the session.
         */
        if (!isAuthenticated) {

            router.replace(
                `${ROUTES.ADMIN_LOGIN}?redirect=${encodeURIComponent(
                    pathname,
                )}`,
            );

            return;

        }

        /**
         * Authenticated but not an admin.
         */
        if (
            user &&
            user.role !== "admin"
        ) {

            router.replace(
                ROUTES.DASHBOARD,
            );

        }

    }, [
        isAuthenticated,
        user,
        pathname,
        router,
    ]);

    /**
     * AuthProvider is still loading the user.
     */
    if (
        isAuthenticated &&
        !user
    ) {

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
                        Loading...
                    </h2>

                    <p
                        className="
                            mt-2
                            text-sm
                            text-gray-500
                        "
                    >
                        Verifying administrator session...
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