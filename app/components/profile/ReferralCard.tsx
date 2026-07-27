"use client";

import { useState } from "react";
import { Check, Copy, Link2, Users } from "lucide-react";

interface ReferralCardProps {
    referralCode: string;
    referralLink: string;
}

export default function ReferralCard({
    referralCode,
    referralLink,
}: ReferralCardProps) {
    const [copied, setCopied] = useState<"code" | "link" | null>(null);

    async function handleCopy(value: string, kind: "code" | "link") {
        await navigator.clipboard.writeText(value);
        setCopied(kind);
        setTimeout(() => setCopied(null), 1800);
    }

    return (
        <div className="mx-4 mt-4 rounded-3xl bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2">
                <Users size={18} className="text-[#2B84E0]" />
                <h2 className="text-sm font-semibold text-slate-900">
                    Invite & Earn
                </h2>
            </div>

            {/* Referral code */}
            <div className="mt-4">
                <p className="text-xs text-slate-500">Referral Code</p>

                <div className="mt-1.5 flex items-center justify-between rounded-2xl bg-[#E8F3FF] px-4 py-3">
                    <p className="text-lg font-bold tracking-wide text-slate-900">
                        {referralCode}
                    </p>

                    <button
                        type="button"
                        onClick={() => handleCopy(referralCode, "code")}
                        className="
                            flex items-center gap-1.5 rounded-full bg-slate-900
                            px-3.5 py-1.5 text-xs font-semibold text-white
                            transition hover:bg-slate-800
                        "
                    >
                        {copied === "code" ? (
                            <>
                                <Check size={13} />
                                Copied
                            </>
                        ) : (
                            <>
                                <Copy size={13} />
                                Copy
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Referral link */}
            <div className="mt-4">
                <p className="text-xs text-slate-500">Referral Link</p>

                <div className="mt-1.5 flex items-center justify-between gap-3 rounded-2xl bg-[#E8F3FF] px-4 py-3">
                    <div className="flex min-w-0 items-center gap-2">
                        <Link2
                            size={15}
                            className="shrink-0 text-slate-400"
                        />
                        <p className="truncate text-sm text-slate-700">
                            {referralLink}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => handleCopy(referralLink, "link")}
                        className="
                            flex shrink-0 items-center gap-1.5 rounded-full
                            bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white
                            transition hover:bg-slate-800
                        "
                    >
                        {copied === "link" ? (
                            <>
                                <Check size={13} />
                                Copied
                            </>
                        ) : (
                            <>
                                <Copy size={13} />
                                Copy
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}