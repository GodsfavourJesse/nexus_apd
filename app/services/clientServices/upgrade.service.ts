import {
    CreateUpgradeRequestDto,
    UpgradeRequest,
    UpgradeValidationResponse,
} from "@/app/types/clientTypes/upgrade.types";

import { api } from "../api";

class UpgradeService {

    // Validate whether the authenticated user can upgrade to the selected membership.
    async validateUpgrade(
        membershipPlanId: string,
    ): Promise<UpgradeValidationResponse> {
        const response = await api.get<{
            success: boolean;
            data: UpgradeValidationResponse;
        }>(
            `/upgrade-requests/validate/${membershipPlanId}`,
        );

        return response.data;
    }

    // Create an upgrade request.
    async createUpgradeRequest(
        payload: CreateUpgradeRequestDto,
    ): Promise<UpgradeRequest> {
        const response = await api.post<{
            success: boolean;
            data: UpgradeRequest;
        }>(
            "/upgrade-requests",
            payload,
        );

        return response.data;
    }

    // Retrieve the authenticated user's upgrade request history.
    async getUpgradeRequests(): Promise<
        UpgradeRequest[]
    > {
        const response = await api.get<{
            success: boolean;
            data: UpgradeRequest[];
        }>(
            "/upgrade-requests",
        );

        return response.data;
    }

    // Retrieve a single upgrade requests.
    async getUpgradeRequest(
        requestId: string,
    ): Promise<UpgradeRequest> {
        const response = await api.get<{
            success: boolean;
            data: UpgradeRequest;
        }>(
            `/upgrade-requests/${requestId}`,
        );

        return response.data;
    }

    // Cancel an existing pending upgrade request.
    async cancelUpgradeRequest(
        requestId: string,
    ): Promise<void> {
        await api.delete(
            `/upgrade-requests/${requestId}`,
        );
    }
}

export const upgradeService =
    new UpgradeService();