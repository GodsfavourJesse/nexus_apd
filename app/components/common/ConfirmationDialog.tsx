"use client";

import { Loader2, TriangleAlert } from "lucide-react";

interface ConfirmationDialogProps {
    open: boolean;
    title: string;
    description: string;
    confirmText?: string;
    cancelText?: string;
    loading?: boolean;
    danger?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function ConfirmationDialog({
    open,
    title,
    description,
    confirmText = "Confirm",
    cancelText = "Cancel",
    loading = false,
    danger = false,
    onConfirm,
    onCancel,
}: ConfirmationDialogProps) {
    if (!open) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
            <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">

                {/* Header */}

                <div className="border-b border-slate-200 p-6">
                    <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                            danger
                                ? "bg-red-100 text-red-600"
                                : "bg-blue-100 text-blue-600"
                        }`}
                    >
                        <TriangleAlert size={28} />
                    </div>

                    <h2 className="mt-5 text-2xl font-bold text-slate-900">
                        {title}
                    </h2>

                    <p className="mt-3 leading-7 text-slate-600">
                        {description}
                    </p>
                </div>

                {/* Actions */}

                <div className="flex gap-3 p-6">
                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={loading}
                        className="flex-1 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
                    >
                        {cancelText}
                    </button>

                    <button
                        type="button"
                        disabled={loading}
                        onClick={onConfirm}
                        className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition disabled:opacity-50 ${
                            danger
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    >
                        {loading && (
                            <Loader2
                                size={18}
                                className="animate-spin"
                            />
                        )}

                        {confirmText}
                    </button>
                </div>

            </div>
        </div>
    );
}