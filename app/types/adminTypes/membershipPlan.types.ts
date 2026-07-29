export interface MembershipPlan {
    id: string;

    name: string;

    description: string | null;

    price: string;

    dailyReward: string;

    durationInDays: number;

    isActive: boolean;

    createdAt: string;

    updatedAt: string;
}

export interface MembershipPlanListResponse {
    success: boolean;
    data: MembershipPlan[];
}

export interface MembershipPlanResponse {
    success: boolean;
    data: MembershipPlan;
}