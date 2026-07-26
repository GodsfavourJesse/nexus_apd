"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/app/store/auth.store";
import { ROUTES } from "../constants/routes";

interface Props {
    children: ReactNode;
}

export default function AdminGuard({
    children,
}: Props) {
    const router = useRouter();

    const { user, isAuthenticated } =
        useAuthStore();

    useEffect(() => {
        if (!isAuthenticated) {
            router.replace(ROUTES.ADMIN_LOGIN);
            return;
        }

        if (user?.role !== "admin") {
            router.replace(ROUTES.DASHBOARD);
        }
    }, [user, isAuthenticated, router]);

    if (!user) return null;

    return <>{children}</>;
}