"use client";

import {
    ArrowUpRight,
    Building2,
    CalendarDays,
    Clock3,
} from "lucide-react";
import { format } from "date-fns";

import { Deposit } from "@/app/types/clientTypes/deposit.types";

interface DepositHistoryTableProps {
    deposits: Deposit[];
    loading?: boolean;
}

function statusStyles(status: string) {
    switch (status) {
        case "approved":
            return {
                badge:
                    "bg-emerald-50 text-emerald-700 border border-emerald-200",
                dot: "bg-emerald-500",
            };

        case "pending":
            return {
                badge:
                    "bg-amber-50 text-amber-700 border border-amber-200",
                dot: "bg-amber-500",
            };

        case "declined":
            return {
                badge:
                    "bg-red-50 text-red-700 border border-red-200",
                dot: "bg-red-500",
            };

        default:
            return {
                badge:
                    "bg-slate-100 text-slate-700 border border-slate-200",
                dot: "bg-slate-500",
            };
    }
}

export default function DepositHistoryTable({
    deposits,
    loading,
}: DepositHistoryTableProps) {
    if (loading) {
        return (
            <div className="space-y-3">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="animate-pulse rounded-2xl border border-slate-200 bg-white p-4"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="h-3 w-24 rounded bg-slate-200" />
                                <div className="mt-3 h-6 w-32 rounded bg-slate-200" />
                            </div>

                            <div className="h-7 w-20 rounded-full bg-slate-200" />
                        </div>

                        <div className="mt-4 h-px bg-slate-100" />

                        <div className="mt-4 flex justify-between">
                            <div className="h-3 w-24 rounded bg-slate-200" />
                            <div className="h-3 w-20 rounded bg-slate-200" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (!deposits.length) {
        return (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-8 py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                    <ArrowUpRight
                        size={28}
                        className="text-slate-400"
                    />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    No Deposit History
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                    Your deposits will appear here once you make one.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {deposits.map((deposit) => {
                const status = statusStyles(deposit.status);

                return (
                    <div
                        key={deposit.id}
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-4
                            shadow-sm
                            transition-all
                            duration-200
                            hover:border-blue-200
                            hover:shadow-md
                            active:scale-[0.99]
                        "
                    >
                        {/* Top */}

                        <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0 flex-1">
                                <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                                    Deposit
                                </p>

                                <p className="mt-1 truncate text-[15px] font-semibold text-slate-900">
                                    {deposit.reference}
                                </p>
                            </div>

                            <div
                                className={`
                                    inline-flex
                                    shrink-0
                                    items-center
                                    gap-1.5
                                    rounded-full
                                    px-2.5
                                    py-1
                                    text-[11px]
                                    font-semibold
                                    capitalize
                                    ${status.badge}
                                `}
                            >
                                <span
                                    className={`h-2 w-2 rounded-full ${status.dot}`}
                                />

                                {deposit.status.replace("_", " ")}
                            </div>
                        </div>

                        {/* Amount */}

                        <div className="mt-4">
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                                ₦
                                {Number(
                                    deposit.amount,
                                ).toLocaleString("en-NG")}
                            </h2>
                        </div>

                        {/* Bottom */}

                        <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-slate-50 p-3">

                            <div>
                                <div className="mb-1 flex items-center gap-1.5 text-[11px] text-slate-500">
                                    <Building2 size={13} />
                                    Bank
                                </div>

                                <p className="truncate text-sm font-medium text-slate-800">
                                    {deposit.senderBankName}
                                </p>
                            </div>

                            <div>
                                <div className="mb-1 flex items-center gap-1.5 text-[11px] text-slate-500">
                                    <CalendarDays size={13} />
                                    Date
                                </div>

                                <p className="text-sm font-medium text-slate-800">
                                    {format(
                                        new Date(deposit.createdAt),
                                        "dd MMM yyyy",
                                    )}
                                </p>
                            </div>

                            <div className="col-span-2 border-t border-slate-200 pt-3">
                                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                                    <Clock3 size={13} />
                                    Time
                                </div>

                                <p className="mt-1 text-sm font-medium text-slate-800">
                                    {format(
                                        new Date(deposit.createdAt),
                                        "hh:mm a",
                                    )}
                                </p>
                            </div>

                        </div>
                    </div>
                );
            })}
        </div>
    );
}