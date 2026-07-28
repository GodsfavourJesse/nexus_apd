"use client";

import { UpgradeRequest } from "@/app/types/adminTypes/upgrade-request.types";

interface Props {
    request: UpgradeRequest;
}

export default function UpgradeProfileCard({
    request,
}: Props) {
    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-slate-900">
                    User Profile
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    User information associated with this
                    upgrade request.
                </p>
            </div>

            <div className="space-y-5">

                <InfoRow
                    label="Email"
                    value={
                        request.user?.email ??
                        "Not available"
                    }
                />

                <InfoRow
                    label="Phone"
                    value={
                        request.user?.phone ??
                        "Not available"
                    }
                />

                <InfoRow
                    label="Referral Code"
                    value={
                        request.user?.referralCode ??
                        "Not available"
                    }
                />

                <InfoRow
                    label="Status"
                    value={formatStatus(
                        request.status,
                    )}
                />

                <InfoRow
                    label="Created"
                    value={new Date(
                        request.createdAt,
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

            <span className="max-w-[60%] text-right text-sm font-medium text-slate-900 break-words">
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