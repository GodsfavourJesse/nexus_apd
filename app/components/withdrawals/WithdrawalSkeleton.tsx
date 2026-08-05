"use client";

export function WithdrawalSkeleton() {
    return (
        <div className="space-y-5">

            {Array.from({
                length: 5,
            }).map((_, index) => (

                <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >

                    {/* Top Accent */}

                    <div className="h-1 animate-pulse bg-slate-200" />

                    <div className="space-y-6 p-5">

                        {/* Header */}

                        <div className="flex items-start justify-between">

                            <div className="space-y-3">

                                <div className="h-3 w-28 animate-pulse rounded bg-slate-200" />

                                <div className="h-8 w-44 animate-pulse rounded bg-slate-200" />

                            </div>

                            <div className="h-8 w-24 animate-pulse rounded-full bg-slate-200" />

                        </div>

                        {/* Body */}

                        <div className="grid gap-4 sm:grid-cols-2">

                            <div className="rounded-xl border border-slate-100 p-4">

                                <div className="h-3 w-16 animate-pulse rounded bg-slate-200" />

                                <div className="mt-3 h-5 w-36 animate-pulse rounded bg-slate-200" />

                            </div>

                            <div className="rounded-xl border border-slate-100 p-4">

                                <div className="h-3 w-24 animate-pulse rounded bg-slate-200" />

                                <div className="mt-3 h-5 w-32 animate-pulse rounded bg-slate-200" />

                            </div>

                        </div>

                        {/* Account Name */}

                        <div className="rounded-xl border border-slate-100 p-4">

                            <div className="h-3 w-24 animate-pulse rounded bg-slate-200" />

                            <div className="mt-3 h-5 w-52 animate-pulse rounded bg-slate-200" />

                        </div>

                        {/* Footer */}

                        <div className="flex items-center justify-between border-t border-slate-100 pt-4">

                            <div className="h-4 w-40 animate-pulse rounded bg-slate-200" />

                            <div className="h-4 w-16 animate-pulse rounded bg-slate-200" />

                        </div>

                    </div>

                </div>

            ))}

        </div>
    );
}