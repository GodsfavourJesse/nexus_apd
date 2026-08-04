"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import TransactionHeader from "@/app/components/transactions/TransactionHeader";
import TransactionSummaryCard from "@/app/components/transactions/TransactionSummaryCard";
import TransactionSearch from "@/app/components/transactions/TransactionSearch";
import TransactionList from "@/app/components/transactions/TransactionList";
import TransactionFilter from "@/app/components/transactions/TransactionFIlter";
import { useTransactions } from "@/app/hooks/clientHooks/transactionHooks/useTransactions";

export default function TransactionsPage() {

    const router = useRouter();

    const {
        transactions,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = useTransactions();

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const filteredTransactions =
        useMemo(() => {
            let items = [...transactions];

            // Search
            if (search.trim()) {
                const keyword = search.toLowerCase();

                items = items.filter(
                    (transaction) =>
                        transaction.reference
                            .toLowerCase()
                            .includes(keyword)

                        ||

                        transaction.type
                            .toLowerCase()
                            .includes(keyword)

                        ||

                        (
                            transaction.description ?? ""
                        )
                        .toLowerCase()
                        .includes(keyword),
                );

            }

            // Filter
            if (filter !== "All") {
                const filterMap: Record<string, string[]> = {

                    Deposits: [
                        "deposit",
                    ],

                    Withdrawals: [
                        "withdraw",
                    ],

                    Rewards: [
                        "reward",
                        "bonus",
                    ],

                    Referral: [
                        "referral",
                    ],

                    Membership: [
                        "membership",
                        "upgrade",
                    ],

                };

                const keywords = filterMap[filter];

                items = items.filter(
                    (transaction) => {
                        const type = transaction.type.toLowerCase();

                        return keywords.some(
                            keyword => type.includes(keyword),
                        );

                    },
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

            .filter(
                (transaction) =>

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

            .filter(
                (transaction) =>

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



                {
                    hasNextPage && (

                        <button

                            onClick={() =>
                                fetchNextPage()
                            }

                            disabled={
                                isFetchingNextPage
                            }

                            className="
                                mx-auto
                                block
                                rounded-2xl
                                bg-sky-600
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                transition
                                hover:bg-sky-700
                                disabled:cursor-not-allowed
                                disabled:opacity-50
                            "

                        >

                            {
                                isFetchingNextPage

                                    ? "Loading..."

                                    : "Load More Transactions"
                            }

                        </button>

                    )
                }



            </div>


        </main>

    );

}