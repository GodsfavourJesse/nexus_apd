"use client";

import { useParams } from "next/navigation";

import { useWithdrawal } from "@/app/hooks/adminHooks/withdrawals/useWithdrawal";
import WithdrawalSkeleton from "../../adminComponents/withdrawals/WithdrawalSkeleton";
import WithdrawalProfileCard from "../../adminComponents/withdrawals/WithdrawalProfileCard";
import WithdrawalBankCard from "../../adminComponents/withdrawals/WithdrawalBankCard";
import WithdrawalAmountCard from "../../adminComponents/withdrawals/WithdrawalAmountCard";

export default function AdminWithdrawalDetailsPage() {
    const params = useParams();

    const id =
        typeof params.id === "string"
            ? params.id
            : "";

    const {
        data,
        isLoading,
        isError,
    } = useWithdrawal(id);

    const withdrawal =
        data?.data;

    if (isLoading) {
        return <WithdrawalSkeleton />;
    }

    if (isError || !withdrawal) {
        return (
            <main className="p-6">
                Withdrawal request not found.
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 p-4 pb-24">
            <div className="mx-auto flex max-w-md flex-col gap-4">

                <div>
                    <h1 className="text-2xl font-bold">
                        Withdrawal Details
                    </h1>

                    <p className="text-sm text-slate-500">
                        Review withdrawal request
                        information.
                    </p>
                </div>

                <WithdrawalProfileCard
                    withdrawal={withdrawal}
                />

                <WithdrawalBankCard
                    withdrawal={withdrawal}
                />

                <WithdrawalAmountCard
                    withdrawal={withdrawal}
                />

            </div>
        </main>
    );
}