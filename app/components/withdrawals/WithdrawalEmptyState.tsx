"use client";

import {
    WalletMinimal,
    ArrowDownCircle,
} from "lucide-react";

export function WithdrawalEmptyState() {
    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white">
            <div className="px-5 py-8 text-center sm:px-8 sm:py-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                    <WalletMinimal
                        className="h-8 w-8 text-slate-600"
                        strokeWidth={1.8}
                    />
                </div>

                <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                    No Withdrawal Requests
                </h2>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    You haven't submitted a withdrawal request yet.
                    Your payout requests will appear here once created.
                </p>
            </div>

            <div className="border-t border-slate-100 px-5 py-5 sm:px-8">
                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                        <ArrowDownCircle
                            className="h-5 w-5 text-slate-600"
                            strokeWidth={1.8}
                        />
                    </div>

                    <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-slate-900">
                            Ready to withdraw?
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                            Make sure you have enough available balance,
                            then submit your withdrawal request.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}