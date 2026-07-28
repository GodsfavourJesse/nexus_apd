import TierQuotaTable from "./TierQuotaTable";
import TierInvitationTable from "./TierInvitationTable";
import TierOrderCommissionTable from "./TierOrderCommissionTable";
import { MembershipTier } from "@/app/types/memebership.types";

interface MembershipTierSlideProps {
    tier: MembershipTier;
    onJoin?: (tierId: string) => void;
}

export default function MembershipTierSlide({
    tier,
    onJoin,
}: MembershipTierSlideProps) {
    return (
        <div className="rounded-3xl bg-[#FBF6EC] p-5">
            <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#E8F3FF] px-3 py-1 text-xs font-semibold text-[#2B84E0]">
                    {tier.isCurrent ? "Current Level" : "Locked"}
                </span>

                {!tier.isCurrent && tier.price !== undefined && (
                    <span className="font-serif text-lg font-bold text-slate-900">
                        {tier.currency ?? "NGN"}{" "}
                        {tier.price.toLocaleString()}
                    </span>
                )}
            </div>

            <div className="mt-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">
                    {tier.name}
                </h2>

                {!tier.isCurrent && (
                    <button
                        type="button"
                        onClick={() => onJoin?.(tier.id)}
                        className="
                            rounded-full bg-gradient-to-r
                            from-[#4DA8FE] to-[#2B84E0]
                            px-5 py-2 text-sm font-bold text-white
                            shadow-sm transition hover:brightness-105
                        "
                    >
                        I want to join
                    </button>
                )}
            </div>

            {tier.isCurrent ? (
                <>
                    <p className="mt-3 text-sm font-bold text-[#2B84E0]">
                        1. Basic rights and interests
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">
                        {tier.description}
                    </p>
                </>
            ) : (
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    {tier.description}
                </p>
            )}

            <div className="mt-4">
                <TierQuotaTable quota={tier.orderQuota} />
            </div>

            {tier.invitationCommissions && (
                <TierInvitationTable rows={tier.invitationCommissions} />
            )}

            {tier.orderCommissions && (
                <TierOrderCommissionTable rows={tier.orderCommissions} />
            )}
        </div>
    );
}