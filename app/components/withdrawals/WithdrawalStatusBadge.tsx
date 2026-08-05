"use client";

import {
    Clock3,
    CheckCircle2,
    XCircle,
    BadgeCheck,
} from "lucide-react";

import { cn } from "@/app/lib/utils";

import {
    WithdrawalStatus,
} from "@/app/types/clientTypes/withdrawal.types";

interface Props {
    status: WithdrawalStatus;
}

const STATUS_CONFIG: Record<
    WithdrawalStatus,
    {
        label: string;
        icon: React.ElementType;
        className: string;
    }
> = {
    pending: {
        label: "Pending",
        icon: Clock3,
        className:
            "border-amber-200 bg-amber-50 text-amber-700",
    },

    approved: {
        label: "Approved",
        icon: BadgeCheck,
        className:
            "border-blue-200 bg-blue-50 text-blue-700",
    },

    paid: {
        label: "Paid",
        icon: CheckCircle2,
        className:
            "border-emerald-200 bg-emerald-50 text-emerald-700",
    },

    rejected: {
        label: "Rejected",
        icon: XCircle,
        className:
            "border-red-200 bg-red-50 text-red-700",
    },
};

export function WithdrawalStatusBadge({
    status,
}: Props) {

    const config =
        STATUS_CONFIG[status];

    const Icon =
        config.icon;

    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold shadow-sm",
                config.className,
            )}
        >
            <Icon className="h-3.5 w-3.5" />

            {config.label}
        </span>
    );
}