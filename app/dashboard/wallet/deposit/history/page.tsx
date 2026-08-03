"use client";

import { useMemo, useState } from "react";

import { useMyDeposits } from "@/app/hooks/clientHooks/depositHooks/useMyDeposits";
import { Deposit, DepositStatus } from "@/app/types/clientTypes/deposit.types";
import DepositHistoryFilters from "@/app/components/deposit/DepositHistoryFilters";
import DepositHistoryTable from "@/app/components/deposit/DepositHistoryTable";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2 } from "lucide-react";


type Filter = "all" | DepositStatus;

export default function DepositHistoryPage() {
    const { data, isPending } = useMyDeposits();
    const router = useRouter();
    const deposits: Deposit[] = data ?? [];
    const [search, setSearch] = useState("");
    const [goingBack, setGoingBack] = useState(false);
    const [filter, setFilter] = useState<Filter>("all");

    const filteredDeposits = useMemo(() => {
        let result = deposits;

        if (filter !== "all") {
            result = result.filter(
                (deposit) => deposit.status === filter,
            );
        }

        if (search.trim()) {
            const keyword =
                search.toLowerCase();

            result = result.filter(
                (deposit) =>
                    deposit.reference
                        .toLowerCase()
                        .includes(keyword) ||
                    deposit.senderBankName
                        .toLowerCase()
                        .includes(keyword) ||
                    deposit.senderAccountName
                        .toLowerCase()
                        .includes(keyword),
            );
        }

        return result;
    }, [deposits, filter, search]);

    function handleBack() {
        if (goingBack) return;

        setGoingBack(true);

        setTimeout(() => {
            router.back();
        }, 250);
    }

    return (
        <div className="mx-auto max-w-7xl space-y-6 p-6">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                    type="button"
                    onClick={() => router.back()}
                    disabled={goingBack}
                    className="
                        inline-flex
                        w-fit
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-2.5
                        text-sm
                        font-medium
                        text-slate-700
                        shadow-sm
                        transition-all
                        hover:border-blue-500
                        hover:bg-blue-50
                        hover:text-blue-600
                        active:scale-95
                    "
                >
                    {goingBack ? (
                        <>
                            <Loader2
                                size={18}
                                className="animate-spin"
                            />
                            Returning...
                        </>
                    ) : (
                        <>
                            <ArrowLeft size={18} />
                            Back
                        </>
                    )}
                </button>

                <div className="sm:text-right">
                    <h1 className="text-2xl font-bold text-slate-900">
                        Deposit History
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        View all your deposit requests and monitor their approval status.
                    </p>
                </div>
            </div>

            <DepositHistoryFilters
                search={search}
                filter={filter}
                onSearchChange={setSearch}
                onFilterChange={setFilter}
            />

            <DepositHistoryTable
                deposits={filteredDeposits}
                loading={isPending}
            />

        </div>
    );
}