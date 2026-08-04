"use client";

import AppFooter from "@/app/components/layout/AppFooter";
import AppBootstrap from "../layout/AppBootstrap";
import PullToRefresh from "../layout/PullToRefresh";
import PageTransition from "../layout/PageTransition";

import { useRefreshWallet } from "@/app/hooks/clientHooks/walletHooks/useRefreshWallet";
import { useRefreshTransactions } from "@/app/hooks/clientHooks/transactionHooks/useRefreshTransactions";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { refetch: refreshWallet } =
        useRefreshWallet();

    const refreshTransactions =
        useRefreshTransactions();

    async function handleRefresh() {
        await Promise.all([
            refreshWallet(),
            refreshTransactions(),
        ]);
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <AppBootstrap />

            <PageTransition>

                <PullToRefresh
                    onRefresh={handleRefresh}
                >
                    <main className="pb-24">
                        {children}
                    </main>
                </PullToRefresh>
            </PageTransition>


            <AppFooter />
        </div>
    );
}