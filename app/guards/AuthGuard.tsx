"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/app/store/auth.store";
import { ROUTES } from "../constants/routes";

interface Props {
    children: ReactNode;
}

export default function AuthGuard({
    children,
}: Props) {
    const router = useRouter();

    const isAuthenticated =
        useAuthStore(
            (state) => state.isAuthenticated
        );

    useEffect(() => {
        if (!isAuthenticated) {
            router.replace(ROUTES.LOGIN);
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
        return null;
    }

    return <>{children}</>;
}