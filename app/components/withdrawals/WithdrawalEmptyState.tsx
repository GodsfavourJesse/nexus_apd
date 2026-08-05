"use client";

import {
    WalletMinimal,
    ArrowDownCircle,
} from "lucide-react";

export function WithdrawalEmptyState() {
    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white">

            <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 px-6 py-10 text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur">

                    <WalletMinimal className="h-10 w-10 text-white" />

                </div>

                <h2 className="mt-6 text-2xl font-bold text-white">
                    No Withdrawal Requests
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-blue-100">
                    You haven't submitted any withdrawal request yet.
                    Once you request a payout, it will appear here
                    together with its approval status.
                </p>

            </div>

            <div className="space-y-6 px-6 py-10">

                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">

                    <div className="flex items-start gap-4">

                        <div className="rounded-xl bg-indigo-100 p-3">

                            <ArrowDownCircle className="h-6 w-6 text-indigo-600" />

                        </div>

                        <div>

                            <h3 className="font-semibold text-slate-900">
                                Ready to withdraw?
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Complete eligible activities, ensure you have
                                sufficient wallet balance, then submit your
                                withdrawal request using the form on this page.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}