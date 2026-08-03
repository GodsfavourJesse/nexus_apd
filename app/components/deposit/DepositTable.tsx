"use client";

import { Inbox } from "lucide-react";

import { Deposit } from "@/app/types/clientTypes/deposit.types";

import DepositTableRow from "./DepositTableRow";

interface DepositTableProps {
    deposits: Deposit[];
    loading?: boolean;
    onView?: (deposit: Deposit) => void;
}

const HEADERS = [
    "Reference",
    "Amount",
    "Status",
    "Date",
    "Actions",
];

export default function DepositTable({
    deposits,
    loading = false,
    onView,
}: DepositTableProps) {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead className="bg-slate-50">
                        <tr>
                            {HEADERS.map((header) => (
                                <th
                                    key={header}
                                    className="
                                        px-6
                                        py-4
                                        text-left
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wider
                                        text-slate-500
                                    "
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {/* Loading */}
                        {loading &&
                            Array.from({
                                length: 6,
                            }).map((_, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-slate-100"
                                >
                                    {Array.from({
                                        length: 5,
                                    }).map(
                                        (_, cell) => (
                                            <td
                                                key={
                                                    cell
                                                }
                                                className="px-6 py-5"
                                            >
                                                <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
                                            </td>
                                        ),
                                    )}
                                </tr>
                            ))}

                        {/* Empty */}
                        {!loading &&
                            deposits.length ===
                                0 && (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="px-6 py-20"
                                    >
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                                                <Inbox className="text-slate-400" />
                                            </div>

                                            <h3 className="mt-4 text-base font-semibold text-slate-900">
                                                No Deposits
                                            </h3>

                                            <p className="mt-1 text-sm text-slate-500">
                                                Your
                                                deposit
                                                history
                                                will
                                                appear
                                                here.
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            )}

                        {/* Rows */}
                        {!loading &&
                            deposits.map(
                                (
                                    deposit,
                                ) => (
                                    <DepositTableRow
                                        key={
                                            deposit.id
                                        }
                                        deposit={
                                            deposit
                                        }
                                        onView={
                                            onView
                                        }
                                    />
                                ),
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}