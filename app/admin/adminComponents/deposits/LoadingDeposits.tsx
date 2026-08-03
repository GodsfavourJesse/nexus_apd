"use client";

export function LoadingDeposits() {
    return (
        <div className="flex flex-col gap-4">
            {/* Summary pills skeleton */}
            <div className="-mx-4 overflow-x-auto px-4">
                <div className="flex w-max gap-3">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-[92px] w-[132px] shrink-0 animate-pulse rounded-2xl border border-slate-100 bg-white p-3.5"
                        >
                            <div className="h-8 w-8 rounded-lg bg-slate-100" />
                            <div className="mt-2.5 h-5 w-10 rounded bg-slate-200" />
                            <div className="mt-1.5 h-3 w-14 rounded bg-slate-100" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Search + tabs skeleton */}
            <div className="flex flex-col gap-3">
                <div className="h-10 w-full animate-pulse rounded-[10px] bg-slate-100" />
                <div className="h-9 w-full animate-pulse rounded-[10px] bg-slate-100" />
            </div>

            {/* Card list skeleton */}
            <div className="flex flex-col gap-2.5">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="flex animate-pulse items-start gap-3 rounded-2xl border border-slate-100 bg-white p-3.5"
                    >
                        <div className="h-14 w-14 shrink-0 rounded-xl bg-slate-100" />

                        <div className="flex-1 space-y-2.5">
                            <div className="flex items-center justify-between">
                                <div className="h-4 w-24 rounded bg-slate-200" />
                                <div className="h-5 w-16 rounded-full bg-slate-100" />
                            </div>
                            <div className="h-3 w-32 rounded bg-slate-100" />
                            <div className="h-5 w-28 rounded bg-slate-200" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}