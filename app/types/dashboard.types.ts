export interface DashboardStatistics {
    totalUsers: number;
    activeUsers: number;
    pendingUpgradeRequests: number;
    pendingWithdrawals: number;
    totalRevenue: number;
    totalTransactions: number;
}

/* ============================
   Pending Upgrade
============================ */

export interface PendingUpgradeRequest {
    id: string;
    amount: string;
    paymentMethod: string;
    paymentProof: string | null;
    reference: string;
    createdAt: string;

    user: {
        id: string;
        phone: string;
        email: string | null;
        referralCode: string;
    };

    membership: {
        id: string;
        name: string;
        slug: string;
    };
}

// Pending Withdrawal
export interface PendingWithdrawal {
    id: string;
    amount: string;
    status: string;
    accountName: string;
    accountNumber: string;
    bankName: string;
    createdAt: string;
    user: {
        id: string;
        phone: string;
        email: string | null;
        referralCode: string;
    };
}

/* ============================
   Revenue
============================ */

export interface RevenuePoint {
    date: string;
    revenue: number;
}

/* ============================
   User Growth
============================ */

export interface UserGrowthPoint {
    date: string;
    users: number;
}

/* ============================
   Membership Distribution
============================ */

export interface MembershipDistribution {
    membershipPlanId: string;
    membershipName: string;
    total: number;
}

/* ============================
   Activity USED BY FRONTEND
============================ */

export interface DashboardActivity {
    id: string;

    type:
        | "upgrade"
        | "withdrawal"
        | "transaction"
        | "notification"
        | "user";

    title: string;

    description: string;

    createdAt: string;

    href?: string;
}

/* ============================
   RAW ACTIVITY FROM BACKEND
============================ */

export interface ApiRecentActivity {
    id: string;

    type: string;

    title: string;

    message: string;

    createdAt: string;
}

/* ============================
   Backend response data
============================ */

export interface DashboardApiData {
    statistics: DashboardStatistics;

    recentActivities: ApiRecentActivity[];

    pendingUpgradeRequests: PendingUpgradeRequest[];

    pendingWithdrawals: PendingWithdrawal[];

    membershipDistribution: MembershipDistribution[];

    revenue: {
        date: string;
        revenue: string;
    }[];

    userGrowth: UserGrowthPoint[];
}

/* ============================
   Backend Response
============================ */

export interface DashboardResponse {
    success: boolean;
    data: DashboardApiData;
}

/* ============================
   Frontend Data
============================ */

export interface DashboardData {
    statistics: DashboardStatistics;

    recentActivities: DashboardActivity[];

    pendingUpgradeRequests: PendingUpgradeRequest[];

    pendingWithdrawals: PendingWithdrawal[];

    membershipDistribution: MembershipDistribution[];

    revenue: RevenuePoint[];

    userGrowth: UserGrowthPoint[];
}