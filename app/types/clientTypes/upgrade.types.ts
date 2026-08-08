export interface UpgradeValidationResponse {
    canUpgrade: boolean;
    currentPlan: UpgradeMembershipPlan;
    requestedPlan: RequestedUpgradeMembershipPlan;
    wallet: UpgradeWallet;
    checks: UpgradeCheck[];
    failedChecks: FailedUpgradeCheck[];
}

export interface UpgradeMembershipPlan {
    id: string;
    name: string;
    sortOrder: number;
}

export interface RequestedUpgradeMembershipPlan
    extends UpgradeMembershipPlan {
    upgradePrice: number;
}

export interface UpgradeWallet {
    balance: number;
    sufficient: boolean;
}

export interface UpgradeCheck {
    key: string;
    title: string;
    description: string;
    passed: boolean;
}

export interface FailedUpgradeCheck {
    key: string;
    message: string;
}

export enum UpgradeStatus {
    PENDING = "pending",
    UNDER_REVIEW = "under_review",
    APPROVED = "approved",
    REJECTED = "rejected",
    CANCELLED = "cancelled",
}

export enum PaymentMethod {
    WALLET = "wallet",
}

export interface CreateUpgradeRequestDto {
    requestedMembershipPlanId: string;
    paymentMethod: PaymentMethod;
}

export interface UpgradeRequest {
    id: string;
    reference: string;
    status: UpgradeStatus;
    paymentMethod: PaymentMethod;
    amount: number;
    createdAt: string;
    updatedAt: string;

    membershipPlan: {
        id: string;
        name: string;
    };
}