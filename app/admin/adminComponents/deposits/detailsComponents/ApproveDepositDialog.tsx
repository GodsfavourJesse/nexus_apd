"use client";

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckCircle2, Loader2, X } from "lucide-react";

import { useApproveDeposit } from "@/app/hooks/adminHooks/deposits/useApproveDeposit";

import { approveDepositSchema, ApproveDepositFormValues} from "@/app/schema/adminSchema/deposit.schema";
 
interface Props {
    open: boolean;
    depositId: string;
    onClose: () => void;
}

export default function ApproveDepositDialog({
    open,
    depositId,
    onClose,
}: Props) {

    const approveDeposit = useApproveDeposit();

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
        },
    } = useForm<ApproveDepositFormValues>({
        resolver:
            zodResolver(
                approveDepositSchema,
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
        values: ApproveDepositFormValues,
    ) => {

        approveDeposit.mutate(
            {
                depositId,

                data: {
                    adminRemark:
                        values.adminRemark?.trim()
                            ? values.adminRemark.trim()
                            : undefined,
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

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">

                        <CheckCircle2 className="h-5 w-5" />

                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={
                            approveDeposit.isPending
                        }
                        className="text-gray-400 transition hover:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
                        aria-label="Close dialog"
                    >

                        <X className="h-5 w-5" />

                    </button>

                </div>

                <h2 className="mt-5 text-xl font-semibold text-gray-900">

                    Approve Deposit

                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">

                    This action will approve the user's deposit
                    request and immediately credit the deposited
                    amount into the user's wallet.

                    <span className="mt-2 block font-medium text-red-500">

                        This action cannot be undone.

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

                            Remark

                            <span className="ml-1 font-normal text-gray-400">

                                (Optional)

                            </span>

                        </label>

                        <textarea
                            id="adminRemark"
                            rows={4}
                            placeholder="Add an internal approval remark..."
                            {...register(
                                "adminRemark",
                            )}
                            className={`w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition
                                ${
                                    errors.adminRemark
                                        ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                                        : "border-gray-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
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
                                approveDeposit.isPending
                            }
                            className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >

                            Cancel

                        </button>

                        <button
                            type="submit"
                            disabled={
                                approveDeposit.isPending
                            }
                            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
                        >

                            {approveDeposit.isPending && (

                                <Loader2 className="h-4 w-4 animate-spin" />

                            )}

                            {approveDeposit.isPending
                                ? "Approving..."
                                : "Approve Deposit"}

                        </button>

                    </div>

                </form>

            </div>

        </div>
    );

}