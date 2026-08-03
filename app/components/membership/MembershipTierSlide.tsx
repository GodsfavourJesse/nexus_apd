import TierQuotaTable from "./TierQuotaTable";
import TierInvitationTable from "./TierInvitationTable";
import TierOrderCommissionTable from "./TierOrderCommissionTable";
import { Lock, CheckCircle2 } from "lucide-react";

import { MembershipTier } from "@/app/types/clientTypes/memebership.types";

interface MembershipTierSlideProps {
    tier: MembershipTier;
    onJoin?: (tierId: string) => void;
}

export default function MembershipTierSlide({
    tier,
    onJoin,
}: MembershipTierSlideProps) {
    return (
        <div
            className="
                rounded-[30px]
                border border-slate-200/70
                bg-white/90
                p-6
                shadow-[0_18px_40px_-20px_rgba(15,23,42,0.25)]
                backdrop-blur-xl
            "
        >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <span
                        className={`
                            inline-flex items-center gap-2 rounded-full
                            px-3 py-1 text-[10px] md:text-xs font-semibold
                            ${
                                tier.isCurrent
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-slate-100 text-slate-600"
                            }
                        `}
                    >
                        {tier.isCurrent ? (
                            <div className="text-[10px] flex gap-1">
                                <CheckCircle2 size={14} />
                                Current Membership
                            </div>
                        ) : (
                            <>
                                <Lock size={14} />
                                Locked
                            </>
                        )}
                    </span>

                    <h2 className="mt-1 md:mt-4 text-[16px] md:text-2xl font-bold text-slate-900">
                        {tier.name}
                    </h2>
                </div>

                {!tier.isCurrent && tier.price !== undefined && (
                    <div className="text-right">
                        <p className="text-[10px] md:text-xs text-slate-500">
                            Membership Fee
                        </p>

                        <p className="mt-1 text-[14px] md:text-2xl font-bold text-[#2B84E0]">
                            {tier.currency ?? "NGN"}
                            <span className="ml-1 md:ml-0">
                                {tier.price.toLocaleString()}
                            </span>
                        </p>
                    </div>
                )}
            </div>

            {/* Description */}
            <div className="mt-6 rounded-2xl bg-blue-50 p-4">
                {tier.isCurrent && (
                    <p className="mb-2 text-sm font-semibold text-[#2B84E0]">
                        Basic Rights & Benefits
                    </p>
                )}

                <p className="text-sm leading-7 text-slate-700">
                    {tier.description}
                </p>
            </div>

            {/* Join Button */}
            {!tier.isCurrent && (
                <button
                    type="button"
                    onClick={() => onJoin?.(tier.id)}
                    className="
                        mt-6
                        w-full
                        rounded-2xl
                        bg-gradient-to-r
                        from-[#57B4FF]
                        via-[#349FFF]
                        to-[#197FEF]
                        py-3.5
                        text-sm
                        font-semibold
                        text-white
                        shadow-lg
                        shadow-blue-300/30
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-xl
                        active:scale-[0.98]
                    "
                >
                    Upgrade Membership
                </button>
            )}

            {/* Tables */}
            <div className="mt-7 space-y-6">
                <TierQuotaTable quota={tier.orderQuota} />

                {tier.invitationCommissions && (
                    <TierInvitationTable
                        rows={tier.invitationCommissions}
                    />
                )}

                {tier.orderCommissions && (
                    <TierOrderCommissionTable
                        rows={tier.orderCommissions}
                    />
                )}
            </div>
        </div>
    );
}