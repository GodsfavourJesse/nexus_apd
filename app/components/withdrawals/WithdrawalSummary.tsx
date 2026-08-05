"use client";

import {
    CheckCircle2,
    Clock3,
    CreditCard,
    XCircle,
} from "lucide-react";

import {
    Withdrawal,
} from "@/app/types/clientTypes/withdrawal.types";

interface WithdrawalSummaryProps {
    withdrawals: Withdrawal[];
}

export function WithdrawalSummary({
    withdrawals,
}: WithdrawalSummaryProps) {

    const totalAmount =
        withdrawals.reduce(
            (sum, withdrawal) =>
                sum + Number(withdrawal.amount),
            0,
        );

    const pending =
        withdrawals.filter(
            (withdrawal) =>
                withdrawal.status === "pending",
        ).length;

    const approved =
        withdrawals.filter(
            (withdrawal) =>
                withdrawal.status === "approved",
        ).length;

    const paid =
        withdrawals.filter(
            (withdrawal) =>
                withdrawal.status === "paid",
        ).length;

    const rejected =
        withdrawals.filter(
            (withdrawal) =>
                withdrawal.status === "rejected",
        ).length;

    const cards = [
        {
            title: "Total Requested",
            value: `₦${totalAmount.toLocaleString(
                "en-NG",
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                },
            )}`,
            subtitle: `${withdrawals.length} withdrawal${
                withdrawals.length === 1 ? "" : "s"
            }`,
            icon: CreditCard,
            bg: "bg-blue-50",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
        },

        {
            title: "Pending",
            value: pending,
            subtitle: "Awaiting review",
            icon: Clock3,
            bg: "bg-amber-50",
            iconBg: "bg-amber-100",
            iconColor: "text-amber-600",
        },

        {
            title: "Paid",
            value: paid,
            subtitle: "Completed",
            icon: CheckCircle2,
            bg: "bg-emerald-50",
            iconBg: "bg-emerald-100",
            iconColor: "text-emerald-600",
        },

        {
            title: "Rejected",
            value: rejected,
            subtitle: approved > 0
                ? `${approved} approved`
                : "No approvals yet",
            icon: XCircle,
            bg: "bg-red-50",
            iconBg: "bg-red-100",
            iconColor: "text-red-600",
        },
    ];

    return (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {cards.map((card) => {
                const Icon = card.icon;

                return (
                    <article
                        key={card.title}
                        className={`group overflow-hidden rounded-2xl border border-slate-200 ${card.bg} p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                    >
                        <div className="flex items-start justify-between">

                            <div>

                                <p className="text-sm font-medium text-slate-500">
                                    {card.title}
                                </p>

                                <h2 className="mt-3 text-2xl font-bold text-slate-900 break-words">
                                    {card.value}
                                </h2>

                                <p className="mt-2 text-sm text-slate-500">
                                    {card.subtitle}
                                </p>

                            </div>

                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.iconBg}`}
                            >
                                <Icon
                                    className={`h-6 w-6 ${card.iconColor}`}
                                />
                            </div>

                        </div>
                    </article>
                );
            })}

        </section>
    );
}