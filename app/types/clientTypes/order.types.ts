// Generic API response.
export interface ApiResponse<T> {
    success: boolean;
    message?: string;
    data: T;
}

// Today's order state.
export type TodayOrderState =
    | "AVAILABLE"
    | "COMPLETED"
    | "NO_TASKS";

// Daily Order.
export interface Order {
    id: string;
    userId: string;
    membershipPlanId: string;
    configId: string;

    date: string;

    status:
        | "pending"
        | "in_progress"
        | "completed"
        | "expired";

    requiredTasks: number;
    completedTasks: number;
    totalReward: string;
    rewardEarned: string;
    completedAt: string | null;
    createdAt: string;
    updatedAt: string;
}

// Today's order.
export interface TodayOrder extends Order {

    // Computed by the backend.
    
    // AVAILABLE  -> User has tasks remaining.
    // COMPLETED  -> User completed all today's tasks.
    // NO_TASKS   -> No advertisements/tasks available today.
    state: TodayOrderState;
    items: OrderItem[];
}

// Advertisement attached to an order item.
export interface OrderAdvertisement {
    id: string;
    title: string;
    thumbnailUrl: string | null;
    bannerUrl: string | null;
    fullDescription: string;
    buttonText: string;
    shortDescription?: string | null;
}

// Daily Order Item.
export interface OrderItem {
    id: string;
    dailyOrderId: string;
    advertisementId: string | null;
    sequence: number;
    reward: string;

    status:
        | "pending"
        | "completed"
        | "expired";

    completedAt: string | null;
    createdAt: string;
    updatedAt: string;
    advertisement: OrderAdvertisement;
}

// Complete Task Response.
export interface CompleteOrderResponse {
    success: boolean;
    message: string;

    data: {
        success: boolean;
    };
}