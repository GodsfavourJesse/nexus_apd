"use client";

import {
    useEffect,
    useState,
} from "react";

import {
    X,
    Sparkles,
} from "lucide-react";

import DailyMissionReward from "./DailyMissionReward";
import DailyMissionProgress from "./DailyMissionProgress";
import DailyMissionFooter from "./DailyMissionFooter";

interface Props {

    open: boolean;

    onClose: () => void;

    membership: string;

    earnings: number;

    completed: number;

    total: number;

    rewardPerTask: number;
}

export default function DailyMissionModal({
    open,
    onClose,
    membership,
    earnings,
    completed,
    total,
    rewardPerTask,
}: Props) {

    const [visible, setVisible] =
        useState(false);

    useEffect(() => {

        if (open) {

            document.body.style.overflow = "hidden";

            requestAnimationFrame(() => {

                setVisible(true);

            });

        } else {

            document.body.style.overflow = "";

            setVisible(false);

        }

        return () => {

            document.body.style.overflow = "";

        };

    }, [open]);

    useEffect(() => {

        const listener = (
            e: KeyboardEvent,
        ) => {

            if (e.key === "Escape") {

                onClose();

            }

        };

        window.addEventListener(
            "keydown",
            listener,
        );

        return () => {

            window.removeEventListener(
                "keydown",
                listener,
            );

        };

    }, [onClose]);

    if (!open) {

        return null;

    }

    return (

        <div
            className="
                fixed
                inset-0
                z-[100]
                flex
                items-end
                justify-center
                bg-black/60
                backdrop-blur-sm
                md:items-center
                p-4
            "
            onClick={onClose}
        >

            <div
                onClick={(e) =>
                    e.stopPropagation()
                }
                className={`
                    relative
                    w-full
                    max-w-md
                    overflow-hidden
                    rounded-[32px]
                    bg-white
                    shadow-2xl
                    transition-all
                    duration-300

                    ${
                        visible
                            ? "translate-y-0 opacity-100 scale-100"
                            : "translate-y-8 opacity-0 scale-95"
                    }
                `}
            >

                {/* Background */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-[#F8FCFF]
                        via-white
                        to-[#EEF8FF]
                    "
                />

                <div
                    className="
                        absolute
                        -top-20
                        -right-20
                        h-52
                        w-52
                        rounded-full
                        bg-sky-300/20
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        -bottom-16
                        -left-12
                        h-44
                        w-44
                        rounded-full
                        bg-cyan-300/15
                        blur-3xl
                    "
                />

                <div className="relative">

                    {/* Header */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            border-b
                            border-slate-100
                            px-6
                            py-5
                        "
                    >

                        <div>

                            <div
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    bg-[#199FFF]/10
                                    px-3
                                    py-1
                                "
                            >

                                <Sparkles
                                    size={14}
                                    className="text-[#199FFF]"
                                />

                                <span
                                    className="
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wide
                                        text-[#199FFF]
                                    "
                                >
                                    Daily Mission
                                </span>

                            </div>

                            <h2
                                className="
                                    mt-3
                                    text-2xl
                                    font-bold
                                    text-slate-900
                                "
                            >
                                Today's Tasks
                            </h2>

                        </div>

                        <button
                            onClick={onClose}
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                bg-slate-100
                                transition
                                hover:bg-slate-200
                            "
                        >
                            <X size={18} />
                        </button>

                    </div>

                    {/* Reward */}

                    <DailyMissionReward
                        membership={membership}
                        earnings={earnings}
                        rewardPerTask={rewardPerTask}
                    />

                    {/* Progress */}

                    <DailyMissionProgress
                        completed={completed}
                        total={total}
                    />

                    {/* Footer */}

                    <DailyMissionFooter
                        completed={completed}
                        total={total}
                        onStart={onClose}
                    />

                </div>

            </div>

        </div>

    );

}