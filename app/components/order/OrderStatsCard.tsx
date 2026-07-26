interface OrderStatsCardProps {
    todaysEarnings: string;
    currency?: string;
    remainingCount: number;
    totalCount: number;
    completedCount: number;
}

export default function OrderStatsCard({
    todaysEarnings,
    currency = "NGN",
    remainingCount,
    totalCount,
    completedCount,
}: OrderStatsCardProps) {
    const progress =
        totalCount > 0
            ? ((totalCount - remainingCount) / totalCount) * 100
            : 0;

    return (
        <div className="-mt-4 mx-4 rounded-3xl bg-[#FFFAED] p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm text-slate-500">
                        Today&apos;s Order Earnings
                    </p>
                    <p className="mt-1 text-2xl font-bold text-[#FF9A1F]">
                        {currency} {todaysEarnings}
                    </p>
                </div>

                <div className="w-40 shrink-0 rounded-2xl bg-gradient-to-r from-[#FFD966] to-[#FFB020] px-4 py-3 shadow-sm">
                    <div className="flex items-center justify-between text-xs font-medium text-slate-800">
                        <span>Today&apos;s Remaining Count</span>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/15">
                            <div
                                className="h-full rounded-full bg-slate-900 transition-all"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        <span className="ml-2 text-xs font-semibold text-slate-900">
                            {remainingCount}/{totalCount}
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-200 pt-4">
                <div>
                    <p className="text-sm text-slate-500">
                        Today&apos;s Total Completion Count
                    </p>
                    <p className="mt-1 text-xl font-semibold text-slate-900">
                        {totalCount}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-slate-500">
                        Today&apos;s Completed Count
                    </p>
                    <p className="mt-1 text-xl font-semibold text-slate-900">
                        {completedCount}
                    </p>
                </div>
            </div>
        </div>
    );
}