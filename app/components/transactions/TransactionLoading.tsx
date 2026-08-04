"use client";

export default function TransactionLoading() {

    return (

        <div className="space-y-3">

            {Array.from({ length: 8 }).map((_, i) => (

                <div
                    key={i}
                    className="h-24 animate-pulse rounded-2xl border border-slate-200 bg-white"
                />

            ))}

        </div>

    );

}