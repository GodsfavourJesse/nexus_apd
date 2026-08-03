"use client";

import { format } from "date-fns";
import { Copy, Building2, Hash, Calendar } from "lucide-react";
import { useState } from "react";

import { AdminDeposit } from "@/app/types/adminTypes/adminDeposit.types";
import { DepositStatusBadge } from "../DepositStatusBadge";

interface DepositDetailsCardProps {
    deposit: AdminDeposit;
}

export function DepositDetailsCard({ deposit }: DepositDetailsCardProps) {
    const [copied, setCopied] = useState(false);

    function handleCopy() {
        navigator.clipboard.writeText(deposit.reference);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
    }

    const amount = Number(deposit.amount);

    return (
        <div className="rounded-2xl border border-slate-100 bg-white shadow-sm">
            {/* Amount — the primary figure, given the most visual weight */}
            <div className="border-b border-slate-50 p-5 text-center">
                <p className="text-[13px] text-slate-400">Deposit Amount</p>
                <p className="mt-1 text-[34px] font-bold tracking-tight text-slate-900">
                    ₦
                    {amount.toLocaleString("en-NG", {
                        minimumFractionDigits: 2,
                    })}
                </p>

                <div className="mt-2 flex justify-center">
                    <DepositStatusBadge status={deposit.status} />
                </div>
            </div>

            {/* Reference */}
            <div className="flex items-center justify-between border-b border-slate-50 px-4 py-3.5">
                <span className="flex items-center gap-1.5 text-[13px] text-slate-400">
                    <Hash size={13} />
                    Reference
                </span>

                <button
                    type="button"
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[13px] font-medium text-slate-700 active:scale-95 active:bg-slate-100"
                >
                    {deposit.reference}
                    <Copy size={13} className="text-slate-400" />
                </button>
            </div>

            {copied && (
                <p className="border-b border-slate-50 bg-emerald-50 px-4 py-1.5 text-center text-[12px] font-medium text-emerald-600">
                    Reference copied
                </p>
            )}

            {/* Bank details */}
            <div className="flex items-center justify-between border-b border-slate-50 px-4 py-3.5">
                <span className="flex items-center gap-1.5 text-[13px] text-slate-400">
                    <Building2 size={13} />
                    Bank
                </span>
                <span className="text-[13px] font-medium text-slate-700">
                    {deposit.bankName}
                </span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-50 px-4 py-3.5">
                <span className="text-[13px] text-slate-400">
                    Account Name
                </span>
                <span className="text-[13px] font-medium text-slate-700">
                    {deposit.accountName}
                </span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-50 px-4 py-3.5">
                <span className="text-[13px] text-slate-400">
                    Account Number
                </span>
                <span className="text-[13px] font-medium text-slate-700">
                    {deposit.accountNumber}
                </span>
            </div>

            {/* Submitted date */}
            <div className="flex items-center justify-between px-4 py-3.5">
                <span className="flex items-center gap-1.5 text-[13px] text-slate-400">
                    <Calendar size={13} />
                    Submitted
                </span>
                <span className="text-[13px] font-medium text-slate-700">
                    {format(new Date(deposit.createdAt), "MMM d, yyyy · h:mm a")}
                </span>
            </div>

            {deposit.adminRemark && (
                <div className="border-t border-slate-50 bg-slate-50/60 px-4 py-3.5">
                    <p className="text-[12px] font-medium uppercase tracking-wide text-slate-400">
                        Admin Remark
                    </p>
                    <p className="mt-1 text-[13px] leading-5 text-slate-700">
                        {deposit.adminRemark}
                    </p>
                </div>
            )}
        </div>
    );
}