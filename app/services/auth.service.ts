import { AdminLoginRequest, AuthResponse, LoginRequest, RefreshResponse, RegisterRequest, User } from "../types/auth";
import { api } from "./api";

class AuthService {

    // User Registration
    register(data: RegisterRequest) {
        return api.post<AuthResponse>(
            "/auth/register",
            data
        );
    }

    // User Login (Phone)
    login(data: LoginRequest) {
        return api.post<AuthResponse>(
            "/auth/login",
            data
        );
    }

    // Admin Login (Email)
    adminLogin(data: AdminLoginRequest) {
        return api.post<AuthResponse>(
            "/auth/admin/login",
            data
        );
    }

    // Refresh Access Token
    refresh(refreshToken: string) {
        return api.post<RefreshResponse>(
            "/auth/refresh",
            {
                refreshToken,
            }
        );
    }

    // Logout
    logout(refreshToken: string) {
        return api.post<{
            success: boolean;
            message: string;
        }>(
            "/auth/logout",
            {
                refreshToken,
            }
        );
    }

    // Current Authenticated User
    me() {
        return api.get<{
            success: boolean;
            data: User;
        }>("/auth/me");
    }
}

export const authService = new AuthService();