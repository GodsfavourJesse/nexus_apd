"use client";

import { Loader2 } from "lucide-react";

interface Props {
    submitLabel: string;
    loading?: boolean;
    isDirty?: boolean;
    isValid?: boolean;
    onCancel?: () => void;
}

export default function AdvertisementActions({
    submitLabel,
    loading = false,
    isDirty = true,
    isValid = true,
    onCancel,
}: Props) {
    return (
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
            <p className="hidden items-center gap-1.5 text-xs text-slate-400 sm:flex">
                <span
                    className={`h-1.5 w-1.5 rounded-full ${
                        isDirty ? "bg-amber-400" : "bg-slate-300"
                    }`}
                />
                {isDirty ? "You have unsaved changes." : "No changes made."}
            </p>

            <div className="ml-auto flex items-center gap-3">
                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={loading}
                        className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        Cancel
                    </button>
                )}

                <button
                    type="submit"
                    disabled={loading || !isValid}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {loading && <Loader2 size={15} className="animate-spin" />}
                    {loading ? "Saving..." : submitLabel}
                </button>
            </div>
        </div>
    );
}