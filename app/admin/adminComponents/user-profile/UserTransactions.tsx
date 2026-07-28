"use client";

import {
    ArrowDownCircle,
    ArrowUpCircle,
    Clock3,
} from "lucide-react";

import { Transaction } from "@/app/types/adminTypes/user.types";

interface UserTransactionListProps {
    transactions: Transaction[];
}

function formatCurrency(amount: string) {
    return `₦${Number(amount).toLocaleString()}`;
}

function getStatusColor(status: string) {
    switch (status.toLowerCase()) {
        case "completed":
            return "bg-green-100 text-green-700";

        case "pending":
            return "bg-amber-100 text-amber-700";

        case "failed":
            return "bg-red-100 text-red-700";

        default:
            return "bg-slate-100 text-slate-700";
    }
}

export default function UserTransactionList({
    transactions,
}: UserTransactionListProps) {

    if (!transactions.length) {
        return (
            <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="mb-3 text-lg font-semibold">
                    Transactions
                </h2>

                <p className="text-sm text-slate-500">
                    No transactions yet.
                </p>
            </section>
        );
    }

    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                    <Clock3 size={20} />
                </div>

                <h2 className="text-lg font-bold text-slate-900">
                    Transactions
                </h2>
            </div>

            {transactions.length === 0 ? (
                <div className="py-10 text-center text-sm text-slate-500">
                    No transactions found.
                </div>
            ) : (
                <div className="divide-y divide-slate-100">
                    {transactions.map(
                        (transaction) => (
                            <div
                                key={transaction.id}
                                className="flex items-start gap-4 px-5 py-4"
                            >
                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-slate-100
                                    "
                                >
                                    {transaction.type
                                        .toLowerCase()
                                        .includes(
                                            "withdraw",
                                        ) ? (
                                        <ArrowUpCircle
                                            size={20}
                                            className="text-red-500"
                                        />
                                    ) : (
                                        <ArrowDownCircle
                                            size={20}
                                            className="text-emerald-600"
                                        />
                                    )}
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between gap-3">
                                        <h3 className="font-semibold text-slate-900 capitalize">
                                            {
                                                transaction.type
                                            }
                                        </h3>

                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(
                                                transaction.status,
                                            )}`}
                                        >
                                            {
                                                transaction.status
                                            }
                                        </span>
                                    </div>

                                    <p className="mt-2 text-lg font-bold text-slate-900">
                                        {formatCurrency(
                                            transaction.amount,
                                        )}
                                    </p>

                                    <p className="mt-2 text-xs text-slate-400">
                                        {new Date(
                                            transaction.createdAt,
                                        ).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        ),
                    )}
                </div>
            )}
        </section>
    );
}