"use client";

import {
    getTransactionStatus,
} from "@/app/utils/transaction.utils";

interface Props {
    status: string;

    className?: string;
}

export default function TransactionStatusBadge({
    status,
    className = "",
}: Props) {

    const config =
        getTransactionStatus(
            status,
        );

    return (

        <span
            className={`
                inline-flex
                items-center
                rounded-full
                px-3
                py-1
                text-[11px]
                font-semibold
                tracking-wide
                ${config.bg}
                ${config.color}
                ${className}
            `}
        >
            {config.label}
        </span>

    );

}