export interface User {
    id: string;

    phone: string;

    email: string | null;

    role: string;

    isVerified: boolean;

    isActive: boolean;

    canUpgrade: boolean;

    referralCode: string;

    referredBy: string | null;

    membershipPlanId: string | null;

    createdAt: string;

    updatedAt: string;
}

export interface UserListData {
    items: User[];

    total: number;
}

export interface UserListResponse {
    success: boolean;

    data: UserListData;
}

export interface UserResponse {
    success: boolean;

    message?: string;

    data: User;
}

export interface Membership {
    id: string;

    name: string;

    slug: string;

    upgradePrice: string;

    isInternship: boolean;
}

export interface Wallet {
    id: string;

    userId: string;

    balance: string;

    totalEarnings: string;

    totalWithdrawn: string;

    createdAt: string;

    updatedAt: string;
}

export interface Referral {
    id: string;

    phone: string;

    email: string | null;

    referralCode: string;
}

export interface Transaction {
    id: string;

    amount: string;

    type: string;

    status: string;

    createdAt: string;
}

export interface UserProfile {
    user: User;

    membership?: Membership | null;

    wallet: Wallet | null;

    referrals: Referral[];

    transactions: Transaction[];
}

export interface UserProfileResponse {
    success: boolean;

    data: UserProfile;
}