"use client";

interface Props {
    todaysEarnings?: number;
    totalTasks?: number;
    completedTasks?: number;
    currency?: string;
}

export default function OrderSummaryCard({
    todaysEarnings = 0,
    totalTasks = 0,
    completedTasks = 0,
    currency = "NGN",
}: Props) {

    const remaining =
        Math.max(
            totalTasks - completedTasks,
            0,
        );

    const progress =
        totalTasks > 0
            ? (completedTasks / totalTasks) * 100
            : 0;

    return (

        <div
            className="
                mx-4
                rounded-3xl
                bg-white
                p-5
                shadow-sm
            "
        >

            <div className="flex items-start justify-between gap-4">

                <div>

                    <p
                        className="
                            text-sm
                            text-slate-500
                        "
                    >
                        Today's Earnings
                    </p>

                    <h2
                        className="
                            mt-1
                            text-3xl
                            font-bold
                            text-[#2B84E0]
                        "
                    >
                        {currency}{" "}
                        {todaysEarnings.toLocaleString()}
                    </h2>

                </div>

                <div
                    className="
                        w-44
                        rounded-2xl
                        bg-gradient-to-r
                        from-[#7CC0FF]
                        to-[#4DA8FE]
                        px-4
                        py-3
                    "
                >

                    <p
                        className="
                            text-xs
                            font-medium
                            text-white
                        "
                    >
                        Remaining
                    </p>

                    <div className="mt-2 flex items-center">

                        <div
                            className="
                                h-1.5
                                flex-1
                                overflow-hidden
                                rounded-full
                                bg-black/15
                            "
                        >

                            <div
                                className="
                                    h-full
                                    rounded-full
                                    bg-slate-900
                                "
                                style={{
                                    width: `${progress}%`,
                                }}
                            />

                        </div>

                        <span
                            className="
                                ml-2
                                text-xs
                                font-semibold
                                text-white
                            "
                        >
                            {remaining}/{totalTasks}
                        </span>

                    </div>

                </div>

            </div>

            <div
                className="
                    mt-5
                    grid
                    grid-cols-2
                    gap-4
                    border-t
                    border-slate-200
                    pt-4
                "
            >

                <div>

                    <p
                        className="
                            text-sm
                            text-slate-500
                        "
                    >
                        Total Tasks
                    </p>

                    <p
                        className="
                            mt-1
                            text-xl
                            font-semibold
                        "
                    >
                        {totalTasks}
                    </p>

                </div>

                <div>

                    <p
                        className="
                            text-sm
                            text-slate-500
                        "
                    >
                        Completed
                    </p>

                    <p
                        className="
                            mt-1
                            text-xl
                            font-semibold
                        "
                    >
                        {completedTasks}
                    </p>

                </div>

            </div>

        </div>

    );

}