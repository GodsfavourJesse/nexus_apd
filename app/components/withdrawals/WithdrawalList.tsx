"use client";

import {
    Withdrawal,
} from "@/app/types/clientTypes/withdrawal.types";

import { WithdrawalCard } from "./WithdrawalCard";
import { WithdrawalEmptyState } from "./WithdrawalEmptyState";


interface Props {
    withdrawals: Withdrawal[];
}

export function WithdrawalList({
    withdrawals,
}: Props) {

    if (!withdrawals.length) {
        return (
            <WithdrawalEmptyState />
        );
    }

    return (
        <div className="space-y-4">

            {withdrawals.map(
                (withdrawal) => (
                    <WithdrawalCard
                        key={withdrawal.id}
                        withdrawal={
                            withdrawal
                        }
                    />
                ),
            )}

        </div>
    );
}