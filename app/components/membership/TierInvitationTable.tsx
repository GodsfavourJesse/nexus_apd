import {
    Percent,
    UserPlus,
} from "lucide-react";

interface TierInvitationTableProps {
    level1: number | string;
    level2: number | string;
    level3: number | string;
}

const rows = [
    {
        label: "Level 1 Membership Upgrade",
        key: "level1",
    },
    {
        label: "Level 2 Membership Upgrade",
        key: "level2",
    },
    {
        label: "Level 3 Membership Upgrade",
        key: "level3",
    },
] as const;

export default function TierInvitationTable({
    level1,
    level2,
    level3,
}: TierInvitationTableProps) {
    const values = {
        level1,
        level2,
        level3,
    };

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
                    Upgrade Referral Commission
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                    Earn commission whenever someone in your referral network
                    upgrades their membership.
                </p>
            </div>

            {/* Table Header */}
            <div
                className="
                    grid
                    grid-cols-[2fr_1fr]
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
                    Referral Level
                </span>

                <span className="flex items-center justify-end gap-2">
                    <Percent size={14} />
                    Commission
                </span>
            </div>

            {/* Rows */}
            <div className="divide-y divide-slate-100">
                {rows.map((row) => (
                    <div
                        key={row.key}
                        className="
                            grid
                            grid-cols-[2fr_1fr]
                            items-center
                            px-5
                            py-4
                            transition-colors
                            hover:bg-blue-50/40
                        "
                    >
                        <p className="text-sm text-slate-700">
                            {row.label}
                        </p>

                        <div className="text-right">
                            <span
                                className="
                                    inline-flex
                                    rounded-full
                                    bg-blue-50
                                    px-3
                                    py-1
                                    text-xs
                                    font-semibold
                                    text-[#2B84E0]
                                "
                            >
                                {values[row.key]}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}