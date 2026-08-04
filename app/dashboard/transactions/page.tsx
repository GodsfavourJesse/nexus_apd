"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import TransactionHeader from "@/app/components/transactions/TransactionHeader";
import TransactionSummaryCard from "@/app/components/transactions/TransactionSummaryCard";
import TransactionSearch from "@/app/components/transactions/TransactionSearch";
import TransactionList from "@/app/components/transactions/TransactionList";

import { useTransactions } from "@/app/hooks/clientHooks/transactionHooks/useTransactions";
import TransactionFilter from "@/app/components/transactions/TransactionFIlter";

export default function TransactionsPage() {

    const router = useRouter();

    const {

        data: transactions = [],

        isLoading,

    } = useTransactions();

    const [search, setSearch] =
        useState("");

    const [filter, setFilter] =
        useState("All");

    const filteredTransactions =
        useMemo(() => {

            let items = [...transactions];

            // Search
            if (search.trim()) {

                const keyword =
                    search.toLowerCase();

                items =
                    items.filter((transaction) =>

                        transaction.reference
                            .toLowerCase()
                            .includes(keyword)

                        ||

                        transaction.type
                            .toLowerCase()
                            .includes(keyword)

                        ||

                        (transaction.description ?? "")
                            .toLowerCase()
                            .includes(keyword)

                    );

            }

            // Filter

            if (filter !== "All") {

                items =
                    items.filter((transaction) =>
                        transaction.type
                            .toLowerCase()
                            .includes(
                                filter.toLowerCase(),
                            ),
                    );

            }

            // Newest First

            items.sort(

                (a, b) =>

                    new Date(
                        b.createdAt,
                    ).getTime()

                    -

                    new Date(
                        a.createdAt,
                    ).getTime(),

            );

            return items;

        }, [

            transactions,

            search,

            filter,

        ]);

    const totalCredits =
        filteredTransactions

            .filter((transaction) =>

                !transaction.type
                    .toLowerCase()
                    .includes("withdraw"),

            )

            .reduce(

                (sum, transaction) =>

                    sum +

                    Number(
                        transaction.amount,
                    ),

                0,

            );

    const totalDebits =
        filteredTransactions

            .filter((transaction) =>

                transaction.type
                    .toLowerCase()
                    .includes("withdraw"),

            )

            .reduce(

                (sum, transaction) =>

                    sum +

                    Number(
                        transaction.amount,
                    ),

                0,

            );

    return (

        <main className="min-h-screen bg-slate-50">

            <TransactionHeader />

            <div className="space-y-5 px-4 pb-28 pt-5">

                <TransactionSummaryCard

                    totalTransactions={
                        filteredTransactions.length
                    }

                    totalCredits={
                        totalCredits
                    }

                    totalDebits={
                        totalDebits
                    }

                />

                <TransactionSearch

                    value={search}

                    onChange={setSearch}

                />

                <TransactionFilter

                    value={filter}

                    onChange={setFilter}

                />

                <TransactionList

                    transactions={
                        filteredTransactions
                    }

                    isLoading={
                        isLoading
                    }

                    onSelect={(transaction) =>

                        router.push(
                            `/dashboard/transactions/${transaction.id}`,
                        )

                    }

                />

            </div>

        </main>

    );

}