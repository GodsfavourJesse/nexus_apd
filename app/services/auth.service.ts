import {
    AdminLoginRequest,
    AuthResponse,
    LoginRequest,
    RefreshResponse,
    RegisterRequest,
    User,
} from "../types/auth";

import { api } from "./api";

class AuthService {
    register(data: RegisterRequest) {
        return api.post<AuthResponse>(
            "/auth/register",
            data,
        );
    }

    login(data: LoginRequest) {
        return api.post<AuthResponse>(
            "/auth/login",
            data,
        );
    }

    adminLogin(data: AdminLoginRequest) {
        return api.post<AuthResponse>(
            "/auth/admin/login",
            data,
        );
    }

    refresh(refreshToken: string) {
        return api.post<RefreshResponse>(
            "/auth/refresh",
            {
                refreshToken,
            },
        );
    }

    logout(refreshToken: string) {
        return api.post<{
            success: boolean;
            message: string;
        }>("/auth/logout", {
            refreshToken,
        });
    }

    me() {
        return api.get<{
            success: boolean;
            data: User;
        }>("/auth/me");
    }
}

export const authService =
    new AuthService();