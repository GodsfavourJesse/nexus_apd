import { CreateWithdrawalDto, CreateWithdrawalResponse, WithdrawalResponse, WithdrawalsResponse } from "@/app/types/clientTypes/withdrawal.types";
import { api } from "../api";

export class WithdrawalService {

    // Submit a withdrawal request.
    // POST /withdrawals
    async create(
        data: CreateWithdrawalDto,
    ) {
        const response =
            await api.post<CreateWithdrawalResponse>(
                "/withdrawals",
                data,
            );

        return response.data;
    }

    // Get all withdrawals belonging to the authenticated user.
    // GET /withdrawals
    async findAll() {
        const response =
            await api.get<WithdrawalsResponse>(
                "/withdrawals",
            );

        return response.data;
    }

    // Get a single withdrawal.
    // GET /withdrawals/:id
    async findById(
        withdrawalId: string,
    ) {
        const response =
            await api.get<WithdrawalResponse>(
                `/withdrawals/${withdrawalId}`,
            );

        return response.data;
    }
}

export const withdrawalService =
    new WithdrawalService();