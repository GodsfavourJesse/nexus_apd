"use client";

import { useState } from "react";
import ReceiptUpload from "./payment/ReceiptUpload";

interface DepositFormProps {
    amount: number;

    receipt: File |null;

    loading?: boolean;

    onReceiptChange: (file: File | null) => void;

    onSubmit: (data: {
        amount: number;
        senderAccountName: string;
        senderAccountNumber: string;
        senderBankName: string;
    }) => void;
}

export default function DepositForm({
    amount,
    receipt,
    loading = false,
    onReceiptChange,
    onSubmit,
}: DepositFormProps) {
    const [senderAccountName, setSenderAccountName] =
        useState("");

    const [
        senderAccountNumber,
        setSenderAccountNumber,
    ] = useState("");

    const [senderBankName, setSenderBankName] =
        useState("");

    return (
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">

            {/* Amount */}

            <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                    Deposit Amount
                </label>

                <input
                    type="text"
                    value={`₦${amount.toLocaleString()}`}
                    readOnly
                    className="
                        h-14
                        w-full
                        rounded-xl
                        border
                        border-slate-300
                        bg-slate-100
                        px-4
                        text-base
                        font-semibold
                        text-slate-700
                    "
                />
            </div>

            {/* Sender Name */}

            <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                    Sender Account Name
                </label>

                <input
                    value={senderAccountName}
                    onChange={(e) =>
                        setSenderAccountName(
                            e.target.value,
                        )
                    }
                    placeholder="Enter sender account name"
                    className="
                        h-14
                        w-full
                        rounded-xl
                        border
                        border-slate-300
                        px-4
                        text-base
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                    "
                />
            </div>

            {/* Sender Account Number */}

            <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                    Sender Account Number
                </label>

                <input
                    value={senderAccountNumber}
                    onChange={(e) =>
                        setSenderAccountNumber(
                            e.target.value,
                        )
                    }
                    placeholder="Enter sender account number"
                    className="
                        h-14
                        w-full
                        rounded-xl
                        border
                        border-slate-300
                        px-4
                        text-base
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                    "
                />
            </div>

            {/* Sender Bank */}

            <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                    Sender Bank
                </label>

                <input
                    value={senderBankName}
                    onChange={(e) =>
                        setSenderBankName(
                            e.target.value,
                        )
                    }
                    placeholder="Enter sender bank"
                    className="
                        h-14
                        w-full
                        rounded-xl
                        border
                        border-slate-300
                        px-4
                        text-base
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                    "
                />
            </div>

            {/* Receipt Upload */}

            <ReceiptUpload
                file={receipt}
                onChange={onReceiptChange}
            />

            {/* Submit */}

            <button
                type="button"
                disabled={loading}
                onClick={() =>
                    onSubmit({
                        amount,
                        senderAccountName,
                        senderAccountNumber,
                        senderBankName,
                    })
                }
                className="
                    h-14
                    w-full
                    rounded-xl
                    bg-blue-600
                    text-base
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-700
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
            >
                {loading
                    ? "Submitting..."
                    : "Submit Deposit"}
            </button>
        </div>
    );
}