"use client";

import { LucideIcon } from "lucide-react";

import {
    getTransactionType,
} from "@/app/utils/transaction.utils";

interface Props {
    type: string;

    size?: number;

    className?: string;
}

export default function TransactionTypeIcon({
    type,
    size = 22,
    className = "",
}: Props) {

    const config =
        getTransactionType(type);

    const Icon =
        config.icon as LucideIcon;

    return (

        <div
            className={`
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                ${config.bg}
                ${className}
            `}
        >

            <Icon
                size={size}
                className={config.color}
                strokeWidth={2.2}
            />

        </div>

    );

}