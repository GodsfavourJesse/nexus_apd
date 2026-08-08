"use client";

import {
    CheckCircle2,
    AlertCircle,
    XCircle,
} from "lucide-react";

import {
    FailedUpgradeCheck,
} from "@/app/types/clientTypes/upgrade.types";

interface UpgradeValidationResultProps {
    canUpgrade: boolean;
    failedChecks: FailedUpgradeCheck[];
}

export default function UpgradeValidationResult({
    canUpgrade,
    failedChecks,
}: UpgradeValidationResultProps) {
    if (!canUpgrade && failedChecks.length > 0) {
        return (
            <div className="overflow-hidden rounded-[26px] border border-red-200/60 bg-red-50/70 p-5 shadow-sm backdrop-blur-xl">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-100/80">
                        <XCircle
                            size={22}
                            className="text-red-500"
                        />
                    </div>

                    <div className="min-w-0">
                        <h3 className="text-[15px] font-semibold text-red-900">
                            Upgrade Unavailable
                        </h3>

                        <p className="mt-0.5 text-xs text-red-600/80">
                            Please resolve the following
                            requirement
                            {failedChecks.length > 1
                                ? "s"
                                : ""}
                            .
                        </p>
                    </div>
                </div>

                <div className="mt-4 space-y-2.5">
                    {failedChecks.map((failure) => (
                        <div
                            key={failure.key}
                            className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/70 px-3.5 py-3 shadow-sm backdrop-blur-md"
                        >
                            <AlertCircle
                                size={16}
                                className="mt-0.5 shrink-0 text-red-400"
                            />

                            <p className="text-[13px] leading-5 text-slate-700">
                                {failure.message}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (canUpgrade) {
        return (
            <div className="relative overflow-hidden rounded-[28px] border border-emerald-200/60 bg-emerald-50/70 p-6 text-center shadow-sm backdrop-blur-xl">
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-300/20 blur-3xl" />

                <div className="relative mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-[24px] bg-emerald-500 shadow-lg shadow-emerald-500/20">
                    <CheckCircle2
                        size={36}
                        strokeWidth={2.2}
                        className="text-white"
                    />
                </div>

                <div className="relative">
                    <h3 className="mt-5 text-[19px] font-bold tracking-tight text-slate-900">
                        You're Eligible
                    </h3>

                    <p className="mx-auto mt-2 max-w-[280px] text-[13px] leading-5 text-slate-500">
                        Everything looks good. Your
                        membership upgrade can now
                        be submitted for review.
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/70 px-3.5 py-2 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                        <span className="text-[11px] font-semibold text-emerald-700">
                            Verification complete
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}