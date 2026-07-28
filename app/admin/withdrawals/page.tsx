"use client";

import { useWithdrawals } from "@/app/hooks/adminHooks/withdrawals/useWithdrawals";
import WithdrawalSkeleton from "../adminComponents/withdrawals/WithdrawalSkeleton";
import WithdrawalCard from "../adminComponents/withdrawals/WithdrawalCard";


export default function AdminWithdrawalsPage() {
    const {
        data,
        isLoading,
        isError,
    } = useWithdrawals();

    const withdrawals = data?.data ?? [];

    if (isLoading) {
        return <WithdrawalSkeleton />;
    }

    if (isError) {
        return (
            <main className="p-6">
                Unable to load withdrawal requests.
            </main>
        );
    }

    if (withdrawals.length === 0) {
        return (
            <main className="p-6">
                No withdrawal requests found.
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 p-4 pb-24">
            <div className="mx-auto flex max-w-md flex-col gap-4">
                <div>
                    <h1 className="text-2xl font-bold">
                        Withdrawal Requests
                    </h1>

                    <p className="text-sm text-slate-500">
                        Review and manage user withdrawal
                        requests.
                    </p>
                </div>

                {withdrawals.map(
                    (withdrawal) => (
                        <WithdrawalCard
                            key={
                                withdrawal.id
                            }
                            withdrawal={
                                withdrawal
                            }
                        />
                    ),
                )}
            </div>
        </main>
    );
}