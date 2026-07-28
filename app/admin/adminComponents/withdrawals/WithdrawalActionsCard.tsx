"use client";

import { useState } from "react";

import { Withdrawal } from "@/app/types/adminTypes/withdrawal.types";

import { useApproveWithdrawal } from "@/app/hooks/adminHooks/withdrawals/useApproveWithdrawal";
import { useRejectWithdrawal } from "@/app/hooks/adminHooks/withdrawals/useRejectWithdrawal";
import { useMarkPaidWithdrawal } from "@/app/hooks/adminHooks/withdrawals/useMarkPaidWithdrawal";

interface Props {
    withdrawal: Withdrawal;
}

export default function WithdrawalActionsCard({
    withdrawal,
}: Props) {
    const [adminRemark, setAdminRemark] =
        useState("");

    const approveMutation =
        useApproveWithdrawal(
            withdrawal.id,
        );

    const rejectMutation =
        useRejectWithdrawal(
            withdrawal.id,
        );

    const markPaidMutation =
        useMarkPaidWithdrawal(
            withdrawal.id,
        );

    const handleApprove = () => {
        approveMutation.mutate({
            adminRemark:
                adminRemark || undefined,
        });
    };

    const handleReject = () => {
        rejectMutation.mutate({
            adminRemark,
        });
    };

    const handleMarkPaid = () => {
        markPaidMutation.mutate();
    };

    if (
        withdrawal.status !== "PENDING" &&
        withdrawal.status !== "APPROVED"
    ) {
        return null;
    }    

    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-slate-900">
                    Actions
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Manage this withdrawal request.
                </p>
            </div>

            {/* Pending */}
            {withdrawal.status ===
                "PENDING" && (
                <div className="space-y-4">
                    <textarea
                        rows={4}
                        value={
                            adminRemark
                        }
                        onChange={(e) =>
                            setAdminRemark(
                                e.target
                                    .value,
                            )
                        }
                        placeholder="Admin remark..."
                        className="w-full rounded-xl border border-slate-300 p-3 text-sm outline-none focus:border-slate-500"
                    />

                    <button
                        onClick={
                            handleApprove
                        }
                        disabled={
                            approveMutation.isPending ||
                            rejectMutation.isPending
                        }
                        className="w-full rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {approveMutation.isPending
                            ? "Approving..."
                            : "Approve"}
                    </button>

                    <button
                        onClick={
                            handleReject
                        }
                        disabled={
                            approveMutation.isPending ||
                            rejectMutation.isPending
                        }
                        className="w-full rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {rejectMutation.isPending
                            ? "Rejecting..."
                            : "Reject"}
                    </button>
                </div>
            )}

            {/* Approved */}
            {withdrawal.status ===
                "APPROVED" && (
                <button
                    onClick={
                        handleMarkPaid
                    }
                    disabled={
                        markPaidMutation.isPending
                    }
                    className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {markPaidMutation.isPending
                        ? "Marking..."
                        : "Mark Paid"}
                </button>
            )}
        </section>
    );
}