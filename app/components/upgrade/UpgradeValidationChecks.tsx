"use client";

import {
    CheckCircle2,
    Loader2,
    XCircle,
} from "lucide-react";

import { UpgradeCheck } from "@/app/types/clientTypes/upgrade.types";

interface UpgradeValidationChecksProps {
    checks: UpgradeCheck[];
    currentStep: number;
    completedSteps: number[];
}

export default function UpgradeValidationChecks({
    checks,
    currentStep,
    completedSteps,
}: UpgradeValidationChecksProps) {
    return (
        <div className="space-y-3">
            {checks.map((check, index) => {
                const active = currentStep === index;
                const completed =
                    completedSteps.includes(index);

                return (
                    <div
                        key={check.key}
                        className={`
                            relative overflow-hidden
                            rounded-[22px]
                            border
                            p-4
                            backdrop-blur-2xl
                            transition-all
                            duration-500
                            ${
                                completed
                                    ? check.passed
                                        ? "border-emerald-200/70 bg-emerald-50/70"
                                        : "border-red-200/70 bg-red-50/70"
                                    : active
                                      ? "border-blue-200/80 bg-blue-50/60 shadow-sm"
                                      : "border-slate-200/70 bg-white/70"
                            }
                        `}
                    >
                        {active && (
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-white/20" />
                        )}

                        <div className="relative flex items-center gap-3.5">
                            <div
                                className={`
                                    flex h-11 w-11 shrink-0
                                    items-center justify-center
                                    rounded-[16px]
                                    border
                                    bg-white/70
                                    shadow-sm
                                    backdrop-blur-xl
                                    ${
                                        active
                                            ? "border-blue-200 text-[#1592FF]"
                                            : completed
                                              ? check.passed
                                                  ? "border-emerald-200 text-emerald-500"
                                                  : "border-red-200 text-red-500"
                                              : "border-slate-200 text-slate-300"
                                    }
                                `}
                            >
                                {active && !completed ? (
                                    <Loader2
                                        size={19}
                                        className="animate-spin"
                                    />
                                ) : completed ? (
                                    check.passed ? (
                                        <CheckCircle2 size={21} />
                                    ) : (
                                        <XCircle size={21} />
                                    )
                                ) : (
                                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                                )}
                            </div>

                            <div className="min-w-0 flex-1">
                                <h3
                                    className={`
                                        text-[13px]
                                        font-semibold
                                        tracking-[-0.01em]
                                        ${
                                            completed
                                                ? check.passed
                                                    ? "text-emerald-800"
                                                    : "text-red-800"
                                                : "text-slate-900"
                                        }
                                    `}
                                >
                                    {check.title}
                                </h3>

                                <p className="mt-1 text-[11px] leading-[1.45] text-slate-500">
                                    {check.description}
                                </p>
                            </div>

                            {completed && (
                                <div
                                    className={`
                                        hidden shrink-0
                                        rounded-full
                                        px-2 py-1
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        sm:block
                                        ${
                                            check.passed
                                                ? "bg-emerald-100/80 text-emerald-600"
                                                : "bg-red-100/80 text-red-600"
                                        }
                                    `}
                                >
                                    {check.passed
                                        ? "Passed"
                                        : "Failed"}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}