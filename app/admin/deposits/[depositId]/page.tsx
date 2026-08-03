"use client";

import { useParams, useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { useAdminDeposit } from "@/app/hooks/adminHooks/deposits/useAdminDeposit";

import { LoadingDeposits } from "../../adminComponents/deposits/LoadingDeposits";
import { DepositReceiptPreview } from "../../adminComponents/deposits/DepositReceiptPreview";
import { DepositDetailsCard } from "../../adminComponents/deposits/detailsComponents/DepositDetailsCard";
import { DepositUserCard } from "../../adminComponents/deposits/detailsComponents/DepositUserCard";
import { useState } from "react";
import { DepositStatus } from "@/app/types/adminTypes/adminDeposit.types";
import ApproveDepositDialog from "../../adminComponents/deposits/detailsComponents/ApproveDepositDialog";
import RejectDepositDialog from "../../adminComponents/deposits/detailsComponents/RejectDepositDialog";
import DepositActions from "../../adminComponents/deposits/DepositActions";

export default function DepositDetailsPage() {
    const router = useRouter();

    const [approveOpen, setApproveOpen] = useState(false);
    const [rejectOpen, setRejectOpen] = useState(false);
    
    const { depositId } = useParams<{
        depositId: string;
    }>();

    const {
        data: deposit,
        isLoading,
    } = useAdminDeposit(depositId);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-50 px-4 pt-[max(16px,env(safe-area-inset-top))]">
                <LoadingDeposits />
            </div>
        );
    }

    console.log("Loading:", isLoading);
    console.log("Deposit:", deposit);
    console.log("Receipt:", deposit?.paymentReceipt);

    if (!deposit) {
        return (
            <div className="p-10">
                Deposit is undefined
            </div>
        );
    }

    const canReview =
        deposit &&
        (
            deposit.status === DepositStatus.PENDING ||
            deposit.status === DepositStatus.UNDER_REVIEW
        );

    return (
        <div className="flex min-h-screen flex-col bg-slate-50">
            <header className="sticky top-0 z-10 border-b border-slate-100 bg-white/85 backdrop-blur-xl">
                <div className="relative flex h-11 items-center justify-center px-2 pt-[env(safe-area-inset-top)]">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="absolute left-1 flex h-11 min-w-11 items-center px-1.5 text-blue-600 active:opacity-40"
                    >
                        <ChevronLeft size={26} />
                    </button>

                    <h1 className="text-[17px] font-semibold">
                        Deposit Details
                    </h1>
                </div>
            </header>

            <div className="flex-1 space-y-4 px-4 pb-6 pt-4">
                <DepositDetailsCard deposit={deposit} />

                <DepositUserCard user={deposit.user} />

                <div className="rounded-2xl border bg-white p-4">
                    <p className="mb-3 text-sm text-slate-500">
                        Payment Receipt
                    </p>

                    <DepositReceiptPreview
                        receipt={deposit.paymentReceipt}
                    />
                </div>
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

            <div className="sticky bottom-0 border-t border-slate-200 bg-white p-4">
                <div className="flex justify-end">
                    <DepositActions
                        deposit={deposit}
                        hideView={true}
                    />
                </div>
            </div>
        </div>
    );
}