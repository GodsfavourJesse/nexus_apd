"use client";

import { Deposit } from "@/app/types/clientTypes/deposit.types";


interface DepositHistoryTableProps {
    deposits: Deposit[];
    loading?: boolean;
}

function statusClass(status: string) {
    switch (status) {
        case "approved":
            return "bg-green-100 text-green-700";

        case "pending":
            return "bg-yellow-100 text-yellow-700";

        case "declined":
            return "bg-red-100 text-red-700";

        case "cancelled":
            return "bg-gray-100 text-gray-700";

        default:
            return "bg-blue-100 text-blue-700";
    }
}

export default function DepositHistoryTable({
    deposits,
    loading,
}: DepositHistoryTableProps) {
    if (loading) {
        return (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
                <p className="text-slate-500">
                    Loading deposits...
                </p>
            </div>
        );
    }

    if (!deposits.length) {
        return (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-16 text-center">

                <h3 className="text-lg font-semibold text-slate-700">
                    No Deposits Found
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                    Your deposit history will appear here.
                </p>

            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="bg-slate-50">

                        <tr>

                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                                Reference
                            </th>

                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                                Amount
                            </th>

                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                                Bank
                            </th>

                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                                Date
                            </th>

                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                                Status
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {deposits.map((deposit) => (
                            <tr
                                key={deposit.id}
                                className="border-t border-slate-100 transition hover:bg-slate-50"
                            >

                                <td className="px-6 py-5 text-sm font-medium text-slate-900">
                                    {deposit.reference}
                                </td>

                                <td className="px-6 py-5 font-semibold text-blue-600">
                                    ₦
                                    {Number(
                                        deposit.amount,
                                    ).toLocaleString()}
                                </td>

                                <td className="px-6 py-5 text-sm text-slate-600">
                                    {deposit.senderBankName}
                                </td>

                                <td className="px-6 py-5 text-sm text-slate-500">
                                    {new Date(
                                        deposit.createdAt,
                                    ).toLocaleDateString()}
                                </td>

                                <td className="px-6 py-5">

                                    <span
                                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusClass(
                                            deposit.status,
                                        )}`}
                                    >
                                        {deposit.status.replace(
                                            "_",
                                            " ",
                                        )}
                                    </span>

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}