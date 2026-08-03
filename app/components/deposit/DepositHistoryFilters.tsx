"use client";

import { FILTERS } from "@/app/constants/upload.constants";
import { DepositStatus } from "@/app/types/clientTypes/deposit.types";
import { Search } from "lucide-react";

type Filter = "all" | DepositStatus;

interface DepositHistoryFiltersProps {
    search: string;
    filter: Filter;
    onSearchChange: (value: string) => void;
    onFilterChange: (value: Filter) => void;
}

export default function DepositHistoryFilters({
    search,
    filter,
    onSearchChange,
    onFilterChange,
}: DepositHistoryFiltersProps) {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">

            {/* Search */}

            <div className="relative w-full lg:max-w-sm">

                <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                    type="text"
                    value={search}
                    onChange={(e) =>
                        onSearchChange(e.target.value)
                    }
                    placeholder="Search reference or bank..."
                    className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-slate-300
                        pl-11
                        pr-4
                        text-sm
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                    "
                />

            </div>

            {/* Filters */}

            <div className="flex flex-wrap gap-2">

                {FILTERS.map((item) => (
                    <button
                        key={item.value}
                        type="button"
                        onClick={() =>
                            onFilterChange(item.value)
                        }
                        className={`
                            rounded-xl
                            px-4
                            py-2
                            text-sm
                            font-medium
                            transition
                            ${
                                filter === item.value
                                    ? "border border-blue-600 bg-blue-600 text-white shadow-sm"
                                    : "border border-slate-300 bg-white text-slate-600 hover:bg-slate-50"
                            }
                        `}
                    >
                        {item.label}
                    </button>
                ))}

            </div>

        </div>
    );
}