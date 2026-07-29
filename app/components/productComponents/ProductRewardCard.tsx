"use client";

import { Gift } from "lucide-react";

export default function ProductRewardCard() {
    return (
        <div className="mx-4 flex items-start gap-3 rounded-2xl bg-emerald-50 p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <Gift size={18} />
            </div>

            <div className="min-w-0">
                <p className="text-[15px] font-semibold text-emerald-800">
                    Daily Reward
                </p>
                <p className="mt-0.5 text-[13px] leading-5 text-emerald-700">
                    Your reward will be calculated based on your membership
                    plan.
                </p>
            </div>
        </div>
    );
}