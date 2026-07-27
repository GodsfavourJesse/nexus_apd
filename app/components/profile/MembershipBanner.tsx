"use client";

import { ShieldHalf } from "lucide-react";

import { useAuthStore } from "@/app/store/auth.store";

export default function MembershipBanner() {

    const user = useAuthStore(
        state => state.user
    );

    const membership = user?.membership;

    return (
        <div className="mx-4 mt-4 flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#7CC0FF] to-[#4DA8FE] px-5 py-4 shadow-sm">

            <div className="flex items-center gap-3">

                <ShieldHalf
                    size={32}
                    className="shrink-0 text-white/90"
                    strokeWidth={1.5}
                    fill="white"
                    fillOpacity={0.15}
                />

                <p className="font-serif text-base font-bold leading-snug text-slate-900">

                    {membership?.name ??
                        "Internship Member"}

                </p>

            </div>

            <div className="h-9 w-px bg-white/40" />

            <div className="text-right">

                <p className="font-serif text-sm font-bold text-white">
                    Work Deposit
                </p>

                <p className="text-sm font-semibold text-white">

                    ₦
                    {Number(
                        user?.membership
                            ?.workDeposit ?? 0
                    ).toLocaleString("en-NG", {
                        minimumFractionDigits: 2,
                    })}

                </p>

            </div>

        </div>
    );
}