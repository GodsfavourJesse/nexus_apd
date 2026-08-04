"use client";

import { useRouter } from "next/navigation";
import {
    ArrowDownLeft,
    ArrowUpRight,
    ReceiptText,
    Clock3,
} from "lucide-react";

interface Action {
    title: string;
    description: string;
    icon: React.ElementType;
    href: string;
    bg: string;
    iconBg: string;
    iconColor: string;
}

export default function WalletQuickActions() {
    const router = useRouter();

    const actions: Action[] = [
        {
            title: "Deposit",
            description: "Fund your wallet",
            icon: ArrowDownLeft,
            href: "/dashboard/wallet/deposit",
            bg: "bg-sky-50",
            iconBg: "bg-sky-100",
            iconColor: "text-sky-600",
        },
        {
            title: "Withdraw",
            description: "Transfer your funds",
            icon: ArrowUpRight,
            href: "/dashboard/withdrawals",
            bg: "bg-emerald-50",
            iconBg: "bg-emerald-100",
            iconColor: "text-emerald-600",
        },
        {
            title: "Transactions",
            description: "View wallet history",
            icon: ReceiptText,
            href: "/dashboard/transactions",
            bg: "bg-violet-50",
            iconBg: "bg-violet-100",
            iconColor: "text-violet-600",
        },
        {
            title: "Pending",
            description: "Processing requests",
            icon: Clock3,
            href: "/dashboard/wallet/withdrawals",
            bg: "bg-amber-50",
            iconBg: "bg-amber-100",
            iconColor: "text-amber-600",
        },
    ];

    return (
        <section className="space-y-4">

            <div>
                <h2 className="text-lg font-semibold text-slate-900">
                    Quick Actions
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Manage your wallet faster.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">

                {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                        <button
                            key={action.title}
                            type="button"
                            onClick={() => router.push(action.href)}
                            className={`
                                ${action.bg}
                                flex
                                flex-col
                                items-start
                                rounded-3xl
                                border
                                border-slate-200
                                p-5
                                text-left
                                transition-all
                                duration-200
                                active:scale-[0.97]
                            `}
                        >
                            <div
                                className={`
                                    ${action.iconBg}
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                `}
                            >
                                <Icon
                                    size={24}
                                    className={action.iconColor}
                                />
                            </div>

                            <h3 className="mt-5 text-base font-semibold text-slate-900">
                                {action.title}
                            </h3>

                            <p className="mt-1 text-sm leading-5 text-slate-500">
                                {action.description}
                            </p>
                        </button>
                    );
                })}

            </div>

        </section>
    );
}