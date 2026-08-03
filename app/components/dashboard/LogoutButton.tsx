"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

import { authService } from "@/app/services/clientServices/auth.service";
import { useAuthStore } from "@/app/store/auth.store";
import { useWalletStore } from "@/app/store/wallet.store";
import { ROUTES } from "@/app/constants/routes";

export default function LogoutButton() {
    const router = useRouter();

    const [loading, setLoading] =
        useState(false);

    const refreshToken =
        useAuthStore(
            (state) => state.refreshToken
        );

    const logout =
        useAuthStore(
            (state) => state.logout
        );

    const clearWallet =
        useWalletStore(
            (state) => state.clearWallet
        );

    const handleLogout = async () => {
        try {
            setLoading(true);

            if (refreshToken) {
                await authService.logout(
                    refreshToken
                );
            }
        } catch {
            // Ignore API errors.
        } finally {
            logout();

            clearWallet();

            toast.success(
                "Logged out successfully."
            );

            router.replace(
                ROUTES.LOGIN
            );
        }
    };

    return (
        <button
            onClick={handleLogout}
            disabled={loading}
            className="
                flex items-center gap-2
                rounded-lg
                bg-red-600
                px-4
                py-2
                text-white
                transition
                hover:bg-red-700
                disabled:opacity-50
            "
        >
            <LogOut size={18} />

            {loading
                ? "Logging out..."
                : "Logout"}
        </button>
    );
}