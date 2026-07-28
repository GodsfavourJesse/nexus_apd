"use client";

import { Withdrawal } from "@/app/types/adminTypes/withdrawal.types";

interface Props {
    withdrawal: Withdrawal;
}

export default function WithdrawalBankCard({
    withdrawal,
}: Props) {

    if (
        !withdrawal.bankName &&
        !withdrawal.accountName &&
        !withdrawal.accountNumber
    ) {
        return (
            <section className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">
                    Bank Information
                </h2>

                <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
                    No bank information.
                </div>
            </section>
        );
    }

    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-slate-900">
                    Bank Information
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Destination bank account for this
                    withdrawal.
                </p>
            </div>

            <div className="space-y-5">
                <InfoRow
                    label="Bank"
                    value={
                        withdrawal.bankName ||
                        "Not available"
                    }
                />

                <InfoRow
                    label="Account Name"
                    value={
                        withdrawal.accountName ||
                        "Not available"
                    }
                />

                <InfoRow
                    label="Account Number"
                    value={
                        withdrawal.accountNumber ||
                        "Not available"
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