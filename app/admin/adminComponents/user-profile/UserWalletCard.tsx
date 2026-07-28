"use client";

import { Wallet } from "lucide-react";

import { Wallet as WalletType } from "@/app/types/adminTypes/user.types";

interface UserWalletCardProps {
    wallet: WalletType | null;
}

function formatCurrency(value: string | number | null | undefined) {
    const numeric = Number(value ?? 0);
    const safeValue = Number.isNaN(numeric) ? 0 : numeric;

    return `₦${safeValue.toLocaleString()}`;
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

            <span className="text-sm font-semibold text-slate-900">
                {value}
            </span>
        </div>
    );
}

export default function UserWalletCard({
    wallet,
}: UserWalletCardProps) {

    if (!wallet) {
        return (
            <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="mb-3 text-lg font-semibold">
                    Wallet
                </h2>

                <p className="text-sm text-slate-500">
                    No wallet available.
                </p>
            </section>
        );
    }

    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                    <Wallet size={20} />
                </div>

                <h2 className="text-lg font-bold text-slate-900">
                    Wallet
                </h2>
            </div>

            <div className="space-y-4 p-5">
                <InfoRow
                    label="Balance"
                    value={formatCurrency(wallet.balance)}
                />

                <InfoRow
                    label="Total Earnings"
                    value={formatCurrency(wallet.totalEarnings)}
                />

                <InfoRow
                    label="Withdrawn"
                    value={formatCurrency(wallet.totalWithdrawn)}
                />

                <InfoRow
                    label="Created"
                    value={
                        wallet.createdAt
                            ? new Date(wallet.createdAt).toLocaleDateString()
                            : "—"
                    }
                />
            </div>
        </section>
    );
}