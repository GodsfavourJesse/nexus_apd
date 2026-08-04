"use client";

import {
    ArrowDownLeft,
    ArrowUpRight,
    Gift,
    Users,
    Crown,
    Wallet,
    Copy,
} from "lucide-react";

import { Transaction } from "@/app/types/clientTypes/transaction.types";


interface Props {

    transaction: Transaction;

}


function formatMoney(value: string) {

    return Number(value).toLocaleString(
        "en-NG",
        {
            style: "currency",
            currency: "NGN",
        },
    );

}


function getIcon(type: string) {

    switch(type.toLowerCase()) {

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



export default function TransactionDetails({
    transaction,
}: Props) {


    const config =
        getIcon(transaction.type);


    const Icon =
        config.icon;


    const isDebit =
        transaction.type
            .toLowerCase()
            .includes("withdraw");



    return (

        <div className="space-y-5">


            {/* Amount Card */}

            <div
                className="
                    rounded-3xl
                    bg-white
                    border
                    border-slate-200
                    p-6
                    text-center
                "
            >

                <div
                    className={`
                        mx-auto
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        ${config.bg}
                    `}
                >

                    <Icon
                        size={32}
                        className={config.color}
                    />

                </div>


                <p className="mt-5 text-sm text-slate-500">
                    {transaction.type.replaceAll("_"," ")}
                </p>


                <h1
                    className={`
                        mt-2
                        text-3xl
                        font-bold
                        ${
                            isDebit
                            ? "text-red-600"
                            : "text-emerald-600"
                        }
                    `}
                >

                    {isDebit ? "-" : "+"}

                    {formatMoney(
                        transaction.amount,
                    )}

                </h1>


            </div>



            {/* Details */}

            <div
                className="
                    rounded-3xl
                    bg-white
                    border
                    border-slate-200
                    p-5
                    space-y-4
                "
            >

                <Detail
                    label="Reference"
                    value={transaction.reference}
                />


                <Detail
                    label="Status"
                    value={transaction.status}
                />


                <Detail
                    label="Balance Before"
                    value={formatMoney(
                        transaction.balanceBefore,
                    )}
                />


                <Detail
                    label="Balance After"
                    value={formatMoney(
                        transaction.balanceAfter,
                    )}
                />


                <Detail
                    label="Date"
                    value={
                        new Date(
                            transaction.createdAt,
                        ).toLocaleString()
                    }
                />


                {
                    transaction.description && (

                        <Detail
                            label="Description"
                            value={
                                transaction.description
                            }
                        />

                    )
                }


            </div>



        </div>

    );

}



function Detail({
    label,
    value,
}: {
    label:string;
    value:string;
}) {

    return (

        <div
            className="
                flex
                justify-between
                gap-5
                text-sm
            "
        >

            <span className="text-slate-500">
                {label}
            </span>


            <span
                className="
                    text-right
                    font-medium
                    text-slate-900
                "
            >
                {value}
            </span>


        </div>

    );

}