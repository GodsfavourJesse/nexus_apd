"use client";

import {
    ShieldCheck,
    ShieldX,
    BadgeCheck,
} from "lucide-react";

import { useActivateUser } from "@/app/hooks/adminHooks/users/useActivateUser";
import { useSuspendUser } from "@/app/hooks/adminHooks/users/useSuspendUser";
import { useVerifyUser } from "@/app/hooks/adminHooks/users/useVerifyUser";

interface UserActionsCardProps {
    id: string;

    isActive: boolean;

    isVerified: boolean;
}

export default function UserActionsCard({
    id,
    isActive,
    isVerified,
}: UserActionsCardProps) {
    const suspend =
        useSuspendUser();

    const activate =
        useActivateUser();

    const verify =
        useVerifyUser();

    return (
        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5">
                <h2 className="text-lg font-semibold text-slate-900">
                    Account Actions
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Manage this user's account.
                </p>
            </div>

            <div className="flex flex-col gap-3">
                {isActive ? (
                    <button
                        type="button"
                        onClick={() =>
                            suspend.mutate(id)
                        }
                        disabled={
                            suspend.isPending
                        }
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            rounded-2xl
                            bg-red-600
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            transition
                            hover:bg-red-700
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >
                        <ShieldX size={18} />

                        {suspend.isPending
                            ? "Suspending..."
                            : "Suspend User"}
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={() =>
                            activate.mutate(id)
                        }
                        disabled={
                            activate.isPending
                        }
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            rounded-2xl
                            bg-emerald-600
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            transition
                            hover:bg-emerald-700
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >
                        <ShieldCheck
                            size={18}
                        />

                        {activate.isPending
                            ? "Activating..."
                            : "Activate User"}
                    </button>
                )}

                {!isVerified && (
                    <button
                        type="button"
                        onClick={() =>
                            verify.mutate(id)
                        }
                        disabled={
                            verify.isPending
                        }
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            rounded-2xl
                            bg-blue-600
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            transition
                            hover:bg-blue-700
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >
                        <BadgeCheck
                            size={18}
                        />

                        {verify.isPending
                            ? "Verifying..."
                            : "Verify User"}
                    </button>
                )}
            </div>
        </section>
    );
}