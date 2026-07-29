"use client";

import Link from "next/link";

export default function DailyOrderConfigNotFound() {
    return (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white py-20 text-center">
            <h2 className="text-xl font-semibold text-slate-900">
                Configuration not found.
            </h2>

            <p className="mt-2 text-sm text-slate-500">
                The requested daily order configuration does not exist or may have been deleted.
            </p>

            <Link
                href="/admin/daily-order-configs"
                className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
            >
                Back to Configurations
            </Link>
        </div>
    );
}