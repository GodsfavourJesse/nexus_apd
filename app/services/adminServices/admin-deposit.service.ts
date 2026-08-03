import api from "@/app/lib/axios";
import { AdminDeposit, ApproveDepositDto, RejectDepositDto } from "@/app/types/adminTypes/adminDeposit.types";

export class AdminDepositService {

    /**
     * ----------------------------------------
     * Get every deposit
     * ----------------------------------------
     */
    async findAll() {
        const response =
            await api.get<{
                success: boolean;
                message: string;
                data: AdminDeposit[];
            }>("/admin/deposits");

        return response.data.data;
    }

    /**
     * ----------------------------------------
     * Get pending deposits
     * ----------------------------------------
     */
    async findPending() {
        const response =
            await api.get<{
                success: boolean;
                message: string;
                data: AdminDeposit[];
            }>("/admin/deposits/pending");

        return response.data.data;
    }

    /**
     * ----------------------------------------
     * Get one deposit
     * ----------------------------------------
     */
    async findById(
        depositId: string,
    ) {
        const response =
            await api.get<{
                success: boolean;
                message: string;
                data: AdminDeposit;
            }>(
                `/admin/deposits/${depositId}`,
            );

        return response.data.data;
    }

    /**
     * ----------------------------------------
     * Approve deposit
     * ----------------------------------------
     */
    async approve(
        depositId: string,
        dto: ApproveDepositDto,
    ) {
        const response =
            await api.patch<{
                success: boolean;
                message: string;
                data: AdminDeposit;
            }>(
                `/admin/deposits/${depositId}/approve`,
                dto,
            );

        return response.data.data;
    }

    /**
     * ----------------------------------------
     * Reject deposit
     * ----------------------------------------
     */
    async reject(
        depositId: string,
        dto: RejectDepositDto,
    ) {
        const response =
            await api.patch<{
                success: boolean;
                message: string;
                data: AdminDeposit;
            }>(
                `/admin/deposits/${depositId}/reject`,
                dto,
            );

        return response.data.data;
    }

}

export const adminDepositService =
    new AdminDepositService();