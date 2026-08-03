"use client";

import Image from "next/image";
import {
    X,
    CalendarDays,
    Receipt,
    MessageSquare,
    Wallet,
    Clock3,
    Loader2,
    AlertCircle,
} from "lucide-react";

import { Deposit } from "@/app/types/clientTypes/deposit.types";
import DepositStatusBadge from "./DepositStatusBadge";
import { useCancelDeposit } from "@/app/hooks/clientHooks/depositHooks/useCancelDeposit";
import { useState } from "react";
import ConfirmationDialog from "../common/ConfirmationDialog";

interface DepositDetailsDialogProps {
    open: boolean;
    deposit: Deposit | null;
    onClose: () => void;
}

export default function DepositDetailsDialog({
    open,
    deposit,
    onClose,
}: DepositDetailsDialogProps) {
    const cancelDeposit = useCancelDeposit();

    if (!open || !deposit) return null;

    const canCancel = deposit.status === "pending";

    const [showCancelDialog, setShowCancelDialog] = useState(false);

    function handleCancelDeposit() {
        if (!deposit) {
            return;
        }
        cancelDeposit.mutate(deposit.id, {
            onSuccess: () => {
                setShowCancelDialog(false);
                onClose();
            },
        });
    }
        

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="max-h-[95vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">

                {/* Header */}

                <div className="sticky top-0 flex items-center justify-between border-b bg-white p-6">
                    <div>
                        <h2 className="text-xl font-bold">
                            Deposit Details
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            View the complete deposit information.
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="rounded-xl p-2 hover:bg-slate-100"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="space-y-8 p-6">

                    {/* Status */}

                    <div className="flex justify-center">
                        <DepositStatusBadge
                            status={deposit.status}
                        />
                    </div>

                    {/* Receipt */}

                    <section>
                        <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                            <Receipt size={18} />
                            Payment Receipt
                        </h3>

                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                            {deposit.paymentReceipt ? (
                                <Image
                                    src={deposit.paymentReceipt}
                                    alt="Payment Receipt"
                                    width={900}
                                    height={700}
                                    className="h-auto w-full object-cover"
                                />
                            ) : (
                                <div className="flex h-60 flex-col items-center justify-center gap-3 text-slate-500">
                                    <Receipt size={42} />
                                    <p className="text-sm font-medium">
                                        No payment receipt available.
                                    </p>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Deposit Information */}

                    <section className="grid gap-4 sm:grid-cols-2">

                        <InfoCard
                            icon={<Wallet size={18} />}
                            label="Amount"
                            value={`₦${Number(
                                deposit.amount,
                            ).toLocaleString()}`}
                        />

                        <InfoCard
                            icon={<Receipt size={18} />}
                            label="Reference"
                            value={deposit.reference}
                        />

                        <InfoCard
                            icon={<CalendarDays size={18} />}
                            label="Created"
                            value={new Date(
                                deposit.createdAt,
                            ).toLocaleString()}
                        />

                        <InfoCard
                            icon={<Clock3 size={18} />}
                            label="Sender Bank"
                            value={deposit.senderBankName}
                        />

                        <InfoCard
                            label="Sender Name"
                            value={deposit.senderAccountName}
                        />

                        <InfoCard
                            label="Sender Account"
                            value={deposit.senderAccountNumber}
                        />
                    </section>

                    {/* Admin Remark */}

                    {deposit.adminRemark && (
                        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5">

                            <div className="mb-3 flex items-center gap-2 font-semibold text-amber-700">
                                <MessageSquare size={18} />
                                Admin Remark
                            </div>

                            <p className="leading-7 text-amber-900">
                                {deposit.adminRemark}
                            </p>

                        </section>
                    )}

                    {/* Timeline */}

                    <section className="rounded-2xl border bg-slate-50 p-5">

                        <div className="mb-4 flex items-center gap-2 font-semibold">
                            <Clock3 size={18} />
                            Timeline
                        </div>

                        <div className="space-y-4">

                            <TimelineItem
                                title="Deposit Submitted"
                                date={deposit.createdAt}
                            />

                            {deposit.reviewedAt && (
                                <TimelineItem
                                    title="Reviewed by Admin"
                                    date={deposit.reviewedAt}
                                />
                            )}

                        </div>

                    </section>

                    {/* Cancel */}

                    {canCancel && (
                        <button
                            disabled={
                                cancelDeposit.isPending
                            }
                            onClick={() => setShowCancelDialog(true)}
                            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-red-600 font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
                        >
                            {cancelDeposit.isPending && (
                                <Loader2 className="animate-spin" size={18} />
                            )}

                            Cancel Deposit
                        </button>
                    )}

                    <ConfirmationDialog
                        open={showCancelDialog}
                        title="Cancel Deposit?"
                        description="Are you sure you want to cancel this deposit request? This action cannot be undone."
                        confirmText="Yes, Cancel Deposit"
                        cancelText="Keep Deposit"
                        danger
                        loading={cancelDeposit.isPending}
                        onCancel={() => setShowCancelDialog(false)}
                        onConfirm={handleCancelDeposit}
                    />

                </div>
            </div>
        </div>
    );
}

function InfoCard({
    icon,
    label,
    value,
}: {
    icon?: React.ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-2xl border bg-white p-4">
            <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                {icon}
                {label}
            </div>

            <p className="break-all font-semibold text-slate-900">
                {value}
            </p>
        </div>
    );
}

function TimelineItem({
    title,
    date,
}: {
    title: string;
    date: string;
}) {
    return (
        <div className="flex gap-4">

            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <AlertCircle size={16} />
            </div>

            <div>
                <p className="font-semibold">
                    {title}
                </p>

                <p className="text-sm text-slate-500">
                    {new Date(date).toLocaleString()}
                </p>
            </div>

        </div>
    );
}