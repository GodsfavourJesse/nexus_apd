"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/app/store/auth.store";
import { ROUTES } from "../constants/routes";

interface Props {
    children: ReactNode;
}

export default function UserGuard({
    children,
}: Props) {
    const router = useRouter();

    const { user, isAuthenticated } =
        useAuthStore();

    useEffect(() => {
        if (!isAuthenticated) {
            router.replace(
                ROUTES.LOGIN
            );
            return;
        }

        if (user?.role !== "user") {
            router.replace(
                ROUTES.ADMIN_DASHBOARD
            );
        }
    }, [isAuthenticated, user, router]);

    if (!user) return null;

    return <>{children}</>;
}