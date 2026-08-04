"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { useAdminDeposit } from "@/app/hooks/adminHooks/deposits/useAdminDeposit";

import { LoadingDeposits } from "../../adminComponents/deposits/LoadingDeposits";
import { DepositReceiptPreview } from "../../adminComponents/deposits/DepositReceiptPreview";
import { DepositDetailsCard } from "../../adminComponents/deposits/detailsComponents/DepositDetailsCard";
import { DepositUserCard } from "../../adminComponents/deposits/detailsComponents/DepositUserCard";

import ApproveDepositDialog from "../../adminComponents/deposits/detailsComponents/ApproveDepositDialog";
import RejectDepositDialog from "../../adminComponents/deposits/detailsComponents/RejectDepositDialog";

export default function DepositDetailsPage() {
    const router = useRouter();

    const { depositId } = useParams<{
        depositId: string;
    }>();

    const {
        data: deposit,
        isLoading,
    } = useAdminDeposit(depositId);

    const [approveOpen, setApproveOpen] =
        useState(false);

    const [rejectOpen, setRejectOpen] =
        useState(false);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-50 px-4 pt-[max(16px,env(safe-area-inset-top))]">
                <LoadingDeposits />
            </div>
        );
    }

    if (!deposit) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50">
                <div className="rounded-xl bg-white p-8 shadow">
                    <p className="text-slate-600">
                        Deposit not found.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="flex min-h-screen flex-col bg-slate-50">

                {/* Header */}

                <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
                    <div className="relative flex h-14 items-center justify-center px-4">

                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="
                                absolute
                                left-3
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                text-blue-600
                                transition
                                hover:bg-slate-100
                            "
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <h1 className="text-lg font-semibold text-slate-900">
                            Deposit Details
                        </h1>

                    </div>
                </header>

                {/* Content */}

                <main className="flex-1 space-y-4 px-4 py-4 pb-28">

                    <DepositDetailsCard
                        deposit={deposit}
                    />

                    <DepositUserCard
                        user={deposit.user}
                    />

                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

                        <p className="mb-3 text-sm font-medium text-slate-500">
                            Payment Receipt
                        </p>

                        <DepositReceiptPreview
                            receipt={deposit.paymentReceipt}
                        />

                    </div>

                </main>

                {/* Bottom Action Bar */}

                <footer className="sticky bottom-0 border-t border-slate-200 bg-white p-4 shadow-lg">

                    <div className="grid grid-cols-2 gap-3">

                        <button
                            type="button"
                            onClick={() => setRejectOpen(true)}
                            className="
                                rounded-xl
                                bg-red-600
                                px-4
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                transition
                                hover:bg-red-700
                                active:scale-[0.98]
                            "
                        >
                            Reject Deposit
                        </button>

                        <button
                            type="button"
                            onClick={() => setApproveOpen(true)}
                            className="
                                rounded-xl
                                bg-emerald-600
                                px-4
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                transition
                                hover:bg-emerald-700
                                active:scale-[0.98]
                            "
                        >
                            Approve Deposit
                        </button>

                    </div>

                </footer>

            </div>

            <ApproveDepositDialog
                open={approveOpen}
                depositId={deposit.id}
                onClose={() => setApproveOpen(false)}
            />

            <RejectDepositDialog
                open={rejectOpen}
                depositId={deposit.id}
                onClose={() => setRejectOpen(false)}
            />
        </>
    );
}