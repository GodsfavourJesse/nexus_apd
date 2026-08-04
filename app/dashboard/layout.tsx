"use client";

import AppFooter from "@/app/components/layout/AppFooter";
import AppBootstrap from "../layout/AppBootstrap";
import PageTransition from "../layout/PageTransition";

// import PullToRefresh from "../layout/PullToRefresh";
// import { useRefreshWallet } from "@/app/hooks/clientHooks/walletHooks/useRefreshWallet";
// import { useRefreshTransactions } from "@/app/hooks/clientHooks/transactionHooks/useRefreshTransactions";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // const { refetch: refreshWallet } =
    //     useRefreshWallet();

    // const refreshTransactions =
    //     useRefreshTransactions();

    // async function handleRefresh() {
    //     await Promise.all([
    //         refreshWallet(),
    //         refreshTransactions(),
    //     ]);
    // }

    return (
        <div className="min-h-screen bg-slate-50">
            <AppBootstrap />

            <PageTransition>
                <main className="min-h-screen pb-32">
                    {children}
                </main>
            </PageTransition>


            <AppFooter />
        </div>
    );
}