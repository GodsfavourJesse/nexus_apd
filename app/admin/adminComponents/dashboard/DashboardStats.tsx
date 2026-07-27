"use client";

import {
    Users,
    Wallet,
    ArrowUpCircle,
    Clock3,
    TrendingUp,
    CreditCard,
} from "lucide-react";

interface DashboardStatistics {
    totalUsers: number;
    activeUsers: number;
    pendingUpgradeRequests: number;
    pendingWithdrawals: number;
    totalRevenue: number;
    totalTransactions: number;
}

interface DashboardStatsProps {
    statistics?: DashboardStatistics;
    loading?: boolean;
}

export default function DashboardStats({
    statistics,
    loading = false,
}: DashboardStatsProps) {
    const cards = [
        {
            title: "Users",
            value:
                statistics?.totalUsers ?? 0,
            icon: Users,
            color:
                "bg-blue-500/10 text-blue-600",
        },
        {
            title: "Active",
            value:
                statistics?.activeUsers ?? 0,
            icon: TrendingUp,
            color:
                "bg-green-500/10 text-green-600",
        },
        {
            title: "Revenue",
            value: `₦${Number(
                statistics?.totalRevenue ?? 0,
            ).toLocaleString()}`,
            icon: Wallet,
            color:
                "bg-emerald-500/10 text-emerald-600",
        },
        {
            title: "Transactions",
            value:
                statistics?.totalTransactions ??
                0,
            icon: CreditCard,
            color:
                "bg-purple-500/10 text-purple-600",
        },
        {
            title: "Upgrades",
            value:
                statistics?.pendingUpgradeRequests ??
                0,
            icon: ArrowUpCircle,
            color:
                "bg-orange-500/10 text-orange-600",
        },
        {
            title: "Withdrawals",
            value:
                statistics?.pendingWithdrawals ??
                0,
            icon: Clock3,
            color:
                "bg-red-500/10 text-red-600",
        },
    ];

    return (
        <section className="space-y-4">
            <div>
                <h2 className="text-lg font-bold text-slate-900">
                    Overview
                </h2>

                <p className="text-sm text-slate-500">
                    Platform statistics
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {cards.map((card) => {
                    const Icon = card.icon;

                    return (
                        <div
                            key={card.title}
                            className="
                                rounded-3xl
                                border
                                border-slate-200
                                bg-white
                                p-4
                                shadow-sm
                                transition-all
                                duration-300
                                active:scale-[0.98]
                            "
                        >
                            {loading ? (
                                <div className="space-y-4 animate-pulse">
                                    <div className="h-10 w-10 rounded-xl bg-slate-200" />

                                    <div className="space-y-2">
                                        <div className="h-5 w-20 rounded bg-slate-200" />

                                        <div className="h-3 w-14 rounded bg-slate-100" />
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div
                                        className={`
                                            mb-4
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            ${card.color}
                                        `}
                                    >
                                        <Icon
                                            size={
                                                24
                                            }
                                        />
                                    </div>

                                    <h3
                                        className="
                                            text-2xl
                                            font-bold
                                            tracking-tight
                                            text-slate-900
                                        "
                                    >
                                        {card.value}
                                    </h3>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            font-medium
                                            text-slate-500
                                        "
                                    >
                                        {card.title}
                                    </p>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}