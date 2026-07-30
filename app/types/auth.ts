export interface Membership {
    id: string;
    name: string;
    workDeposit: string;
    dailyRevenue: string;
    monthlyRevenue: string;
    totalProfit: string;
    isActive: boolean;
}

export interface User {
    id: string;
    phone: string;
    email: string | null;
    role: "admin" | "user";
    country: string;
    referralCode: string;
    referredBy: string | null;
    isVerified: boolean;
    isActive: boolean;
    membership: Membership | null;
    createdAt: string;
}

export interface LoginRequest {
    phone: string;
    password: string;
}

export interface AdminLoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    phone: string;
    password: string;
    confirmPassword: string;
    referral: string;
    country?: string;
}

export interface AuthResponse {
    success: boolean;
    message: string;

    data: {
        user: User;
        accessToken: string;
        refreshToken: string;
    };
}

export interface RefreshResponse {
    success: boolean;
    message: string;

    data: {
        accessToken: string;
        refreshToken: string;
    };
}