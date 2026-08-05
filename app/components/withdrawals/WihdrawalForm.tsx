"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import {
    Loader2,
    Wallet,
    Landmark,
    User,
    CreditCard,
    BadgeDollarSign,
    ShieldCheck,
    ArrowDownCircle,
} from "lucide-react";
import { toast } from "sonner";

import {
    createWithdrawalSchema,
    CreateWithdrawalFormValues,
} from "@/app/schema/withdrawal.schema";

import { useCreateWithdrawal } from "@/app/hooks/clientHooks/withdrawalHooks/useCreateWithdrawal";

export function WithdrawalForm() {
    const queryClient = useQueryClient();

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
        },
    } = useForm<CreateWithdrawalFormValues>({
        resolver: zodResolver(
            createWithdrawalSchema,
        ),
        defaultValues: {
            amount: "",
            accountName: "",
            accountNumber: "",
            bankName: "",
        },
    });

    const mutation =
        useCreateWithdrawal();

    const onSubmit = async (
        values: CreateWithdrawalFormValues,
    ) => {
        try {
            await mutation.mutateAsync(
                values,
            );

            toast.success(
                "Withdrawal request submitted successfully.",
            );

            queryClient.invalidateQueries({
                queryKey: [
                    "withdrawals",
                ],
            });

            reset();

        } catch (error: any) {

            toast.error(
                error?.response?.data?.message ??
                    "Unable to submit withdrawal request.",
            );

        }
    };

    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            {/* Header */}

            <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-6 text-white">

                <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-white/15 p-3 backdrop-blur">

                        <Wallet className="h-8 w-8" />

                    </div>

                    <div>

                        <h2 className="text-2xl font-bold">
                            Withdraw Funds
                        </h2>

                        <p className="mt-1 text-sm text-green-100">
                            Transfer your earnings directly to your preferred
                            bank account.
                        </p>

                    </div>

                </div>

            </div>

            <form
                onSubmit={handleSubmit(
                    onSubmit,
                )}
                className="space-y-7 p-6"
            >

                {/* Amount */}

                <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Withdrawal Amount
                    </label>

                    <div className="relative">

                        <BadgeDollarSign className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-600" />

                        <span className="absolute left-11 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
                            ₦
                        </span>

                        <input
                            type="number"
                            placeholder="50,000"
                            {...register(
                                "amount",
                            )}
                            className="h-14 w-full rounded-2xl border border-slate-300 pl-16 pr-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                        />

                    </div>

                    {errors.amount && (
                        <p className="mt-2 text-sm text-red-500">
                            {
                                errors.amount
                                    .message
                            }
                        </p>
                    )}

                </div>

                {/* Bank Details */}

                <div className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">

                    <h3 className="font-semibold text-slate-800">
                        Bank Account Information
                    </h3>

                    {/* Account Name */}

                    <div>

                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Account Name
                        </label>

                        <div className="relative">

                            <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                            <input
                                placeholder="John Doe"
                                {...register(
                                    "accountName",
                                )}
                                className="h-14 w-full rounded-2xl border border-slate-300 pl-12 pr-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                            />

                        </div>

                        {errors.accountName && (
                            <p className="mt-2 text-sm text-red-500">
                                {
                                    errors
                                        .accountName
                                        .message
                                }
                            </p>
                        )}

                    </div>

                    {/* Account Number */}

                    <div>

                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Account Number
                        </label>

                        <div className="relative">

                            <CreditCard className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                            <input
                                maxLength={10}
                                placeholder="0123456789"
                                {...register(
                                    "accountNumber",
                                )}
                                className="h-14 w-full rounded-2xl border border-slate-300 pl-12 pr-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                            />

                        </div>

                        {errors.accountNumber && (
                            <p className="mt-2 text-sm text-red-500">
                                {
                                    errors
                                        .accountNumber
                                        .message
                                }
                            </p>
                        )}

                    </div>

                    {/* Bank */}

                    <div>

                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Bank Name
                        </label>

                        <div className="relative">

                            <Landmark className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                            <input
                                placeholder="Access Bank"
                                {...register(
                                    "bankName",
                                )}
                                className="h-14 w-full rounded-2xl border border-slate-300 pl-12 pr-4 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                            />

                        </div>

                        {errors.bankName && (
                            <p className="mt-2 text-sm text-red-500">
                                {
                                    errors
                                        .bankName
                                        .message
                                }
                            </p>
                        )}

                    </div>

                </div>

                {/* Information */}

                <div className="flex gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">

                    <ShieldCheck className="mt-1 h-6 w-6 flex-shrink-0 text-emerald-600" />

                    <div>

                        <p className="font-semibold text-emerald-900">
                            Withdrawal Process
                        </p>

                        <ul className="mt-2 space-y-1 text-sm leading-6 text-emerald-800">

                            <li>
                                • Your request will be reviewed by an administrator.
                            </li>

                            <li>
                                • Approved withdrawals are processed to your bank account.
                            </li>

                            <li>
                                • You can track the status below.
                            </li>

                        </ul>

                    </div>

                </div>

                {/* Submit */}

                <button
                    type="submit"
                    disabled={
                        mutation.isPending
                    }
                    className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-emerald-600 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                >

                    {mutation.isPending ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                        <ArrowDownCircle className="h-5 w-5" />
                    )}

                    {mutation.isPending
                        ? "Submitting Request..."
                        : "Submit Withdrawal Request"}

                </button>

            </form>

        </section>
    );
}