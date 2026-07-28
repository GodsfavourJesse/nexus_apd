"use client";

import { Withdrawal } from "@/app/types/adminTypes/withdrawal.types";

interface Props {
    withdrawal: Withdrawal;
}

export default function WithdrawalProfileCard({
    withdrawal,
}: Props) {

    if (!withdrawal.user) {
        return (
            <section className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">
                    User Profile
                </h2>

                <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
                    No user information.
                </div>
            </section>
        );
    }

    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-slate-900">
                    User Profile
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    User information associated with this
                    withdrawal request.
                </p>
            </div>

            <div className="space-y-5">
                <InfoRow
                    label="Email"
                    value={
                        withdrawal.user?.email ??
                        "Not available"
                    }
                />

                <InfoRow
                    label="Phone"
                    value={
                        withdrawal.user?.phone ??
                        "Not available"
                    }
                />

                <InfoRow
                    label="Referral Code"
                    value={
                        withdrawal.user?.referralCode ??
                        "Not available"
                    }
                />

                <InfoRow
                    label="Status"
                    value={formatStatus(withdrawal.status)}
                />

                <InfoRow
                    label="Created"
                    value={new Date(
                        withdrawal.createdAt,
                    ).toLocaleString()}
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

function formatStatus(
    status: string,
) {
    return status
        .toLowerCase()
        .split("_")
        .map(
            (word) =>
                word.charAt(0).toUpperCase() +
                word.slice(1),
        )
        .join(" ");
}