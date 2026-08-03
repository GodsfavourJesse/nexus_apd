"use client";

import { Eye } from "lucide-react";

import { Deposit } from "@/app/types/clientTypes/deposit.types";

import DepositStatusBadge from "./DepositStatusBadge";

interface DepositTableRowProps {
    deposit: Deposit;
    onView?: (deposit: Deposit) => void;
}

export default function DepositTableRow({
    deposit,
    onView,
}: DepositTableRowProps) {
    return (
        <tr className="border-b border-slate-100 transition hover:bg-slate-50">
            {/* Reference */}
            <td className="px-6 py-5">
                <p className="font-semibold text-slate-900">
                    {deposit.reference}
                </p>
            </td>

            {/* Amount */}
            <td className="px-6 py-5">
                <span className="font-semibold text-emerald-600">
                    ₦
                    {Number(
                        deposit.amount,
                    ).toLocaleString()}
                </span>
            </td>

            {/* Status */}
            <td className="px-6 py-5">
                <DepositStatusBadge
                    status={deposit.status}
                />
            </td>

            {/* Date */}
            <td className="px-6 py-5 text-slate-600">
                {new Date(
                    deposit.createdAt,
                ).toLocaleDateString()}
            </td>

            {/* Actions */}
            <td className="px-6 py-5">
                <button
                    type="button"
                    onClick={() =>
                        onView?.(deposit)
                    }
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-slate-200
                        bg-white
                        px-3
                        py-2
                        text-sm
                        font-medium
                        text-slate-700
                        transition
                        hover:border-blue-500
                        hover:bg-blue-50
                        hover:text-blue-600
                    "
                >
                    <Eye size={16} />
                    View
                </button>
            </td>
        </tr>
    );
}