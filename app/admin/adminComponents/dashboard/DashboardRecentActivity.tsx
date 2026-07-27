"use client";

import Link from "next/link";
import {
    ArrowUpCircle,
    CreditCard,
    Wallet,
    Bell,
    UserPlus,
    ChevronRight,
    Clock3,
} from "lucide-react";

interface Activity {
    id: string;
    type:
        | "upgrade"
        | "withdrawal"
        | "transaction"
        | "notification"
        | "user";
    title: string;
    description: string;
    createdAt: string;
    href?: string;
}

interface DashboardRecentActivityProps {
    activities?: Activity[];
    loading?: boolean;
}

const activityConfig = {
    upgrade: {
        icon: ArrowUpCircle,
        color:
            "bg-blue-100 text-blue-600",
    },

    withdrawal: {
        icon: CreditCard,
        color:
            "bg-emerald-100 text-emerald-600",
    },

    transaction: {
        icon: Wallet,
        color:
            "bg-violet-100 text-violet-600",
    },

    notification: {
        icon: Bell,
        color:
            "bg-amber-100 text-amber-600",
    },

    user: {
        icon: UserPlus,
        color:
            "bg-cyan-100 text-cyan-600",
    },
} as const;

export default function DashboardRecentActivity({
    activities = [],
    loading = false,
}: DashboardRecentActivityProps) {
    return (
        <section className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold text-slate-900">
                        Recent Activity
                    </h2>

                    <p className="text-sm text-slate-500">
                        Latest platform events
                    </p>
                </div>

                <Clock3
                    className="text-slate-400"
                    size={20}
                />
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                {loading ? (
                    <div className="space-y-5 p-5">
                        {[...Array(6)].map(
                            (_, index) => (
                                <div
                                    key={index}
                                    className="flex animate-pulse gap-4"
                                >
                                    <div className="h-12 w-12 rounded-2xl bg-slate-200" />

                                    <div className="flex-1 space-y-2">
                                        <div className="h-4 w-40 rounded bg-slate-200" />

                                        <div className="h-3 w-28 rounded bg-slate-100" />
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                ) : activities.length ===
                  0 ? (
                    <div className="flex h-56 items-center justify-center text-sm text-slate-500">
                        No recent activity.
                    </div>
                ) : (
                    <div className="divide-y divide-slate-100">
                        {activities.map(
                            (activity) => {
                                const config =
                                    activityConfig[
                                        activity.type
                                    ];

                                const Icon =
                                    config.icon;

                                const content = (
                                    <>
                                        <div
                                            className={`
                                                flex
                                                h-12
                                                w-12
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                ${config.color}
                                            `}
                                        >
                                            <Icon
                                                size={
                                                    22
                                                }
                                            />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <h3 className="truncate font-semibold text-slate-900">
                                                {
                                                    activity.title
                                                }
                                            </h3>

                                            <p className="mt-1 text-sm text-slate-500">
                                                {
                                                    activity.description
                                                }
                                            </p>

                                            <p className="mt-2 text-xs text-slate-400">
                                                {
                                                    activity.createdAt
                                                }
                                            </p>
                                        </div>

                                        {activity.href && (
                                            <ChevronRight
                                                size={
                                                    18
                                                }
                                                className="text-slate-400"
                                            />
                                        )}
                                    </>
                                );

                                if (
                                    activity.href
                                ) {
                                    return (
                                        <Link
                                            key={
                                                activity.id
                                            }
                                            href={
                                                activity.href
                                            }
                                            className="
                                                flex
                                                items-center
                                                gap-4
                                                p-5
                                                transition
                                                hover:bg-slate-50
                                                active:scale-[0.99]
                                            "
                                        >
                                            {
                                                content
                                            }
                                        </Link>
                                    );
                                }

                                return (
                                    <div
                                        key={
                                            activity.id
                                        }
                                        className="flex items-center gap-4 p-5"
                                    >
                                        {
                                            content
                                        }
                                    </div>
                                );
                            },
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}