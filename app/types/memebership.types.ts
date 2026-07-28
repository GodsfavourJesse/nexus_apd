export interface OrderQuota {
    timeUnit: string;
    orderQuota: number;
    totalOrderRevenue: number;
}

export interface InvitationCommission {
    method: string;
    rate: string;
    incomeAmount: number;
}

export interface OrderCommission {
    completionFrom: string;
    ratio: string;
    incomeAmount: number;
}

export interface MembershipTier {
    id: string;
    tierIndex: number;
    name: string;
    isCurrent: boolean;
    isLocked: boolean;
    price?: number;
    currency?: string;
    description: string;
    orderQuota: OrderQuota;
    invitationCommissions?: InvitationCommission[];
    orderCommissions?: OrderCommission[];
}