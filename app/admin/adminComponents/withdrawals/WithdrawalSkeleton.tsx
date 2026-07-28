"use client";

export default function WithdrawalSkeleton() {
    return (
        <main className="min-h-screen bg-slate-50 p-4 pb-24">
            <div className="mx-auto flex max-w-md flex-col gap-4">

                <div className="space-y-2">
                    <div className="h-8 w-56 animate-pulse rounded bg-slate-200" />
                    <div className="h-4 w-72 animate-pulse rounded bg-slate-200" />
                </div>

                {Array.from({
                    length: 5,
                }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                        <div className="space-y-4">

                            <div className="h-5 w-44 animate-pulse rounded bg-slate-200" />

                            <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />

                            <div className="space-y-3">

                                <div className="flex justify-between">
                                    <div className="h-4 w-20 animate-pulse rounded bg-slate-200" />
                                    <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
                                </div>

                                <div className="flex justify-between">
                                    <div className="h-4 w-16 animate-pulse rounded bg-slate-200" />
                                    <div className="h-4 w-28 animate-pulse rounded bg-slate-200" />
                                </div>

                                <div className="flex justify-between">
                                    <div className="h-4 w-20 animate-pulse rounded bg-slate-200" />
                                    <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />
                                </div>

                                <div className="flex justify-between">
                                    <div className="h-4 w-16 animate-pulse rounded bg-slate-200" />
                                    <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
                                </div>

                            </div>

                            <div className="h-7 w-24 animate-pulse rounded-full bg-slate-200" />

                        </div>
                    </div>
                ))}

            </div>
        </main>
    );
}