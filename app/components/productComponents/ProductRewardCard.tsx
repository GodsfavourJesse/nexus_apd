"use client";

import {
    Gift,
    Award,
    Layers3,
    Wallet,
} from "lucide-react";

interface Props {
    rewardPerTask: number;
    membershipName: string;
    remaining: number;
    dailyLimit: number;
    todaysEarnings: number;
}

export default function ProductRewardCard({
    rewardPerTask,
    membershipName,
    remaining,
    dailyLimit,
    todaysEarnings,
}: Props) {
    return (
        <div className="mx-4 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-5 text-white shadow-lg">

            <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                    <Gift size={22} />
                </div>

                <div>
                    <p className="text-sm text-emerald-100">
                        Reward Per Task
                    </p>

                    <h2 className="text-2xl font-bold">
                        ₦{rewardPerTask.toLocaleString()}
                    </h2>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">

                <div className="rounded-2xl bg-white/10 p-3">
                    <Award
                        size={18}
                        className="mb-2"
                    />

                    <p className="text-[11px] text-emerald-100">
                        Membership
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                        {membershipName}
                    </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-3">
                    <Layers3
                        size={18}
                        className="mb-2"
                    />

                    <p className="text-[11px] text-emerald-100">
                        Remaining
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                        {remaining}/{dailyLimit}
                    </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-3">
                    <Wallet
                        size={18}
                        className="mb-2"
                    />

                    <p className="text-[11px] text-emerald-100">
                        Earned
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                        ₦{todaysEarnings.toLocaleString()}
                    </p>
                </div>

            </div>
        </div>
    );
}