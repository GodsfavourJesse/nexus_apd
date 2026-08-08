"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";

interface UpgradeActionCardProps {
    onUpgrade: () => void;
    disabled?: boolean;
    loading?: boolean;
}

export default function UpgradeActionCard({
    onUpgrade,
    disabled = false,
    loading = false,
}: UpgradeActionCardProps) {

    return (
        <section
            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
            "
        >
            {/* Header */}

            <div className="flex items-start gap-3">

                <div
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-50
                    "
                >
                    <ShieldCheck
                        size={18}
                        className="text-[#1592FF]"
                    />
                </div>

                <div className="flex-1">

                    <h2 className="text-[15px] font-semibold text-slate-900">
                        Confirm Upgrade
                    </h2>

                    <p
                        className="
                            mt-1
                            text-[12px]
                            leading-5
                            text-slate-500
                        "
                    >
                        Your request will be submitted for review. Once
                        approved, your membership benefits will be activated
                        automatically.
                    </p>

                </div>

            </div>

            {/* Divider */}

            <div className="my-5 h-px bg-slate-100" />

            {/* Note */}

            <p
                className="
                    text-[11px]
                    leading-5
                    text-slate-500
                "
            >
                Your membership fee will be deducted from your wallet balance
                after you continue.
            </p>

            {/* Button */}

            <button
                type="button"
                disabled={disabled || loading}
                onClick={onUpgrade}
                className="
                    mt-5
                    flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-[#1592FF]
                    text-[14px]
                    font-semibold
                    text-white
                    transition
                    active:scale-[0.98]
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                "
            >
                {loading ? (
                    <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Processing...
                    </>
                ) : (
                    <>
                        Continue Upgrade
                        <ArrowRight size={16} />
                    </>
                )}
            </button>
        </section>
    );
}