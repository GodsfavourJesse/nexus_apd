"use client";

import { format } from "date-fns";
import {
    Building2,
    CalendarDays,
    CreditCard,
    ArrowRight,
} from "lucide-react";

import {
    Withdrawal,
} from "@/app/types/clientTypes/withdrawal.types";

import { WithdrawalStatusBadge } from "./WithdrawalStatusBadge";

interface Props {
    withdrawal: Withdrawal;
}

export function WithdrawalCard({
    withdrawal,
}: Props) {

    const amount = Number(
        withdrawal.amount,
    );

    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-xl">

            {/* Top Accent */}
            <div className="h-1 w-full bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400" />

            <div className="space-y-6 p-5">

                {/* Header */}

                <div className="flex items-start justify-between gap-4">

                    <div className="min-w-0">

                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Withdrawal Amount
                        </p>

                        <h2 className="mt-1 truncate text-3xl font-bold text-slate-900">

                            ₦
                            {amount.toLocaleString(
                                "en-NG",
                                {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                },
                            )}

                        </h2>

                    </div>

                    <WithdrawalStatusBadge
                        status={withdrawal.status}
                    />

                </div>

                {/* Account */}

                <div className="grid gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:grid-cols-2">

                    <div className="flex items-start gap-3">

                        <div className="rounded-lg bg-white p-2 shadow-sm">

                            <Building2 className="h-5 w-5 text-indigo-600" />

                        </div>

                        <div className="min-w-0">

                            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                Bank
                            </p>

                            <p className="truncate font-semibold text-slate-800">
                                {withdrawal.bankName}
                            </p>

                        </div>

                    </div>

                    <div className="flex items-start gap-3">

                        <div className="rounded-lg bg-white p-2 shadow-sm">

                            <CreditCard className="h-5 w-5 text-emerald-600" />

                        </div>

                        <div className="min-w-0">

                            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                Account Number
                            </p>

                            <p className="font-semibold tracking-wide text-slate-800">
                                {withdrawal.accountNumber}
                            </p>

                        </div>

                    </div>

                </div>

                {/* Account Name */}

                <div className="rounded-xl border border-slate-100 p-4">

                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Account Name
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                        {withdrawal.accountName}
                    </p>

                </div>

                {/* Footer */}

                <div className="flex items-center justify-between border-t border-slate-100 pt-4">

                    <div className="flex items-center gap-2 text-sm text-slate-500">

                        <CalendarDays className="h-4 w-4" />

                        {format(
                            new Date(
                                withdrawal.createdAt,
                            ),
                            "PPP • p",
                        )}

                    </div>

                    <div className="flex items-center gap-1 text-sm font-medium text-indigo-600 transition group-hover:translate-x-1">

                        Details

                        <ArrowRight className="h-4 w-4" />

                    </div>

                </div>

            </div>

        </article>
    );
}