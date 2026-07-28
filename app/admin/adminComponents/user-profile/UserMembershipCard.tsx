"use client";

import { Crown } from "lucide-react";

import { Membership } from "@/app/types/adminTypes/user.types";

interface UserMembershipCardProps {
    membership: Membership | null | undefined;
}

function InfoRow({
    label,
    value,
}: {
    label: string;
    value: React.ReactNode;
}) {
    return (
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0">
            <span className="text-sm text-slate-500">
                {label}
            </span>

            <span className="text-right text-sm font-semibold text-slate-900">
                {value}
            </span>
        </div>
    );
}

function formatCurrency(value: string) {
    return `₦${Number(value).toLocaleString()}`;
}

export default function UserMembershipCard({
    membership,
}: UserMembershipCardProps) {

    if (!membership) {
        return (
            <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="mb-3 text-lg font-semibold">
                    Membership
                </h2>

                <p className="text-sm text-slate-500">
                   Internship Member.
                </p>
            </section>
        );
    }

    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                    <Crown size={20} />
                </div>

                <h2 className="text-lg font-bold text-slate-900">
                    Membership
                </h2>
            </div>

            {!membership ? (
                <div className="py-10 text-center text-sm text-slate-500">
                    Internship Member.
                </div>
            ) : (
                <div className="space-y-4 p-5">
                    <InfoRow
                        label="Membership"
                        value={membership.name}
                    />

                    <InfoRow
                        label="Slug"
                        value={membership.slug}
                    />

                    <InfoRow
                        label="Upgrade Price"
                        value={formatCurrency(
                            membership.upgradePrice,
                        )}
                    />

                    <InfoRow
                        label="Internship"
                        value={
                            membership.isInternship
                                ? "Yes"
                                : "No"
                        }
                    />
                </div>
            )}
        </section>
    );
}