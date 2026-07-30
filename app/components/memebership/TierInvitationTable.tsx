import {
    UserPlus,
    Percent,
    Wallet,
} from "lucide-react";

import { InvitationCommission } from "@/app/types/memebership.types";

export default function TierInvitationTable({
    rows,
}: {
    rows: InvitationCommission[];
}) {
    return (
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* Header */}
            <div
                className="
                    bg-gradient-to-r
                    from-[#EEF7FF]
                    via-[#E5F2FF]
                    to-[#D9ECFF]
                    px-5
                    py-4
                "
            >
                <h3 className="text-sm font-semibold text-[#2B84E0]">
                    Referral Commission
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                    Earn referral bonuses whenever members you invite upgrade
                    their membership.
                </p>
            </div>

            {/* Table Header */}
            <div
                className="
                    grid
                    grid-cols-[2fr_1fr_1fr]
                    items-center
                    border-y
                    border-slate-100
                    bg-slate-50
                    px-5
                    py-3
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-slate-500
                "
            >
                <span className="flex items-center gap-2">
                    <UserPlus size={14} />
                    Referral
                </span>

                <span className="flex items-center justify-center gap-2">
                    <Percent size={14} />
                    Rate
                </span>

                <span className="flex items-center justify-end gap-2">
                    <Wallet size={14} />
                    Income
                </span>
            </div>

            {/* Rows */}
            <div className="divide-y divide-slate-100">
                {rows.map((row, index) => (
                    <div
                        key={index}
                        className="
                            grid
                            grid-cols-[2fr_1fr_1fr]
                            items-center
                            gap-3
                            px-5
                            py-4
                            transition-colors
                            hover:bg-blue-50/40
                        "
                    >
                        <p className="text-sm leading-6 text-slate-700">
                            {row.method}
                        </p>

                        <div className="flex justify-center">
                            <span
                                className="
                                    rounded-full
                                    bg-blue-50
                                    px-3
                                    py-1
                                    text-xs
                                    font-semibold
                                    text-[#2B84E0]
                                "
                            >
                                {row.rate}
                            </span>
                        </div>

                        <div className="text-right">
                            <p className="font-semibold text-[#2B84E0]">
                                ₦{row.incomeAmount.toLocaleString()}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}