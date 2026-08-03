"use client";

import axiosInstance from "@/app/lib/axios";

import {
    CreateDepositDto,
    Deposit,
} from "@/app/types/clientTypes/deposit.types";

export class DepositService {
    async createDeposit(
        data: CreateDepositDto,
    ): Promise<Deposit> {
        const response =
            await axiosInstance.post(
                "/deposits",
                data,
            );

        return response.data.data;
    }

    async getMyDeposits(): Promise<Deposit[]> {
        const response =
            await axiosInstance.get(
                "/deposits",
            );

        return response.data.data;
    }

    async getDeposit(
        depositId: string,
    ): Promise<Deposit> {
        const response =
            await axiosInstance.get(
                `/deposits/${depositId}`,
            );

        return response.data.data;
    }

    async getDepositByReference(
        reference: string,
    ) : Promise<Deposit> {
        const response = 
            await axiosInstance.get(
                `/deposits/reference/${encodeURIComponent(reference)}`,
            );

        return response.data.data;
    }

    async getPendingDeposit() {
        const response =
            await axiosInstance.get(
                "/deposits/pending",
            );

        return response.data.data;
    }

    async cancelDeposit(
        depositId: string,
    ): Promise<Deposit> {
        const response =
            await axiosInstance.patch(
                `/deposits/${depositId}/cancel`,
            );

        return response.data.data;
    }
}

export const depositService =
    new DepositService();