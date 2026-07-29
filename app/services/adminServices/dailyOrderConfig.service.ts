import { api } from "../api";

import {
    CreateDailyOrderConfigDto,
    DailyOrderConfigListResponse,
    DailyOrderConfigResponse,
    UpdateDailyOrderConfigDto,
} from "@/app/types/adminTypes/dailyOrderConfig.types";

class DailyOrderConfigService {

    /**
     * Get every daily order configuration.
     */
    async getConfigs() {
        return api.get<DailyOrderConfigListResponse>(
            "/admin/daily-order-configs",
        );
    }

    /**
     * Get one daily order configuration.
     */
    async getConfig(
        id: string,
    ) {
        return api.get<DailyOrderConfigResponse>(
            `/admin/daily-order-configs/${id}`,
        );
    }

    /**
     * Create a new daily order configuration.
     */
    async createConfig(
        data: CreateDailyOrderConfigDto,
    ) {
        return api.post<DailyOrderConfigResponse>(
            "/admin/daily-order-configs",
            data,
        );
    }

    /**
     * Update a daily order configuration.
     */
    async updateConfig(
        id: string,
        data: UpdateDailyOrderConfigDto,
    ) {
        return api.put<DailyOrderConfigResponse>(
            `/admin/daily-order-configs/${id}`,
            data,
        );
    }

    /**
     * Activate a configuration.
     */
    async activateConfig(
        id: string,
    ) {
        return api.patch<DailyOrderConfigResponse>(
            `/admin/daily-order-configs/${id}/activate`,
        );
    }

    /**
     * Deactivate a configuration.
     */
    async deactivateConfig(
        id: string,
    ) {
        return api.patch<DailyOrderConfigResponse>(
            `/admin/daily-order-configs/${id}/deactivate`,
        );
    }

    /**
     * Delete a configuration.
     */
    async deleteConfig(
        id: string,
    ) {
        return api.delete<DailyOrderConfigResponse>(
            `/admin/daily-order-configs/${id}`,
        );
    }

    
}

export const dailyOrderConfigService =
    new DailyOrderConfigService();