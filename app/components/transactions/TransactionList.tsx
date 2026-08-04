"use client";

import { Transaction } from "@/app/types/clientTypes/transaction.types";
import TransactionLoading from "./TransactionLoading";
import TransactionPageEmpty from "./TransactionPageEmpty";
import TransactionItem from "./TRansactionItem";

interface Props {
    transactions?: Transaction[];

    isLoading?: boolean;

    onSelect?: (
        transaction: Transaction,
    ) => void;
}

export default function TransactionList({

    transactions = [],

    isLoading = false,

    onSelect,

}: Props) {

    if (isLoading) {
        return <TransactionLoading />;
    }

    if (!transactions.length) {
        return <TransactionPageEmpty />;
    }

    return (

        <div className="space-y-3">

            {transactions.map((transaction) => (

                <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                    onClick={onSelect}
                />

            ))}

        </div>

    );

}