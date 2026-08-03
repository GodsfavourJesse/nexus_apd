"use client";

import { CheckCircle2, Clock3, Wallet, XCircle } from "lucide-react";

interface DepositSummaryCardsProps {
    total: number;
    pending: number;
    approved: number;
    declined: number;
}

export function DepositSummaryCards({
    total,
    pending,
    approved,
    declined,
}: DepositSummaryCardsProps) {
    const cards = [
        {
            title: "Total",
            value: total,
            icon: Wallet,
            tint: "bg-blue-500/10 text-blue-600",
        },
        {
            title: "Pending",
            value: pending,
            icon: Clock3,
            tint: "bg-amber-500/10 text-amber-600",
        },
        {
            title: "Approved",
            value: approved,
            icon: CheckCircle2,
            tint: "bg-emerald-500/10 text-emerald-600",
        },
        {
            title: "Declined",
            value: declined,
            icon: XCircle,
            tint: "bg-red-500/10 text-red-600",
        },
    ];

    return (
        <div className="-mx-4 overflow-x-auto px-4">
            <div className="flex gap-3" style={{ width: "max-content" }}>
                {cards.map((card) => {
                    const Icon = card.icon;

                    return (
                        <div
                            key={card.title}
                            className="w-[132px] shrink-0 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm"
                        >
                            <div
                                className={`flex h-8 w-8 items-center justify-center rounded-lg ${card.tint}`}
                            >
                                <Icon size={16} />
                            </div>

                            <p className="mt-2.5 text-[22px] font-bold leading-none tracking-tight text-slate-900">
                                {card.value.toLocaleString()}
                            </p>

                            <p className="mt-1 text-[12px] font-medium text-slate-400">
                                {card.title}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}