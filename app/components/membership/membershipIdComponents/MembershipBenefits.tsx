"use client";

import { Sparkles } from "lucide-react";

import { MembershipTier } from "@/app/types/clientTypes/membership.types";

import TierQuotaTable from "../TierQuotaTable";
import TierInvitationTable from "../TierInvitationTable";
import TierOrderCommissionTable from "../TierOrderCommissionTable";

interface MembershipBenefitsProps {
    tier: MembershipTier;
}

export default function MembershipBenefits({
    tier,
}: MembershipBenefitsProps) {
    return (
        <section className="space-y-4">

            {/* Header */}

            <div
                className="
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-slate-200
                    bg-white
                    shadow-[0_8px_24px_rgba(15,23,42,0.05)]
                "
            >
                <div className="p-5">

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            bg-blue-50
                            px-3
                            py-1.5
                        "
                    >
                        <Sparkles
                            size={14}
                            className="text-[#1592FF]"
                        />

                        <span
                            className="
                                text-[11px]
                                font-semibold
                                uppercase
                                tracking-[0.15em]
                                text-[#1592FF]
                            "
                        >
                            Benefits
                        </span>
                    </div>

                    <h2 className="mt-4 text-lg font-bold text-slate-900">
                        Membership Benefits
                    </h2>

                    <p className="mt-2 text-[13px] leading-6 text-slate-500">
                        Upgrade your membership to unlock more daily orders,
                        higher commissions, and increased referral rewards.
                    </p>

                </div>
            </div>

            {/* Benefits */}

            <TierQuotaTable
                tasksPerDay={tier.tasksPerDay}
                dailyRewardLimit={Number(
                    tier.dailyRewardLimit,
                )}
            />

            <TierInvitationTable
                level1={tier.invitationCommissionLevel1}
                level2={tier.invitationCommissionLevel2}
                level3={tier.invitationCommissionLevel3}
            />

            <TierOrderCommissionTable
                level1={tier.orderCommissionLevel1}
                level2={tier.orderCommissionLevel2}
                level3={tier.orderCommissionLevel3}
            />
        </section>
    );
}