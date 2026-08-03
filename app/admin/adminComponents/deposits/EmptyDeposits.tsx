"use client";

import { Inbox } from "lucide-react";

interface EmptyDepositsProps {
    title?: string;
    description?: string;
}

export function EmptyDeposits({
    title = "No deposits found",
    description = "There are currently no deposit records available.",
}: EmptyDepositsProps) {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white px-6 py-16 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                <Inbox size={24} className="text-slate-400" />
            </div>

            <h3 className="mt-4 text-[16px] font-semibold text-slate-900">
                {title}
            </h3>

            <p className="mt-1.5 max-w-[260px] text-center text-[13px] leading-5 text-slate-500">
                {description}
            </p>
        </div>
    );
}