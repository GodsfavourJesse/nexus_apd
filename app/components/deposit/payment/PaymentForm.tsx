"use client";

import { useState } from "react";
import {
    Landmark,
    Copy,
    Check,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ReceiptUpload from "./ReceiptUpload";

import {
    paymentFormSchema,
    PaymentFormValues,
} from "@/app/schema/upload.schema";

interface PaymentFormProps {
    receipt: File |null;
    onReceiptChange: (file: File | null) => void;
    loading?: boolean;
    onSubmit: (data: PaymentFormValues) => void;
}

export default function PaymentForm({
    receipt,
    onReceiptChange,
    loading = false,
    onSubmit,
}: PaymentFormProps) {
    const [copied, setCopied] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PaymentFormValues>({
        resolver: zodResolver(paymentFormSchema),
        defaultValues: {
            senderAccountName: "",
            senderAccountNumber: "",
            senderBankName: "",
        },
    });

    function copy(value: string, key: string) {
        navigator.clipboard.writeText(value);

        setCopied(key);

        setTimeout(() => {
            setCopied("");
        }, 2000);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-8"
        >
            {/* Bank Details */}

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5">
                <div className="mb-5 flex items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                        <Landmark size={22} />
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900">
                            Bank Transfer Details
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                            Transfer the exact amount before submitting your receipt.
                        </p>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="rounded-xl border border-slate-100 bg-white p-4">
                        <p className="text-xs text-slate-500">
                            Bank
                        </p>

                        <p className="mt-1 font-semibold text-slate-900">
                            Access Bank
                        </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-white p-4">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-xs text-slate-500">
                                    Account Name
                                </p>

                                <p className="mt-1 font-semibold text-slate-900">
                                    Schema World Technology
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    copy(
                                        "Schema World Technology",
                                        "name",
                                    )
                                }
                                className="rounded-lg border border-slate-200 p-2 hover:bg-slate-50"
                            >
                                {copied === "name" ? (
                                    <Check
                                        size={18}
                                        className="text-green-600"
                                    />
                                ) : (
                                    <Copy size={18} />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-xs text-slate-500">
                                    Account Number
                                </p>

                                <p className="mt-2  text-[16px] md:text-3xl font-bold md:font-extrabold tracking-[0.25em]">
                                    0123456789
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    copy(
                                        "0123456789",
                                        "number",
                                    )
                                }
                                className="rounded-lg border border-slate-200 bg-white p-2 hover:bg-slate-100"
                            >
                                {copied === "number" ? (
                                    <Check
                                        size={18}
                                        className="text-green-600"
                                    />
                                ) : (
                                    <Copy size={18} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sender Account Name */}

            <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                    Sender Account Name
                </label>

                <input
                    {...register("senderAccountName")}
                    placeholder="John Doe"
                    className="h-14 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                {errors.senderAccountName && (
                    <p className="mt-2 text-sm text-red-600">
                        {errors.senderAccountName.message}
                    </p>
                )}
            </div>

            {/* Sender Account Number */}

            <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                    Sender Account Number
                </label>

                <input
                    {...register("senderAccountNumber")}
                    inputMode="numeric"
                    placeholder="0123456789"
                    className="h-14 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                {errors.senderAccountNumber && (
                    <p className="mt-2 text-sm text-red-600">
                        {errors.senderAccountNumber.message}
                    </p>
                )}
            </div>

            {/* Sender Bank */}

            <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                    Sender Bank
                </label>

                <input
                    {...register("senderBankName")}
                    placeholder="Access Bank"
                    className="h-14 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                {errors.senderBankName && (
                    <p className="mt-2 text-sm text-red-600">
                        {errors.senderBankName.message}
                    </p>
                )}
            </div>

            {/* Receipt */}

            <ReceiptUpload
                file={receipt}
                onChange={onReceiptChange}
            />

            <div className="sticky bottom-0 -mx-4 border-t border-slate-200 bg-white p-4 sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:p-0">
                <button
                    type="submit"
                    disabled={loading}
                    className="h-14 w-full rounded-xl bg-blue-600 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {loading
                        ? "Submitting..."
                        : "Submit Deposit"}
                </button>
            </div>
        </form>
    );
}