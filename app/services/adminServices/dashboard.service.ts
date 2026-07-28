import { api } from "../api";

import {
    DashboardData,
    DashboardResponse,
} from "../../types/adminTypes/dashboard.types";

class DashboardService {
    async getDashboard(): Promise<DashboardData> {
        const response =
            await api.get<DashboardResponse>(
                "/admin/dashboard",
            );

        return {
            statistics:
                response.data.statistics,

            pendingUpgradeRequests:
                response.data.pendingUpgradeRequests,

            pendingWithdrawals:
                response.data.pendingWithdrawals,

            membershipDistribution:
                response.data.membershipDistribution,

            userGrowth:
                response.data.userGrowth,

            revenue:
                response.data.revenue.map(
                    (item) => ({
                        date: item.date,
                        revenue: Number(
                            item.revenue,
                        ),
                    }),
                ),

            recentActivities:
                response.data.recentActivities.map(
                    (activity) => ({
                        id: activity.id,

                        type:
                            activity.type as
                                | "upgrade"
                                | "withdrawal"
                                | "transaction"
                                | "notification"
                                | "user",

                        title:
                            activity.title,

                        description:
                            activity.message,

                        createdAt:
                            activity.createdAt,

                        href: undefined,
                    }),
                ),
        };
    }
}

export const dashboardService =
    new DashboardService();