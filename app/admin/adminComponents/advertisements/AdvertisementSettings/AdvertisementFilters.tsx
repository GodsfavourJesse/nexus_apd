"use client";

import { Search } from "lucide-react";
import { AdvertisementStatus } from "@/app/types/adminTypes/advertisement.types";

interface Props {
    search: string;
    onSearchChange: (value: string) => void;

    status: AdvertisementStatus | "all";
    onStatusChange: (value: AdvertisementStatus | "all") => void;
}

const STATUS_OPTIONS: { value: AdvertisementStatus | "all"; label: string }[] = [
    { value: "all", label: "All statuses" },
    { value: AdvertisementStatus.DRAFT, label: "Draft" },
    { value: AdvertisementStatus.ACTIVE, label: "Active" },
    { value: AdvertisementStatus.INACTIVE, label: "Inactive" },
    { value: AdvertisementStatus.SCHEDULED, label: "Scheduled" },
    { value: AdvertisementStatus.EXPIRED, label: "Expired" },
];

export default function AdvertisementFilters({
    search,
    onSearchChange,
    status,
    onStatusChange,
}: Props) {
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
                <Search
                    size={16}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                    type="text"
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search by title or category..."
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
            </div>

            <select
                value={status}
                onChange={(e) =>
                    onStatusChange(e.target.value as AdvertisementStatus | "all")
                }
                className="h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            >
                {STATUS_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}