"use client";

interface Props {
    todaysEarnings?: number;
    totalAvailable?: number;
    completed?: number;
}

export default function ProductsSummaryCard({
    todaysEarnings = 0,
    totalAvailable = 0,
    completed = 0,
}: Props) {
    const remaining = totalAvailable - completed;
    const progress =
        totalAvailable > 0 ? (completed / totalAvailable) * 100 : 0;

    return (
        <div className="-mt-5 mx-4 rounded-3xl bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm text-slate-500">
                        Today&apos;s Earnings
                    </p>
                    <p className="mt-1 text-2xl font-bold text-[#2B84E0]">
                        NGN {todaysEarnings}
                    </p>
                </div>

                <div className="w-40 shrink-0 rounded-2xl bg-gradient-to-r from-[#7CC0FF] to-[#4DA8FE] px-4 py-3 shadow-sm">
                    <p className="text-xs font-medium text-white">
                        Remaining
                    </p>

                    <div className="mt-2 flex items-center justify-between">
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/15">
                            <div
                                className="h-full rounded-full bg-slate-900 transition-all"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        <span className="ml-2 text-xs font-semibold text-white">
                            {remaining}/{totalAvailable}
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-200 pt-4">
                <div>
                    <p className="text-sm text-slate-500">Total Available</p>
                    <p className="mt-1 text-xl font-semibold text-slate-900">
                        {totalAvailable}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-slate-500">Completed</p>
                    <p className="mt-1 text-xl font-semibold text-slate-900">
                        {completed}
                    </p>
                </div>
            </div>
        </div>
    );
}