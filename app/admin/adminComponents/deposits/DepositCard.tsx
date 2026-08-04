"use client";

import { useState } from "react";
import { format } from "date-fns";
import {
    Building2,
    ChevronRight,
    Copy,
} from "lucide-react";

import { AdminDeposit } from "@/app/types/adminTypes/adminDeposit.types";

import { DepositReceiptPreview } from "./DepositReceiptPreview";
import { DepositStatusBadge } from "./DepositStatusBadge";
import DepositActions from "./DepositActions";

interface DepositCardProps {
    deposit: AdminDeposit;
    onOpen?: (deposit: AdminDeposit) => void;
}

export function DepositCard({
    deposit,
    onOpen,
}: DepositCardProps) {

    const [copied, setCopied] =
        useState(false);

    const amount =
        Number(deposit.amount);

    const handleCopy = async (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {

        event.preventDefault();
        event.stopPropagation();

        try {

            await navigator.clipboard.writeText(
                deposit.reference,
            );

            setCopied(true);

            setTimeout(
                () => setCopied(false),
                1500,
            );

        } catch {

            console.error(
                "Unable to copy reference.",
            );

        }

    };

    return (

        <div
            role="button"
            tabIndex={0}
            onClick={() => onOpen?.(deposit)}
            onKeyDown={(e) => {

                if (
                    e.key === "Enter" ||
                    e.key === " "
                ) {
                    onOpen?.(deposit);
                }

            }}
            className="
                group
                w-full
                cursor-pointer
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-blue-200
                hover:shadow-md
                active:scale-[0.99]
            "
        >

            <div className="flex items-start gap-4">

                {/* Receipt */}

                <div
                    onClick={(event) => {

                        event.preventDefault();
                        event.stopPropagation();

                    }}
                    className="shrink-0"
                >

                    <DepositReceiptPreview
                        receipt={deposit.paymentReceipt}
                    />

                </div>

                {/* Content */}

                <div className="min-w-0 flex-1">

                    {/* Header */}

                    <div className="flex items-start justify-between gap-3">

                        <div className="min-w-0">

                            <div className="flex items-center gap-2">

                                <h3
                                    className="
                                        truncate
                                        text-sm
                                        font-semibold
                                        text-slate-900
                                    "
                                >
                                    {deposit.reference}
                                </h3>

                                <button
                                    type="button"
                                    onClick={handleCopy}
                                    className="
                                        flex
                                        h-7
                                        w-7
                                        items-center
                                        justify-center
                                        rounded-md
                                        text-slate-400
                                        transition
                                        hover:bg-slate-100
                                        hover:text-slate-700
                                        active:scale-95
                                    "
                                >
                                    <Copy size={14} />
                                </button>

                                {copied && (

                                    <span
                                        className="
                                            text-xs
                                            font-medium
                                            text-emerald-600
                                        "
                                    >
                                        Copied
                                    </span>

                                )}

                            </div>

                            <p
                                className="
                                    mt-1
                                    truncate
                                    text-xs
                                    text-slate-500
                                "
                            >
                                {deposit.user.email ??
                                    "No Email"}

                                {" • "}

                                {deposit.user.phone}
                            </p>

                        </div>

                        <div className="flex items-center gap-2">

                            <DepositStatusBadge
                                status={deposit.status}
                            />

                            <div
                                onClick={(event) => {

                                    event.preventDefault();
                                    event.stopPropagation();

                                }}
                            >

                                <DepositActions
                                    deposit={deposit}
                                    hideView
                                />

                            </div>

                        </div>

                    </div>

                    {/* Amount */}

                    <div className="mt-4 flex items-center justify-between">

                        <div>

                            <p
                                className="
                                    text-2xl
                                    font-bold
                                    tracking-tight
                                    text-slate-900
                                "
                            >
                                ₦
                                {amount.toLocaleString(
                                    "en-NG",
                                    {
                                        minimumFractionDigits: 2,
                                    },
                                )}
                            </p>

                            <div
                                className="
                                    mt-1
                                    flex
                                    items-center
                                    gap-1
                                    text-xs
                                    text-slate-500
                                "
                            >

                                <Building2
                                    size={13}
                                />

                                <span>
                                    {deposit.bankName}
                                </span>

                            </div>

                        </div>

                        <ChevronRight
                            size={18}
                            className="
                                shrink-0
                                text-slate-300
                                transition-transform
                                duration-200
                                group-hover:translate-x-1
                            "
                        />

                    </div>

                    {/* Footer */}

                    <div
                        className="
                            mt-4
                            flex
                            items-center
                            justify-between
                            border-t
                            border-slate-100
                            pt-3
                        "
                    >

                        <span
                            className="
                                text-xs
                                text-slate-400
                            "
                        >
                            {format(
                                new Date(
                                    deposit.createdAt,
                                ),
                                "MMM d, yyyy • h:mm a",
                            )}
                        </span>

                        {deposit.user.membership && (

                            <span
                                className="
                                    rounded-full
                                    bg-slate-100
                                    px-3
                                    py-1
                                    text-[11px]
                                    font-medium
                                    text-slate-600
                                "
                            >
                                {
                                    deposit.user
                                        .membership
                                        .name
                                }
                            </span>

                        )}

                    </div>

                </div>

            </div>

        </div>

    );

}