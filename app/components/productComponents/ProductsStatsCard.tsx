"use client";

interface Props {
    todaysEarnings?: number;
    currency?: string;
    remaining?: number;
    totalQuota?: number;
    totalCompleted?: number;
    completedToday?: number;
}

export default function ProductsStatsCard({
    todaysEarnings = 0,
    currency = "NGN",
    remaining = 0,
    totalQuota = 0,
    totalCompleted = 0,
    completedToday = 0,
}: Props) {
    const progress =
        totalQuota > 0 ? ((totalQuota - remaining) / totalQuota) * 100 : 0;

    return (
        <div className="relative mx-4 rounded-3xl bg-white p-5 shadow-sm">

            {/* Blue Glow */}
            <div
                className="
                    absolute
                    inset-0
                    rounded-[32px]
                    bg-[#4DA8FE]/25
                    blur-2xl
                    scale-105
                "
            />

            {/* Gradient Border */}
            <div
                className="
                    relative
                    rounded-[32px]
                    bg-gradient-to-br
                    from-white/90
                    via-[#DDF2FF]
                    to-[#9FD6FF]
                    p-[1.5px]
                "
            ></div>

             {/* Decorative Blur */}
                    <div
                        className="
                            absolute
                            -right-10
                            -top-10
                            h-32
                            w-32
                            rounded-full
                            bg-[#7CC0FF]/30
                            blur-3xl
                        "
                    />

                    <div
                        className="
                            absolute
                            -left-8
                            bottom-0
                            h-24
                            w-24
                            rounded-full
                            bg-cyan-300/20
                            blur-2xl
                        "
                    />




            <div className="flex items-start justify-between gap-2">
                <div>
                    <p className="text-[10px] text-slate-500">
                        Today's Order Earnings
                    </p>
                    <p className="mt-1 text-[18px] font-bold text-[#2B84E0]">
                        {currency} {todaysEarnings}
                    </p>
                </div>

                <div className="w-50 shrink-0 rounded-[12px] bg-gradient-to-r from-[#7CC0FF] to-[#4DA8FE] px-4 py-3 shadow-sm">

                    <div className="mb-2 flex items-center justify-between">
                        <p className="text-[10px] font-medium text-white">
                            Today's Remaining Count
                        </p>

                        <span className="ml-2 text-[12px] font-semibold text-white">
                            {remaining}/{totalQuota}
                        </span>
                    </div>
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-black/15">
                        <div
                            className="h-full rounded-full bg-slate-900 transition-all"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-200 pt-4">
                <div>
                    <p className="text-[10px] text-slate-500">
                        Today&apos;s Total Completion Count
                    </p>
                    <p className="mt-1 text-[14px] font-semibold text-slate-900">
                        {totalCompleted}
                    </p>
                </div>

                <div>
                    <p className="text-[10px] text-slate-500">
                        Today&apos;s Completed Count
                    </p>
                    <p className="mt-1 text-[14px] font-semibold text-slate-900">
                        {completedToday}
                    </p>
                </div>
            </div>
        </div>
    );
}