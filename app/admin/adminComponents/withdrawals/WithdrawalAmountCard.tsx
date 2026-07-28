"use client";

import { Withdrawal } from "@/app/types/adminTypes/withdrawal.types";

interface Props {
    withdrawal: Withdrawal;
}

export default function WithdrawalAmountCard({
    withdrawal,
}: Props) {

    if (!withdrawal.amount) {
        return (
            <section className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">
                    Withdrawal Information
                </h2>

                <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
                    No withdrawal information.
                </div>
            </section>
        );
    }

    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-slate-900">
                    Withdrawal Information
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Withdrawal amount and review
                    details.
                </p>
            </div>

            <div className="space-y-5">
                <InfoRow
                    label="Amount"
                    value={`₦${withdrawal.amount}`}
                />

                <InfoRow
                    label="Admin Remark"
                    value={
                        withdrawal.adminRemark ??
                        "No remark"
                    }
                />

                <InfoRow
                    label="Reviewed At"
                    value={
                        withdrawal.reviewedAt
                            ? new Date(
                                  withdrawal.reviewedAt,
                              ).toLocaleString()
                            : "Not reviewed"
                    }
                />
            </div>
        </section>
    );
}

interface InfoRowProps {
    label: string;
    value: string;
}

function InfoRow({
    label,
    value,
}: InfoRowProps) {
    return (
        <div className="flex items-start justify-between gap-6 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
            <span className="text-sm text-slate-500">
                {label}
            </span>

            <span className="max-w-[60%] break-words text-right text-sm font-medium text-slate-900">
                {value}
            </span>
        </div>
    );
}