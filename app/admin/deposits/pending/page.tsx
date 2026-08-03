"use client";

import { usePendingDeposits } from "@/app/hooks/adminHooks/deposits/usePendingDeposits";
import { useRouter } from "next/navigation";

import { LoadingDeposits } from "../../adminComponents/deposits/LoadingDeposits";
import { EmptyDeposits } from "../../adminComponents/deposits/EmptyDeposits";
import { DepositTable } from "../../adminComponents/deposits/DepositTable";

export default function PendingDepositsPage() {
    const router = useRouter();
    const { data: deposits = [], isLoading } = usePendingDeposits();

    return (
        <div className="min-h-screen bg-slate-50 pb-10">
            <header className="sticky top-0 z-10 border-b border-slate-100 bg-white/85 px-4 pb-3 pt-[max(16px,env(safe-area-inset-top))] backdrop-blur-xl">
                <h1 className="text-[22px] font-bold tracking-tight text-slate-900">
                    Pending Deposits
                </h1>
                <p className="mt-0.5 text-[13px] text-slate-500">
                    Review deposits awaiting approval or rejection
                </p>
            </header>

            <div className="px-4 pt-4">
                {isLoading ? (
                    <LoadingDeposits />
                ) : deposits.length === 0 ? (
                    <EmptyDeposits
                        title="No pending deposits"
                        description="All deposit requests have already been reviewed."
                    />
                ) : (
                    <DepositTable
                        deposits={deposits}
                        loading={false}
                        onOpen={(deposit) =>
                            router.push(`/admin/deposits/${deposit.id}`)
                        }
                    />
                )}
            </div>
        </div>
    );
}