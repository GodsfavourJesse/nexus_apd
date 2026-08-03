"use client";

import { useState } from "react";

  import Cookies from "js-cookie";

import { useRouter } from "next/navigation";

import {
    Loader2,
    LogOut,
} from "lucide-react";

import { toast } from "sonner";

import { useQueryClient } from "@tanstack/react-query";

import { authService } from "@/app/services/clientServices/auth.service";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function LogoutDialog({
    open,
    onClose,
}: Props) {

    const router =
        useRouter();

    const queryClient =
        useQueryClient();

    const [
        loading,
        setLoading,
    ] = useState(false);


    const handleLogout = async () => {

        try {

            setLoading(true);

            const refreshToken =
                Cookies.get("refreshToken") ??
                localStorage.getItem("refreshToken");

            if (refreshToken) {

                await authService.logout(
                    refreshToken,
                );

            }

            authService.clearSession();

            queryClient.clear();

            toast.success(
                "Logged out successfully.",
            );

            router.replace(
                "/login",
            );

            router.refresh();

        } catch (error: any) {

            toast.error(
                error?.response?.data?.message ??
                "Unable to logout.",
            );

        } finally {

            setLoading(false);

        }

    };

    if (!open) {
        return null;
    }

    return (

        <div
            className="
                fixed
                inset-0
                z-100
                flex
                items-center
                justify-center
                bg-black/50
                px-5
                backdrop-blur-sm
            "
        >

            <div
                className="
                    w-full
                    max-w-sm
                    rounded-3xl
                    bg-white
                    p-6
                    shadow-2xl
                "
            >

                <div
                    className="
                        mx-auto
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        bg-red-100
                    "
                >

                    <LogOut
                        size={30}
                        className="text-red-600"
                    />

                </div>

                <h2
                    className="
                        mt-5
                        text-center
                        text-2xl
                        font-bold
                        text-slate-900
                    "
                >
                    Logout Account
                </h2>

                <p
                    className="
                        mt-2
                        text-center
                        text-sm
                        leading-6
                        text-slate-500
                    "
                >
                    Are you sure you want to log out?
                </p>

                <p
                    className="
                        mt-1
                        text-center
                        text-xs
                        text-slate-400
                    "
                >
                    You'll need to sign in again to access your account.
                </p>

                <div
                    className="
                        mt-7
                        flex
                        gap-3
                    "
                >

                    <button
                        type="button"
                        disabled={loading}
                        onClick={onClose}
                        className="
                            flex-1
                            rounded-2xl
                            border
                            border-slate-200
                            py-3
                            font-medium
                            text-slate-700
                            transition
                            hover:bg-slate-100
                            disabled:cursor-not-allowed
                        "
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        disabled={loading}
                        onClick={handleLogout}
                        className="
                            flex
                            flex-1
                            items-center
                            justify-center
                            gap-2
                            rounded-2xl
                            bg-red-600
                            py-3
                            font-semibold
                            text-white
                            transition
                            hover:bg-red-700
                            disabled:cursor-not-allowed
                        "
                    >

                        {loading ? (
                            <>
                                <Loader2
                                    size={18}
                                    className="animate-spin"
                                />
                                Logging out...
                            </>
                        ) : (
                            <>
                                <LogOut size={18} />
                                Logout
                            </>
                        )}

                    </button>

                </div>

            </div>

        </div>

    );

}