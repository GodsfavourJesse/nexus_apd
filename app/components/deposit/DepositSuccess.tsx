"use client";

import Link from "next/link";
import {
    CheckCircle2,
    ArrowLeft,
    ReceiptText,
} from "lucide-react";

import { Deposit } from "@/app/types/clientTypes/deposit.types";
import DepositStatusBadge from "./DepositStatusBadge";

interface DepositSuccessProps {
    deposit: Deposit;
}

export default function DepositSuccess({
    deposit,
}: DepositSuccessProps) {
    return (
        <div className="mx-auto max-w-2xl">
            <div className="overflow-hidden rounded-3xl border border-emerald-200 bg-white shadow-sm">

                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-10 text-center text-white">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                        <CheckCircle2 size={44} />
                    </div>

                    <h1 className="mt-5 text-3xl font-bold">
                        Deposit Submitted
                    </h1>

                    <p className="mt-2 text-sm text-emerald-100">
                        Your deposit request has been received successfully.
                    </p>
                </div>

                <div className="space-y-6 p-6 sm:p-8">

                    <div className="rounded-2xl border border-slate-200 bg-slate-50">

                        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                            <span className="text-sm text-slate-500">
                                Reference
                            </span>

                            <span className="font-semibold text-slate-900">
                                {deposit.reference}
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                            <span className="text-sm text-slate-500">
                                Amount
                            </span>

                            <span className="text-lg font-bold text-emerald-600">
                                ₦
                                {Number(
                                    deposit.amount,
                                ).toLocaleString()}
                            </span>
                        </div>

                        <div className="flex items-center justify-between px-5 py-4">
                            <span className="text-sm text-slate-500">
                                Status
                            </span>

                            <DepositStatusBadge
                                status={deposit.status}
                            />
                        </div>

                    </div>

                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                        <div className="flex items-start gap-3">
                            <ReceiptText
                                size={20}
                                className="mt-0.5 text-blue-600"
                            />

                            <div>
                                <h3 className="font-semibold text-slate-900">
                                    What happens next?
                                </h3>

                                <p className="mt-2 text-sm leading-7 text-slate-600">
                                    Our finance team will verify your payment receipt. Once approved, your wallet will be credited automatically and you will receive a notification.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/dashboard/wallet/deposits"
                            className="flex-1 rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
                        >
                            View Deposits
                        </Link>

                        <Link
                            href="/dashboard/wallet"
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                        >
                            <ArrowLeft size={18} />
                            Back to Wallet
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}