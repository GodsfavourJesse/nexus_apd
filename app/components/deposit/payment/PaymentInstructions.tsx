"use client";

import {
    AlertTriangle,
    Clock3,
    ShieldAlert,
} from "lucide-react";

export default function DepositWarning() {
    return (
        <div className="rounded-3xl border border-amber-300 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                    <AlertTriangle size={24} />
                </div>

                <div>
                    <h3 className="text-lg font-bold text-amber-900">
                        Important Deposit Instructions
                    </h3>

                    <p className="text-sm text-amber-700">
                        Please read carefully before submitting your deposit.
                    </p>
                </div>
            </div>

            <div className="space-y-5 text-sm leading-7 text-amber-900">

                <div className="flex items-start gap-3">
                    <Clock3
                        size={20}
                        className="mt-1 shrink-0 text-amber-600"
                    />

                    <p>
                        This deposit request is valid for{" "}
                        <strong>30 minutes</strong>. Please
                        complete your transfer using the bank
                        details displayed on this page and pay
                        the exact amount shown.
                    </p>
                </div>

                <div className="flex items-start gap-3">
                    <ShieldAlert
                        size={20}
                        className="mt-1 shrink-0 text-amber-600"
                    />

                    <p>
                        After completing your payment,
                        immediately enter the payer's account
                        information and upload a clear payment
                        receipt or screenshot before submitting
                        your deposit request.
                    </p>
                </div>

                <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
                    <p className="font-semibold leading-7 text-red-700">
                        This bank account is intended for a
                        <strong> one-time payment only.</strong>{" "}
                        Do not save these bank details for future
                        deposits. Bank accounts may change at any
                        time without prior notice.
                    </p>
                </div>

            </div>
        </div>
    );
}