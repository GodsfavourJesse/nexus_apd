"use client";

import {
    ChevronRight,
    ArrowDownLeft,
    ArrowUpRight,
    Gift,
    Users,
    Crown,
    Wallet,
} from "lucide-react";

import { Transaction } from "@/app/types/clientTypes/transaction.types";

interface Props {
    transaction: Transaction;

    onClick?: (
        transaction: Transaction,
    ) => void;
}

function formatMoney(value: string) {
    return Number(value).toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
    });
}

function icon(type: string) {

    switch (type.toLowerCase()) {

        case "deposit":
            return {
                icon: ArrowDownLeft,
                bg: "bg-emerald-50",
                color: "text-emerald-600",
            };

        case "withdrawal":
            return {
                icon: ArrowUpRight,
                bg: "bg-red-50",
                color: "text-red-600",
            };

        case "reward":
            return {
                icon: Gift,
                bg: "bg-amber-50",
                color: "text-amber-600",
            };

        case "referral_bonus":
            return {
                icon: Users,
                bg: "bg-indigo-50",
                color: "text-indigo-600",
            };

        case "membership":
            return {
                icon: Crown,
                bg: "bg-purple-50",
                color: "text-purple-600",
            };

        default:
            return {
                icon: Wallet,
                bg: "bg-slate-100",
                color: "text-slate-700",
            };

    }

}

export default function TransactionItem({

    transaction,

    onClick,

}: Props) {

    const config =
        icon(transaction.type);

    const Icon =
        config.icon;

    const isDebit =
        transaction.type
            .toLowerCase()
            .includes("withdraw");

    return (

        <button

            onClick={() =>
                onClick?.(transaction)
            }

            className="

                group

                flex

                w-full

                items-center

                justify-between

                rounded-2xl

                border

                border-slate-200

                bg-white

                p-4

                text-left

                transition-all

                active:scale-[0.99]

                hover:border-sky-200

            "

        >

            <div className="flex items-center gap-4">

                <div

                    className={`

                        flex

                        h-12

                        w-12

                        items-center

                        justify-center

                        rounded-2xl

                        ${config.bg}

                    `}

                >

                    <Icon
                        size={22}
                        className={config.color}
                    />

                </div>

                <div>

                    <h3 className="font-semibold text-slate-900">

                        {transaction.type
                            .replaceAll("_", " ")}

                    </h3>

                    <p className="mt-1 text-xs text-slate-500">

                        {transaction.description}

                    </p>

                    <p className="mt-2 text-[11px] text-slate-400">

                        {transaction.reference}

                    </p>

                </div>

            </div>

            <div className="flex items-center gap-3">

                <div className="text-right">

                    <p

                        className={`

                            text-base

                            font-bold

                            ${

                                isDebit

                                    ? "text-red-600"

                                    : "text-emerald-600"

                            }

                        `}

                    >

                        {isDebit ? "-" : "+"}

                        {formatMoney(transaction.amount)}

                    </p>

                    <p className="mt-1 text-xs text-slate-400">

                        {new Date(
                            transaction.createdAt,
                        ).toLocaleDateString()}

                    </p>

                </div>

                <ChevronRight
                    size={18}
                    className="text-slate-300"
                />

            </div>

        </button>

    );

}