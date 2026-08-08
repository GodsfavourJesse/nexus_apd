"use client";

import {
    CalendarDays,
    CreditCard,
    Hash,
} from "lucide-react";
import { format } from "date-fns";

import { UpgradeRequest } from "@/app/types/clientTypes/upgrade.types";
import UpgradeStatusBadge from "./UpgradeStatusBadge";

interface UpgradeRequestCardProps {
    request: UpgradeRequest;
    onClick: () => void;
}

export default function UpgradeRequestCard({
    request,
    onClick,
}: UpgradeRequestCardProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="
                w-full
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-5
                text-left
                shadow-sm
                transition
                hover:border-blue-200
                hover:shadow-md
                active:scale-[0.99]
            "
        >
            {/* Top */}
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Membership Upgrade
                    </p>

                    <h2 className="mt-1 truncate text-base font-bold text-slate-900">
                        {request.membershipPlan?.name ??
                            "Membership Upgrade"}
                    </h2>
                </div>

                <UpgradeStatusBadge status={request.status} />
            </div>

            {/* Amount */}
            <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-medium text-slate-500">
                    Upgrade Amount
                </p>

                <p className="mt-1 text-xl font-bold tracking-tight text-slate-900">
                    ₦
                    {Number(request.amount).toLocaleString(
                        "en-NG",
                        {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        },
                    )}
                </p>
            </div>

            {/* Metadata */}
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100">
                        <Hash size={14} className="text-slate-500" />
                    </div>

                    <div className="min-w-0">
                        <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                            Reference
                        </p>

                        <p className="truncate text-xs font-semibold text-slate-700">
                            {request.reference}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100">
                        <CreditCard size={14} className="text-slate-500" />
                    </div>

                    <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                            Payment
                        </p>

                        <p className="text-xs font-semibold capitalize text-slate-700">
                            {request.paymentMethod.replace("_", " ")}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:col-span-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100">
                        <CalendarDays
                            size={14}
                            className="text-slate-500"
                        />
                    </div>

                    <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                            Submitted
                        </p>

                        <p className="text-xs font-semibold text-slate-700">
                            {format(
                                new Date(request.createdAt),
                                "MMM d, yyyy • h:mm a",
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </button>
    );
}