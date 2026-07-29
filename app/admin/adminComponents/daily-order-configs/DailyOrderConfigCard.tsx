"use client";

import Link from "next/link";

import { DailyOrderConfig } from "@/app/types/adminTypes/dailyOrderConfig.types";

interface DailyOrderConfigCardProps {
    config: DailyOrderConfig;
}

export default function DailyOrderConfigCard({
    config,
}: DailyOrderConfigCardProps) {
    return (
        <Link
            href={`/admin/daily-order-configs/${config.id}`}
            className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                        {config.membershipPlan?.name ??
                            "Unknown Membership"}
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                        Created{" "}
                        {new Date(
                            config.createdAt,
                        ).toLocaleDateString()}
                    </p>
                </div>

                <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                        config.isActive
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }`}
                >
                    {config.isActive
                        ? "Active"
                        : "Inactive"}
                </span>
            </div>

            <div className="mt-5 space-y-3 text-sm">

                <div className="flex justify-between">
                    <span className="text-slate-500">
                        Tasks Per Day
                    </span>

                    <span className="font-medium">
                        {config.tasksPerDay}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-slate-500">
                        Reward Per Task
                    </span>

                    <span className="font-medium">
                        ₦{config.rewardPerTask}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-slate-500">
                        Daily Reward Limit
                    </span>

                    <span className="font-medium">
                        ₦{config.dailyRewardLimit}
                    </span>
                </div>

            </div>
        </Link>
    );
}