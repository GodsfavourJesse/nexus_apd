"use client";

import Link from "next/link";
import {
    ArrowRight,
    ReceiptText,
} from "lucide-react";

export default function WalletRecentTransactions() {

    // Later this will come from React Query.
    const transactions: unknown[] = [];

    return (

        <section className="space-y-4">

            {/* Header */}

            <div className="flex items-center justify-between">

                <div>

                    <h2
                        className="
                            text-lg
                            font-semibold
                            text-slate-900
                        "
                    >
                        Recent Activity
                    </h2>

                    <p
                        className="
                            mt-1
                            text-sm
                            text-slate-500
                        "
                    >
                        Your latest wallet transactions.
                    </p>

                </div>

                <Link
                    href="/dashboard/transactions"
                    className="
                        flex
                        items-center
                        gap-1
                        text-sm
                        font-semibold
                        text-sky-600
                        transition
                        hover:text-sky-700
                    "
                >
                    View All

                    <ArrowRight size={16} />
                </Link>

            </div>

            {/* Empty State */}

            {
                transactions.length === 0 && (

                    <div
                        className="
                            rounded-3xl
                            border
                            border-dashed
                            border-slate-200
                            bg-white
                            px-6
                            py-12
                            text-center
                        "
                    >

                        <div
                            className="
                                mx-auto
                                flex
                                h-16
                                w-16
                                items-center
                                justify-center
                                rounded-full
                                bg-slate-100
                            "
                        >

                            <ReceiptText
                                size={28}
                                className="text-slate-400"
                            />

                        </div>

                        <h3
                            className="
                                mt-5
                                text-lg
                                font-semibold
                                text-slate-900
                            "
                        >
                            No Recent Activity
                        </h3>

                        <p
                            className="
                                mt-2
                                text-sm
                                leading-6
                                text-slate-500
                            "
                        >
                            Your deposits, withdrawals,
                            commissions, rewards and every
                            wallet transaction will appear
                            here once you start using your
                            wallet.
                        </p>

                        <Link
                            href="/dashboard/transactions"
                            className="
                                mt-6
                                inline-flex
                                items-center
                                gap-2
                                rounded-2xl
                                bg-sky-600
                                px-5
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                transition
                                hover:bg-sky-700
                                active:scale-[0.98]
                            "
                        >
                            View Transaction History

                            <ArrowRight size={16} />
                        </Link>

                    </div>

                )
            }

        </section>

    );

}