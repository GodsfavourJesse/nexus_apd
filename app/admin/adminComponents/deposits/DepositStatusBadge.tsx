"use client";

import { DepositStatus } from "@/app/types/adminTypes/adminDeposit.types";

interface DepositStatusBadgeProps {
    status: DepositStatus;
}

export function DepositStatusBadge({
    status,
}: DepositStatusBadgeProps) {

    console.log("Deposit Status:", status);

    switch (status) {

        case DepositStatus.PENDING:
            return (
                <span className="inline-flex items-center rounded-full border border-yellow-200 bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800">
                    Pending
                </span>
            );

        case DepositStatus.UNDER_REVIEW:
            return (
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                    Under Review
                </span>
            );

        case DepositStatus.APPROVED:
            return (
                <span className="inline-flex items-center rounded-full border border-green-200 bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                    Approved
                </span>
            );

        case DepositStatus.DECLINED:
            return (
                <span className="inline-flex items-center rounded-full border border-red-200 bg-red-100 px-3 py-1 text-xs font-semibold text-red-800">
                    Declined
                </span>
            );

        default:
            return (
                <span className="inline-flex items-center rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                    {String(status)}
                </span>
            );
    }
}