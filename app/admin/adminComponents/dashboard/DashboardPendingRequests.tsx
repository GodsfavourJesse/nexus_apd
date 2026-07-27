"use client";

import Link from "next/link";
import {
    ArrowUpCircle,
    CreditCard,
    ChevronRight,
    Clock3,
} from "lucide-react";
import { PendingUpgradeRequest } from "@/app/types/dashboard.types";

interface WithdrawalRequest {
    id: string;
    user: string;
    amount: string;
    bank: string;
    createdAt: string;
}

interface DashboardPendingRequestsProps {
    upgrades?: PendingUpgradeRequest[];
    withdrawals?: WithdrawalRequest[];
    loading?: boolean;
}

export default function DashboardPendingRequests({
    upgrades = [],
    withdrawals = [],
    loading = false,
}: DashboardPendingRequestsProps) {
    return (
        <section className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold text-slate-900">
                        Pending Requests
                    </h2>

                    <p className="text-sm text-slate-500">
                        Awaiting administrator action
                    </p>
                </div>

                <Clock3
                    size={20}
                    className="text-amber-500"
                />
            </div>

            {/* Pending Upgrades */}

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                            <ArrowUpCircle size={22} />
                        </div>

                        <div>
                            <h3 className="font-semibold text-slate-900">
                                Upgrade Requests
                            </h3>

                            <p className="text-xs text-slate-500">
                                {upgrades.length} pending
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/admin/upgrades"
                        className="text-sm font-medium text-blue-600"
                    >
                        View
                    </Link>
                </div>

                {loading ? (
                    <div className="space-y-4 p-5">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="animate-pulse"
                            >
                                <div className="h-4 w-40 rounded bg-slate-200" />
                                <div className="mt-2 h-3 w-24 rounded bg-slate-100" />
                            </div>
                        ))}
                    </div>
                ) : upgrades.length === 0 ? (
                    <div className="py-10 text-center text-sm text-slate-500">
                        No pending upgrade requests.
                    </div>
                ) : (
                    <div>
                        {upgrades.map(
                            (request) => (
                                <Link
                                    key={
                                        request.id
                                    }
                                    href={`/admin/upgrades/${request.id}`}
                                    className="flex items-center justify-between border-b border-slate-100 px-5 py-4 transition hover:bg-slate-50 last:border-0"
                                >
                                    <div>
                                        <p className="font-medium text-slate-900">
                                            {
                                                request.user.phone
                                            }
                                        </p>

                                        <p className="mt-1 text-xs text-slate-500">
                                            {
                                                request.membership.name
                                            }
                                        </p>

                                        <p className="mt-1 text-xs font-medium text-blue-600">
                                            ₦
                                            {Number(
                                                request.amount,
                                            ).toLocaleString()}
                                        </p>
                                    </div>

                                    <ChevronRight
                                        size={
                                            18
                                        }
                                        className="text-slate-400"
                                    />
                                </Link>
                            ),
                        )}
                    </div>
                )}
            </div>

            {/* Pending Withdrawals */}

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                            <CreditCard size={22} />
                        </div>

                        <div>
                            <h3 className="font-semibold text-slate-900">
                                Withdrawal Requests
                            </h3>

                            <p className="text-xs text-slate-500">
                                {withdrawals.length} pending
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/admin/withdrawals"
                        className="text-sm font-medium text-emerald-600"
                    >
                        View
                    </Link>
                </div>

                {loading ? (
                    <div className="space-y-4 p-5">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="animate-pulse"
                            >
                                <div className="h-4 w-40 rounded bg-slate-200" />
                                <div className="mt-2 h-3 w-24 rounded bg-slate-100" />
                            </div>
                        ))}
                    </div>
                ) : withdrawals.length === 0 ? (
                    <div className="py-10 text-center text-sm text-slate-500">
                        No pending withdrawals.
                    </div>
                ) : (
                    <div>
                        {withdrawals.map(
                            (request) => (
                                <Link
                                    key={
                                        request.id
                                    }
                                    href={`/admin/withdrawals/${request.id}`}
                                    className="flex items-center justify-between border-b border-slate-100 px-5 py-4 transition hover:bg-slate-50 last:border-0"
                                >
                                    <div>
                                        <p className="font-medium text-slate-900">
                                            {
                                                request.user
                                            }
                                        </p>

                                        <p className="mt-1 text-xs text-slate-500">
                                            {
                                                request.bank
                                            }
                                        </p>

                                        <p className="mt-1 text-xs font-medium text-emerald-600">
                                            ₦
                                            {Number(
                                                request.amount,
                                            ).toLocaleString()}
                                        </p>
                                    </div>

                                    <ChevronRight
                                        size={
                                            18
                                        }
                                        className="text-slate-400"
                                    />
                                </Link>
                            ),
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}