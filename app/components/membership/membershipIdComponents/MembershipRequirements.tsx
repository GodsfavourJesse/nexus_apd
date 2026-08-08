"use client";

import {
    CreditCard,
    ShieldCheck,
    Wallet,
    ChevronRight,
} from "lucide-react";

import { MembershipTier } from "@/app/types/clientTypes/membership.types";

interface MembershipRequirementsProps {
    tier: MembershipTier;
}

export default function MembershipRequirements({
    tier,
}: MembershipRequirementsProps) {
    return (
        <section
            className="
                overflow-hidden
                rounded-[24px]
                border
                border-slate-200
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05)]
            "
        >
            {/* Header */}

            <div className="border-b border-slate-100 p-5">

                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5">
                    <ShieldCheck
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
                        Requirements
                    </span>
                </div>

                <h2 className="mt-4 text-lg font-bold text-slate-900">
                    Upgrade Requirements
                </h2>

                <p className="mt-2 text-[13px] leading-6 text-slate-500">
                    Review the requirements below before continuing with your
                    membership upgrade.
                </p>

            </div>

            {/* Items */}

            <div className="divide-y divide-slate-100">

                {/* Upgrade Fee */}

                <div className="flex items-center justify-between px-5 py-4">

                    <div className="flex items-center gap-3">

                        <div
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                bg-blue-50
                            "
                        >
                            <Wallet
                                size={18}
                                className="text-[#1592FF]"
                            />
                        </div>

                        <div>

                            <p className="text-sm font-semibold text-slate-900">
                                Upgrade Fee
                            </p>

                            <p className="text-xs text-slate-500">
                                Wallet payment required
                            </p>

                        </div>

                    </div>

                    <p className="text-sm font-bold text-[#1592FF]">
                        ₦{tier.upgradePrice?.toLocaleString() ?? "Free"}
                    </p>

                </div>

                {/* Payment Method */}

                <div className="flex items-center justify-between px-5 py-4">

                    <div className="flex items-center gap-3">

                        <div
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                bg-blue-50
                            "
                        >
                            <CreditCard
                                size={18}
                                className="text-[#1592FF]"
                            />
                        </div>

                        <div>

                            <p className="text-sm font-semibold text-slate-900">
                                Payment Method
                            </p>

                            <p className="text-xs text-slate-500">
                                Available payment option
                            </p>

                        </div>

                    </div>

                    <div className="flex items-center gap-2">

                        <span className="text-sm font-medium text-slate-700">
                            Wallet
                        </span>

                        <ChevronRight
                            size={16}
                            className="text-slate-300"
                        />

                    </div>

                </div>

                {/* Approval */}

                <div className="flex items-center justify-between px-5 py-4">

                    <div className="flex items-center gap-3">

                        <div
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                bg-green-50
                            "
                        >
                            <ShieldCheck
                                size={18}
                                className="text-green-600"
                            />
                        </div>

                        <div>

                            <p className="text-sm font-semibold text-slate-900">
                                Approval
                            </p>

                            <p className="text-xs text-slate-500">
                                Admin verification required
                            </p>

                        </div>

                    </div>

                    <span
                        className="
                            rounded-full
                            bg-green-100
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            text-green-700
                        "
                    >
                        Required
                    </span>

                </div>

            </div>
        </section>
    );
}