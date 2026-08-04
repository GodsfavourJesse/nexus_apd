"use client";

import WalletHeader from "@/app/components/wallet/WalletHeader";
import WalletBalanceCard from "@/app/components/wallet/WalletBalanceCard";
import WalletStatsGrid from "@/app/components/wallet/WalletStatsGrid";
import WalletQuickActions from "@/app/components/wallet/WalletQuickActions";
import WalletRecentTransactions from "@/app/components/wallet/WalletRecentTransactions";
import WalletInfoCard from "@/app/components/wallet/WalletInfoCard";

import { useWallet } from "@/app/hooks/clientHooks/walletHooks/useWallet";

export default function WalletPage() {

    const {
        data: wallet,
        isLoading,
    } = useWallet();

    if (isLoading) {
        return (
            <main className="min-h-screen bg-slate-50">
                <div className="mx-auto flex w-full max-w-md flex-col">
                    <WalletHeader />

                    <div className="space-y-5 px-4 py-5">
                        <div className="h-48 animate-pulse rounded-3xl bg-slate-200" />
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-28 animate-pulse rounded-2xl bg-slate-200" />
                            <div className="h-28 animate-pulse rounded-2xl bg-slate-200" />
                            <div className="h-28 animate-pulse rounded-2xl bg-slate-200" />
                            <div className="h-28 animate-pulse rounded-2xl bg-slate-200" />
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50">

            <div className="mx-auto flex w-full max-w-md flex-col">

                <WalletHeader />

                <div className="space-y-5 px-4 pb-24 pt-5">

                    <WalletBalanceCard
                        availableBalance={
                            wallet?.availableBalance ?? "0.00"
                        }
                        heldBalance={
                            wallet?.heldBalance ?? "0.00"
                        }
                    />

                    <WalletStatsGrid
                        availableBalance={
                            wallet?.availableBalance ?? "0.00"
                        }
                        totalEarned={
                            wallet?.totalEarned ?? "0.00"
                        }
                        totalDeposited={
                            wallet?.totalDeposited ?? "0.00"
                        }
                        totalWithdrawn={
                            wallet?.totalWithdrawn ?? "0.00"
                        }
                    />

                    <WalletQuickActions />

                    <WalletRecentTransactions />

                    <WalletInfoCard
                        walletId={wallet?.id ?? ""}
                        createdAt={wallet?.createdAt ?? ""}
                        updatedAt={wallet?.updatedAt ?? ""}
                    />

                </div>

            </div>

        </main>
    );
}