import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import {
    transactionStatusConfig,
    transactionTypeConfig,
} from "@/app/config/transaction.config";

dayjs.extend(relativeTime);

export function getTransactionType(type: string) {

    return (
        transactionTypeConfig[
            type as keyof typeof transactionTypeConfig
        ] ??
        transactionTypeConfig.DEFAULT
    );

}

export function getTransactionStatus(status: string) {

    return (
        transactionStatusConfig[
            status as keyof typeof transactionStatusConfig
        ] ??
        {
            label: status,
            color: "text-slate-700",
            bg: "bg-slate-100",
        }
    );

}

export function formatAmount(amount: string | number) {

    return Number(amount).toLocaleString(
        "en-NG",
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        },
    );

}

export function formatDate(date: string) {

    return dayjs(date).format(
        "DD MMM YYYY • hh:mm A",
    );

}

export function fromNow(date: string) {

    return dayjs(date).fromNow();

}

export function isCredit(type: string) {

    const credits = [

        "ORDER_REWARD",

        "REFERRAL_COMMISSION",

        "UPGRADE_BONUS",

        "DEPOSIT",

        "BONUS",

        "COMMISSION",

        "REFUND",

    ];

    return credits.includes(type);

}

export function amountPrefix(type: string) {

    return isCredit(type)
        ? "+"
        : "-";

}