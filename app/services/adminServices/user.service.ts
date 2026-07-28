import { UserListResponse, UserProfileResponse, UserResponse } from "../../types/adminTypes/user.types";
import { api } from "../api";

class UserService {

    // Get all users
    async getUsers(
        params?: Record<string, string>,
    ) {
        const query = params
            ? `?${new URLSearchParams(params).toString()}`
            : "";

        return api.get<UserListResponse>(
            `/admin/users${query}`,
        );
    }

    // Search users
    async searchUsers(
        query: string,
    ) {
        return api.get<UserListResponse>(
            `/admin/users/search?query=${encodeURIComponent(query)}`,
        );
    }

    // Filter users
    async filterUsers(
        params: Record<string, string>,
    ) {
        const query =
            new URLSearchParams(params).toString();

        return api.get<UserListResponse>(
            `/admin/users/filter?${query}`,
        );
    }

    // Get a single user profile
    async getUser(
        id: string,
    ) {
        return api.get<UserProfileResponse>(
            `/admin/users/${id}`,
        );
    }

    // Suspend user
    async suspendUser(
        id: string,
    ) {
        return api.patch<UserResponse>(
            `/admin/users/${id}/suspend`,
        );
    }

    // Activate user
    async activateUser(
        id: string,
    ) {
        return api.patch<UserResponse>(
            `/admin/users/${id}/activate`,
        );
    }

    // Verify user
    async verifyUser(
        id: string,
    ) {
        return api.patch<UserResponse>(
            `/admin/users/${id}/verify`,
        );
    }

}

export const userService = new UserService();