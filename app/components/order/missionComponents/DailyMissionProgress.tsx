"use client";

import {
    CheckCircle2,
    Clock3,
    Target,
} from "lucide-react";

interface Props {

    completed: number;

    total: number;

}

export default function DailyMissionProgress({
    completed,
    total,
}: Props) {

    const remaining =
        Math.max(
            total - completed,
            0,
        );

    const progress =
        total === 0
            ? 0
            : (completed / total) * 100;

    const completedMission =
        completed >= total && total > 0;

    return (

        <section className="px-6 py-6">

            {/* Header */}

            <div className="flex items-center justify-between">

                <div>

                    <h3
                        className="
                            text-lg
                            font-bold
                            text-slate-900
                        "
                    >
                        Mission Progress
                    </h3>

                    <p
                        className="
                            mt-1
                            text-sm
                            text-slate-500
                        "
                    >
                        Complete every task to unlock
                        today's full reward.
                    </p>

                </div>

                <div
                    className="
                        rounded-full
                        bg-[#199FFF]/10
                        px-4
                        py-2
                    "
                >
                    <span
                        className="
                            text-sm
                            font-bold
                            text-[#199FFF]
                        "
                    >
                        {Math.round(progress)}%
                    </span>
                </div>

            </div>

            {/* Progress */}

            <div className="mt-6">

                <div
                    className="
                        h-4
                        overflow-hidden
                        rounded-full
                        bg-slate-200
                    "
                >

                    <div
                        className="
                            h-full
                            rounded-full
                            bg-gradient-to-r
                            from-[#199FFF]
                            via-[#42AFFF]
                            to-[#79CFFF]
                            transition-all
                            duration-700
                        "
                        style={{
                            width: `${progress}%`,
                        }}
                    />

                </div>

            </div>

            {/* Stats */}

            <div
                className="
                    mt-6
                    grid
                    grid-cols-3
                    gap-3
                "
            >

                {/* Completed */}

                <div
                    className="
                        rounded-2xl
                        bg-slate-50
                        p-4
                    "
                >

                    <CheckCircle2
                        size={20}
                        className="text-emerald-500"
                    />

                    <p
                        className="
                            mt-3
                            text-xs
                            text-slate-500
                        "
                    >
                        Completed
                    </p>

                    <p
                        className="
                            mt-1
                            text-xl
                            font-bold
                            text-slate-900
                        "
                    >
                        {completed}
                    </p>

                </div>

                {/* Remaining */}

                <div
                    className="
                        rounded-2xl
                        bg-slate-50
                        p-4
                    "
                >

                    <Clock3
                        size={20}
                        className="text-amber-500"
                    />

                    <p
                        className="
                            mt-3
                            text-xs
                            text-slate-500
                        "
                    >
                        Remaining
                    </p>

                    <p
                        className="
                            mt-1
                            text-xl
                            font-bold
                            text-slate-900
                        "
                    >
                        {remaining}
                    </p>

                </div>

                {/* Total */}

                <div
                    className="
                        rounded-2xl
                        bg-slate-50
                        p-4
                    "
                >

                    <Target
                        size={20}
                        className="text-[#199FFF]"
                    />

                    <p
                        className="
                            mt-3
                            text-xs
                            text-slate-500
                        "
                    >
                        Total
                    </p>

                    <p
                        className="
                            mt-1
                            text-xl
                            font-bold
                            text-slate-900
                        "
                    >
                        {total}
                    </p>

                </div>

            </div>

            {/* Mission Status */}

            <div
                className={`
                    mt-6
                    rounded-2xl
                    p-4
                    transition-all

                    ${
                        completedMission
                            ? "bg-emerald-50 border border-emerald-200"
                            : "bg-blue-50 border border-blue-200"
                    }
                `}
            >

                <p
                    className={`
                        text-sm
                        font-medium

                        ${
                            completedMission
                                ? "text-emerald-700"
                                : "text-sky-700"
                        }
                    `}
                >

                    {completedMission
                        ? "🎉 Excellent! You have completed today's mission."
                        : `Complete ${remaining} more ${
                              remaining === 1
                                  ? "task"
                                  : "tasks"
                          } to finish today's mission.`}

                </p>

            </div>

        </section>

    );

}