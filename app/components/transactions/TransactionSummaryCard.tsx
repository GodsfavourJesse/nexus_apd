"use client";

import {
    ArrowDownLeft,
    ArrowUpRight,
    ReceiptText,
} from "lucide-react";

interface Props {
    totalTransactions?: number;
    totalCredits?: number;
    totalDebits?: number;
}

function formatMoney(amount: number) {
    return amount.toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2,
    });
}

export default function TransactionSummaryCard({
    totalTransactions = 0,
    totalCredits = 0,
    totalDebits = 0,
}: Props) {
    return (
        <div
            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
            "
        >
            {/* Header */}

            <div className="flex items-start justify-between">

                <div>

                    <p className="text-sm font-medium text-slate-500">
                        Transactions
                    </p>

                    <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
                        Financial Summary
                    </h2>

                </div>

                <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-slate-100
                    "
                >
                    <ReceiptText
                        size={22}
                        className="text-slate-700"
                    />
                </div>

            </div>

            {/* Divider */}

            <div className="my-6 border-t border-slate-100" />

            {/* Total Transactions */}

            <div>

                <p className="text-sm text-slate-500">
                    Total Transactions
                </p>

                <h1 className="mt-2 text-5xl font-bold tracking-tight text-slate-900">
                    {totalTransactions}
                </h1>

            </div>

            {/* Statistics */}

            <div className="mt-8 grid grid-cols-2 gap-4">

                {/* Credits */}

                <div
                    className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-slate-50
                        p-4
                    "
                >
                    <div className="flex items-center gap-3">

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-xl
                                bg-emerald-100
                            "
                        >
                            <ArrowDownLeft
                                size={18}
                                className="text-emerald-600"
                            />
                        </div>

                        <div>

                            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                Credits
                            </p>

                            <p className="mt-1 text-lg font-semibold text-slate-900">
                                {formatMoney(totalCredits)}
                            </p>

                        </div>

                    </div>

                </div>

                {/* Debits */}

                <div
                    className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-slate-50
                        p-4
                    "
                >
                    <div className="flex items-center gap-3">

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-xl
                                bg-red-100
                            "
                        >
                            <ArrowUpRight
                                size={18}
                                className="text-red-600"
                            />
                        </div>

                        <div>

                            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                Debits
                            </p>

                            <p className="mt-1 text-lg font-semibold text-slate-900">
                                {formatMoney(totalDebits)}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}