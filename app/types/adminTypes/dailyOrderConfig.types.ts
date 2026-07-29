export interface DailyOrderConfig {
    id: string;
    membershipPlanId: string;
    tasksPerDay: number;
    rewardPerTask: string;
    dailyRewardLimit: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;

    membershipPlan: {
        id: string;
        name: string;
    } | null;
}

export interface DailyOrderConfigListResponse {
    success: boolean;
    data: DailyOrderConfig[];
}

export interface DailyOrderConfigResponse {
    success: boolean;
    data: DailyOrderConfig;
}

export interface CreateDailyOrderConfigDto {
    membershipPlanId: string;
    tasksPerDay: number;
    rewardPerTask: string;
    dailyRewardLimit: string;
    isActive?: boolean;
}

export interface UpdateDailyOrderConfigDto {
    membershipPlanId?: string;
    tasksPerDay?: number;
    rewardPerTask?: string;
    dailyRewardLimit?: string;
    isActive?: boolean;
}