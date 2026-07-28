"use client";

import DashboardPendingRequests from "./adminComponents/dashboard/DashboardPendingRequests";
import DashboardRecentActivity from "./adminComponents/dashboard/DashboardRecentActivity";
import DashboardRevenueChart from "./adminComponents/dashboard/DashboardRevenueChart";
import DashboardStats from "./adminComponents/dashboard/DashboardStats";
import { useDashboard } from "../hooks/adminHooks/useDashboard";
import DashboardQuickActions from "./adminComponents/dashboard/DashboardQuickActions";
import DashboardUserGrowthChart from "./adminComponents/dashboard/DashboardUserGrowthChart";

export default function AdminDashboardPage() {

    const {
        data,
        isLoading
    } = useDashboard();

    const dashboard = data;

    return (
        <main
            className="
                min-h-screen
                bg-slate-50
                pb-24
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    w-full
                    max-w-md
                    flex-col
                    gap-6
                    px-4
                    py-5
                "
            >
                <DashboardStats
                    statistics={
                        dashboard?.statistics
                    }
                    loading={isLoading}
                />

                <DashboardQuickActions />

                <DashboardPendingRequests 
                    upgrades={
                        dashboard?.pendingUpgradeRequests
                    }
                    withdrawals={dashboard?.pendingWithdrawals}
                />

                <DashboardRevenueChart 
                    data={
                        dashboard?.revenue ?? []
                    }
                />

                <DashboardUserGrowthChart
                    data={
                        dashboard?.userGrowth ?? []
                    }
                />

                <DashboardRecentActivity 
                    activities={
                        dashboard?.recentActivities ?? []
                    }
                />
            </div>
        </main>
    );
}