"use client";

import { AlertTriangle, Loader2 } from "lucide-react";
import { Advertisement } from "@/app/types/adminTypes/advertisement.types";

interface Props {
    advertisement: Advertisement | null;
    loading?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function DeleteAdvertisementDialog({
    advertisement,
    loading = false,
    onConfirm,
    onCancel,
}: Props) {
    if (!advertisement) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <AlertTriangle size={20} />
                </div>

                <h2 className="mt-4 text-lg font-semibold text-slate-900">
                    Delete advertisement?
                </h2>

                <p className="mt-1.5 text-sm text-slate-500">
                    This will permanently delete{" "}
                    <span className="font-medium text-slate-700">
                        &ldquo;{advertisement.title}&rdquo;
                    </span>
                    . This action cannot be undone.
                </p>

                <div className="mt-6 flex items-center justify-end gap-3">
                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={loading}
                        className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        onClick={onConfirm}
                        disabled={loading}
                        className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
                    >
                        {loading && <Loader2 size={14} className="animate-spin" />}
                        {loading ? "Deleting..." : "Delete"}
                    </button>
                </div>
            </div>
        </div>
    );
}