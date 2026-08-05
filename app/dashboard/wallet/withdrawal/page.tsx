"use client";

import {
    ArrowDownToLine,
    ArrowLeft,
    ShieldCheck,
} from "lucide-react";

import {
    WithdrawalForm,
    WithdrawalHistory,
    WithdrawalSkeleton,
    WithdrawalSummary,
} from "@/app/components/withdrawals";
import { useGetWithdrawals } from "@/app/hooks/clientHooks/withdrawalHooks/useGetWithdrawals";
import { useRouter } from "next/navigation";


export default function WithdrawalsPage() {

    const router = useRouter();

    const {
        data,
        isLoading,
    } = useGetWithdrawals();

    const withdrawals =
        data ?? [];

    if (isLoading) {
        return <WithdrawalSkeleton />;
    }

    return (
        <main className="min-h-screen bg-slate-50">

            <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
                            <div className="mx-auto flex h-16 max-w-7xl items-center px-4">
                                <button
                                    type="button"
                                    onClick={() => router.back()}
                                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 active:scale-95"
                                >
                                    <ArrowLeft className="h-5 w-5" />
            
                                    <span>Back</span>
                                </button>
                            </div>
                        </div>

            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">

                {/* Hero */}

                <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">

                    <div className="border-l-4 border-[#1391FF] p-8">

                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            Withdraw Funds
                        </h1>

                        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                            Request withdrawals from your available wallet balance. Approved
                            requests are securely processed and transferred to your registered
                            bank account.
                        </p>

                    </div>

                </section>

                {/* Statistics */}

                <WithdrawalSummary
                    withdrawals={withdrawals}
                />

                {/* Content */}

                <section className="grid gap-8 xl:grid-cols-[400px_minmax(0,1fr)]">

                    {/* Form */}

                    <aside className="xl:sticky xl:top-6 xl:self-start">

                        <WithdrawalForm />

                    </aside>

                    {/* History */}

                    <section className="min-w-0">

                        <WithdrawalHistory
                            withdrawals={withdrawals}
                        />

                    </section>

                </section>

            </div>

        </main>
    );
}