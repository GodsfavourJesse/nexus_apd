"use client";

import {
    ArrowRight,
    CheckCircle2,
    Clock3,
} from "lucide-react";

interface Props {

    completed: number;

    total: number;

    onStart: () => void;

}

export default function DailyMissionFooter({
    completed,
    total,
    onStart,
}: Props) {

    const missionCompleted =
        total > 0 &&
        completed >= total;

    const missionStarted =
        completed > 0 &&
        !missionCompleted;

    return (

        <footer
            className="
                border-t
                border-slate-100
                bg-slate-50/70
                px-6
                py-6
            "
        >

            {/* Reset */}

            <div
                className="
                    mb-5
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-white
                    p-4
                "
            >

                <div
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#199FFF]/10
                    "
                >

                    <Clock3
                        size={18}
                        className="text-[#199FFF]"
                    />

                </div>

                <div>

                    <p
                        className="
                            text-xs
                            uppercase
                            tracking-wide
                            text-slate-400
                        "
                    >
                        Next Reset
                    </p>

                    <p
                        className="
                            mt-1
                            font-semibold
                            text-slate-900
                        "
                    >
                        Tomorrow
                    </p>

                </div>

            </div>

            {/* CTA */}

            {missionCompleted ? (

                <button
                    disabled
                    className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-2xl
                        bg-emerald-500
                        px-6
                        py-4
                        text-white
                        shadow-lg
                        cursor-default
                    "
                >

                    <CheckCircle2 size={22} />

                    <span
                        className="
                            text-base
                            font-bold
                        "
                    >
                        Mission Completed
                    </span>

                </button>

            ) : (

                <button
                    onClick={onStart}
                    className="
                        group
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-2xl
                        bg-gradient-to-r
                        from-[#199FFF]
                        to-[#4DA8FE]
                        px-6
                        py-4
                        text-white
                        shadow-lg
                        transition-all
                        duration-300
                        hover:scale-[1.02]
                        hover:shadow-xl
                        active:scale-[0.98]
                    "
                >

                    <span
                        className="
                            text-base
                            font-bold
                        "
                    >

                        {missionStarted
                            ? "Continue Today's Mission"
                            : "Start Today's Tasks"}

                    </span>

                    <ArrowRight
                        size={20}
                        className="
                            transition-transform
                            group-hover:translate-x-1
                        "
                    />

                </button>

            )}

            {/* Helper Text */}

            <p
                className="
                    mt-4
                    text-center
                    text-xs
                    leading-relaxed
                    text-slate-500
                "
            >

                {missionCompleted
                    ? "Congratulations! Your rewards have been credited. Come back tomorrow for a new mission."
                    : "Complete every task today to earn all available rewards before tomorrow's reset."}

            </p>

        </footer>

    );

}