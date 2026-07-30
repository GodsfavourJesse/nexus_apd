"use client";

import { CheckCircle2 } from "lucide-react";

export default function EmptyProducts() {
    return (
        <div
            className="
                flex
                min-h-[360px]
                flex-col
                items-center
                justify-center
                rounded-3xl
                bg-white
                px-8
                text-center
                shadow-sm
            "
        >
            <div
                className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-emerald-100
                "
            >
                <CheckCircle2
                    size={40}
                    className="text-emerald-600"
                />
            </div>

            <h2 className="mt-6 text-xl font-bold text-slate-900">
                All Tasks Completed 🎉
            </h2>

            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
                You've successfully completed all available tasks for today.
                Come back tomorrow for a fresh set of advertisements and more rewards.
            </p>

            <div
                className="
                    mt-6
                    rounded-full
                    bg-emerald-50
                    px-5
                    py-2
                    text-sm
                    font-medium
                    text-emerald-700
                "
            >
                Daily quota completed
            </div>
        </div>
    );
}