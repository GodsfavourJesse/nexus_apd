import {
    ApproveWithdrawalDto,
    RejectWithdrawalDto,
    WithdrawalListResponse,
    WithdrawalResponse,
} from "@/app/types/adminTypes/withdrawal.types";

import { api } from "../api";

class WithdrawalService {

    /**
     * Get every withdrawal request.
     */
    async getWithdrawals() {
        return api.get<WithdrawalListResponse>(
            "/admin/withdrawals",
        );
    }

    /**
     * Get one withdrawal request.
     */
    async getWithdrawal(
        id: string,
    ) {
        return api.get<WithdrawalResponse>(
            `/admin/withdrawals/${id}`,
        );
    }

    /**
     * Approve a withdrawal request.
     */
    async approveWithdrawal(
        id: string,
        data?: ApproveWithdrawalDto,
    ) {
        return api.patch<WithdrawalResponse>(
            `/admin/withdrawals/${id}/approve`,
            data,
        );
    }

    /**
     * Reject a withdrawal request.
     */
    async rejectWithdrawal(
        id: string,
        data: RejectWithdrawalDto,
    ) {
        return api.patch<WithdrawalResponse>(
            `/admin/withdrawals/${id}/reject`,
            data,
        );
    }

    /**
     * Mark an approved withdrawal
     * as paid.
     */
    async markPaid(
        id: string,
    ) {
        return api.patch<WithdrawalResponse>(
            `/admin/withdrawals/${id}/paid`,
        );
    }
}

export const withdrawalService =
    new WithdrawalService();