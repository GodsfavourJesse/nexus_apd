"use client";

import {
    CheckCircle2,
    Clock3,
    Eye,
    XCircle,
    Ban,
} from "lucide-react";

import {
    UpgradeStatus,
} from "@/app/types/clientTypes/upgrade.types";

interface UpgradeStatusBadgeProps {
    status: UpgradeStatus;
}

export default function UpgradeStatusBadge({
    status,
}: UpgradeStatusBadgeProps) {
    const config = {
        [UpgradeStatus.PENDING]: {
            label: "Pending",
            icon: Clock3,
            className:
                "bg-amber-50 text-amber-700 border-amber-200",
        },

        [UpgradeStatus.UNDER_REVIEW]: {
            label: "Under Review",
            icon: Eye,
            className:
                "bg-blue-50 text-blue-700 border-blue-200",
        },

        [UpgradeStatus.APPROVED]: {
            label: "Approved",
            icon: CheckCircle2,
            className:
                "bg-emerald-50 text-emerald-700 border-emerald-200",
        },

        [UpgradeStatus.REJECTED]: {
            label: "Rejected",
            icon: XCircle,
            className:
                "bg-red-50 text-red-700 border-red-200",
        },

        [UpgradeStatus.CANCELLED]: {
            label: "Cancelled",
            icon: Ban,
            className:
                "bg-slate-100 text-slate-600 border-slate-200",
        },
    }[status];

    if (!config) {
        return null;
    }

    const Icon = config.icon;

    return (
        <span
            className={`
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                px-3
                py-1.5
                text-xs
                font-semibold
                ${config.className}
            `}
        >
            <Icon size={14} />
            {config.label}
        </span>
    );
}