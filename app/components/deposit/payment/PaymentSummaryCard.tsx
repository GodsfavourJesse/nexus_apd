"use client";

import { Landmark } from "lucide-react";

interface PaymentSummaryCardProps {
    amount: number;
}

export default function PaymentSummaryCard({
    amount,
}: PaymentSummaryCardProps) {
    return (
        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6">
            <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Landmark size={26} />
                </div>

                <div>
                    <p className="text-sm text-slate-500">
                        Amount to Pay
                    </p>

                    <h2 className="mt-1 text-3xl font-bold text-slate-900">
                        ₦{amount.toLocaleString()}
                    </h2>
                </div>
            </div>
        </div>
    );
}