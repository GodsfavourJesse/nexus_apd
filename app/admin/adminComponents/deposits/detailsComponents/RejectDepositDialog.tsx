"use client";

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    AlertTriangle,
    Loader2,
    X,
} from "lucide-react";

import { useRejectDeposit } from "@/app/hooks/adminHooks/deposits/useRejectDeposit";

import {
    rejectDepositSchema,
    RejectDepositFormValues,
} from "@/app/schema/adminSchema/deposit.schema";

interface Props {
    open: boolean;
    depositId: string;
    onClose: () => void;
}

export default function RejectDepositDialog({
    open,
    depositId,
    onClose,
}: Props) {

    const rejectDeposit =
        useRejectDeposit();

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
        },
    } = useForm<RejectDepositFormValues>({
        resolver:
            zodResolver(
                rejectDepositSchema,
            ),
        defaultValues: {
            adminRemark: "",
        },
    });

    useEffect(() => {

        if (!open) {
            reset();
        }

    }, [
        open,
        reset,
    ]);

    const onSubmit = (
        values: RejectDepositFormValues,
    ) => {

        rejectDeposit.mutate(
            {
                depositId,

                data: {
                    adminRemark:
                        values.adminRemark.trim(),
                }

            },
            {
                onSuccess: () => {

                    reset();

                    onClose();

                },
            },
        );

    };

    if (!open) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">

            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

                <div className="flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-red-600">

                        <AlertTriangle className="h-5 w-5" />

                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={
                            rejectDeposit.isPending
                        }
                        className="text-gray-400 transition hover:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
                        aria-label="Close dialog"
                    >

                        <X className="h-5 w-5" />

                    </button>

                </div>

                <h2 className="mt-5 text-xl font-semibold text-gray-900">

                    Reject Deposit

                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">

                    This will reject the user's deposit request.

                    <span className="mt-2 block">

                        Please provide a clear reason because
                        this message will be visible to the user.

                    </span>

                </p>

                <form
                    onSubmit={handleSubmit(
                        onSubmit,
                    )}
                    className="mt-6 space-y-5"
                >

                    <div>

                        <label
                            htmlFor="adminRemark"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >

                            Rejection Reason

                        </label>

                        <textarea
                            id="adminRemark"
                            rows={4}
                            placeholder="Explain why this deposit is being rejected..."
                            {...register(
                                "adminRemark",
                            )}
                            className={`w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition
                                ${
                                    errors.adminRemark
                                        ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                                        : "border-gray-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                                }`}
                        />

                        {errors.adminRemark && (

                            <p className="mt-2 text-sm font-medium text-red-500">

                                {
                                    errors
                                        .adminRemark
                                        .message
                                }

                            </p>

                        )}

                    </div>

                    <div className="flex justify-end gap-3 border-t pt-5">

                        <button
                            type="button"
                            onClick={onClose}
                            disabled={
                                rejectDeposit.isPending
                            }
                            className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >

                            Cancel

                        </button>

                        <button
                            type="submit"
                            disabled={
                                rejectDeposit.isPending
                            }
                            className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                        >

                            {rejectDeposit.isPending && (

                                <Loader2 className="h-4 w-4 animate-spin" />

                            )}

                            {rejectDeposit.isPending
                                ? "Rejecting..."
                                : "Reject Deposit"}

                        </button>

                    </div>

                </form>

            </div>

        </div>
    );

}