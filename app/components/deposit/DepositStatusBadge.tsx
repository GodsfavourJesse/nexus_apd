"use client";

import { DepositStatus } from "@/app/types/clientTypes/deposit.types";

interface DepositStatusBadgeProps {
    status: DepositStatus;
}

const statusMap: Record<
    DepositStatus,
    {
        label: string;
        color: string;
        dot: string;
    }
> = {
    pending: {
        label: "Pending",
        dot: "🟡",
        color:
            "border-yellow-200 bg-yellow-50 text-yellow-700",
    },

    // under_review: {
    //     label: "Under Review",
    //     dot: "🟠",
    //     color:
    //         "border-orange-200 bg-orange-50 text-orange-700",
    // },

    approved: {
        label: "Approved",
        dot: "🟢",
        color:
            "border-emerald-200 bg-emerald-50 text-emerald-700",
    },

    declined: {
        label: "Rejected",
        dot: "🔴",
        color:
            "border-red-200 bg-red-50 text-red-700",
    },

    // cancelled: {
    //     label: "Cancelled",
    //     dot: "⚪",
    //     color:
    //         "border-slate-200 bg-slate-100 text-slate-600",
    // },
};

export default function DepositStatusBadge({
    status,
}: DepositStatusBadgeProps) {
    const badge = statusMap[status];

    return (
        <span
            className={`
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                px-3
                py-1
                text-xs
                font-semibold
                ${badge.color}
            `}
        >
            <span>{badge.dot}</span>
            <span>{badge.label}</span>
        </span>
    );
}