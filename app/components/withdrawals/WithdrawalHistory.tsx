"use client";

import { useMemo, useState } from "react";
import {
    Filter,
    ReceiptText,
    Search,
} from "lucide-react";

import {
    Withdrawal,
    WithdrawalStatus,
} from "@/app/types/clientTypes/withdrawal.types";

import { WithdrawalCard } from "./WithdrawalCard";
import { WithdrawalEmptyState } from "./WithdrawalEmptyState";

interface WithdrawalHistoryProps {
    withdrawals: Withdrawal[];
}

const FILTERS: {
    label: string;
    value: "all" | WithdrawalStatus;
}[] = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Pending",
        value: WithdrawalStatus.PENDING,
    },
    {
        label: "Approved",
        value: WithdrawalStatus.APPROVED,
    },
    {
        label: "Paid",
        value: WithdrawalStatus.PAID,
    },
    {
        label: "Rejected",
        value: WithdrawalStatus.REJECTED,
    },
];

export function WithdrawalHistory({
    withdrawals,
}: WithdrawalHistoryProps) {
    const [search, setSearch] =
        useState("");

    const [status, setStatus] =
        useState<"all" | WithdrawalStatus>(
            "all",
        );

    const filtered =
        useMemo(() => {
            const keyword =
                search
                    .trim()
                    .toLowerCase();

            return withdrawals.filter(
                (withdrawal) => {
                    const matchesStatus =
                        status === "all"
                            ? true
                            : withdrawal.status ===
                              status;

                    const matchesSearch =
                        withdrawal.bankName
                            .toLowerCase()
                            .includes(keyword) ||
                        withdrawal.accountName
                            .toLowerCase()
                            .includes(keyword) ||
                        withdrawal.accountNumber.includes(
                            keyword,
                        ) ||
                        withdrawal.amount.includes(
                            keyword,
                        );

                    return (
                        matchesStatus &&
                        matchesSearch
                    );
                },
            );
        }, [
            withdrawals,
            search,
            status,
        ]);

    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            {/* Header */}

            <div className="border-b border-slate-200 p-6">

                <div className="flex flex-col gap-5">

                    <div>

                        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">

                            <ReceiptText className="h-5 w-5 text-[#1391FF]" />

                            Withdrawal History

                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Review every withdrawal request you've submitted.
                        </p>

                    </div>

                    {/* Search */}

                    <div className="relative">

                        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) =>
                                setSearch(
                                    e.target.value,
                                )
                            }
                            placeholder="Search bank, account or amount..."
                            className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 text-sm outline-none transition focus:border-[#1391FF] focus:ring-2 focus:ring-[#1391FF]/20"
                        />

                    </div>

                    {/* Filters */}

                    <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">

                        <div className="flex items-center pr-2 text-slate-500">

                            <Filter className="h-4 w-4" />

                        </div>

                        {FILTERS.map(
                            (filter) => (
                                <button
                                    key={
                                        filter.value
                                    }
                                    type="button"
                                    onClick={() =>
                                        setStatus(
                                            filter.value,
                                        )
                                    }
                                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                        status === filter.value
                                            ? "bg-[#1391FF] text-white shadow-md shadow-[#1391FF]/30"
                                            : "bg-slate-100 text-slate-600 hover:bg-[#1391FF]/10 hover:text-[#1391FF]"
                                    }`}
                                >
                                    {
                                        filter.label
                                    }
                                </button>
                            ),
                        )}

                    </div>

                </div>

            </div>

            {/* Content */}

            <div className="p-6">

                <div className="mb-6 flex items-center justify-between">

                    <p className="text-sm text-slate-500">

                        Showing

                        <span className="mx-1 font-semibold text-slate-900">
                            {filtered.length}
                        </span>

                        withdrawal
                        {filtered.length !==
                            1 && "s"}

                    </p>

                </div>

                {filtered.length === 0 ? (
                    <WithdrawalEmptyState />
                ) : (
                    <div className="space-y-4">

                        {filtered.map(
                            (
                                withdrawal,
                            ) => (
                                <WithdrawalCard
                                    key={
                                        withdrawal.id
                                    }
                                    withdrawal={
                                        withdrawal
                                    }
                                />
                            ),
                        )}

                    </div>
                )}

            </div>

        </section>
    );
}