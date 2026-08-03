"use client";

import { AdminDeposit } from "@/app/types/adminTypes/adminDeposit.types";
import { DepositCard } from "./DepositCard";
import { EmptyDeposits } from "./EmptyDeposits";
import LoadingTable from "./LoadingTable";

interface DepositTableProps {
    deposits: AdminDeposit[];
    loading: boolean;
    onOpen?: (deposit: AdminDeposit) => void;
}

export function DepositTable({
    deposits,
    loading,
    onOpen,
}: DepositTableProps) {
    if (loading) {
        return <LoadingTable />;
    }

    if (!deposits.length) {
        return (
            <div className="rounded-2xl border border-slate-100 bg-white p-10 shadow-sm">
                <EmptyDeposits />
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2.5">
            {deposits.map((deposit) => (
                <DepositCard
                    key={deposit.id}
                    deposit={deposit}
                    onOpen={onOpen}
                />
            ))}
        </div>
    );
}