"use client";

import Link from "next/link";
import {
    ArrowUpCircle,
    CreditCard,
    Users,
    Bell,
    ShieldCheck,
    BarChart3,
} from "lucide-react";

interface QuickAction {
    title: string;
    description: string;
    href: string;
    icon: React.ElementType;
    color: string;
}

const ACTIONS: QuickAction[] = [
    {
        title: "Upgrade Requests",
        description: "Review memberships",
        href: "/admin/upgrades",
        icon: ArrowUpCircle,
        color: "bg-blue-500/10 text-blue-600",
    },
    {
        title: "Withdrawals",
        description: "Approve payouts",
        href: "/admin/withdrawals",
        icon: CreditCard,
        color: "bg-emerald-500/10 text-emerald-600",
    },
    {
        title: "Users",
        description: "Manage members",
        href: "/admin/users",
        icon: Users,
        color: "bg-violet-500/10 text-violet-600",
    },
    {
        title: "Notifications",
        description: "Send updates",
        href: "/admin/notifications",
        icon: Bell,
        color: "bg-orange-500/10 text-orange-600",
    },
    {
        title: "Memberships",
        description: "Plans & pricing",
        href: "/admin/memberships",
        icon: ShieldCheck,
        color: "bg-cyan-500/10 text-cyan-600",
    },
    {
        title: "Reports",
        description: "View analytics",
        href: "/admin/reports",
        icon: BarChart3,
        color: "bg-rose-500/10 text-rose-600",
    },
];

export default function DashboardQuickActions() {
    return (
        <section className="space-y-4">
            <div>
                <h2 className="text-lg font-bold text-slate-900">
                    Quick Actions
                </h2>

                <p className="text-sm text-slate-500">
                    Frequently used administrator tools
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {ACTIONS.map((action) => {
                    const Icon = action.icon;

                    return (
                        <Link
                            key={action.href}
                            href={action.href}
                            className="
                                group
                                rounded-3xl
                                border
                                border-slate-200
                                bg-white
                                p-4
                                shadow-sm
                                transition-all
                                duration-300
                                hover:border-blue-200
                                hover:shadow-lg
                                active:scale-[0.98]
                            "
                        >
                            <div
                                className={`
                                    mb-4
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    transition-transform
                                    duration-300
                                    group-hover:scale-110
                                    ${action.color}
                                `}
                            >
                                <Icon size={24} />
                            </div>

                            <h3 className="font-semibold text-slate-900">
                                {action.title}
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                                {action.description}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}