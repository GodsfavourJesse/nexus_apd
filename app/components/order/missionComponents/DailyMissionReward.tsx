"use client";

import {
    Award,
    Crown,
    Wallet,
    Sparkles,
} from "lucide-react";

interface Props {

    membership: string;

    earnings: number;

    rewardPerTask: number;

}

export default function DailyMissionReward({
    membership,
    earnings,
    rewardPerTask,
}: Props) {

    return (

        <section className="px-6 pt-6">

            {/* Hero Card */}

            <div
                className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    bg-gradient-to-br
                    from-[#199FFF]
                    via-[#3EA8FF]
                    to-[#74C7FF]
                    p-6
                    text-white
                    shadow-xl
                "
            >

                {/* Glow */}

                <div
                    className="
                        absolute
                        -right-10
                        -top-10
                        h-40
                        w-40
                        rounded-full
                        bg-white/15
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        -bottom-12
                        -left-12
                        h-32
                        w-32
                        rounded-full
                        bg-cyan-200/20
                        blur-3xl
                    "
                />

                <div className="relative">

                    {/* Membership */}

                    <div className="flex items-center justify-between">

                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-white/15
                                px-4
                                py-2
                                backdrop-blur
                            "
                        >

                            <Crown size={16} />

                            <span
                                className="
                                    text-sm
                                    font-semibold
                                "
                            >
                                {membership}
                            </span>

                        </div>

                        <Sparkles
                            size={22}
                            className="opacity-90"
                        />

                    </div>

                    {/* Earnings */}

                    <div className="mt-7">

                        <p
                            className="
                                text-sm
                                text-blue-100
                            "
                        >
                            Today's Earnings
                        </p>

                        <h2
                            className="
                                mt-2
                                text-4xl
                                font-black
                                tracking-tight
                            "
                        >
                            ₦
                            {earnings.toLocaleString()}
                        </h2>

                    </div>

                    {/* Bottom Stats */}

                    <div
                        className="
                            mt-7
                            grid
                            grid-cols-2
                            gap-3
                        "
                    >

                        <div
                            className="
                                rounded-2xl
                                bg-white/10
                                p-4
                                backdrop-blur
                            "
                        >

                            <Wallet
                                size={18}
                                className="mb-3"
                            />

                            <p
                                className="
                                    text-xs
                                    text-blue-100
                                "
                            >
                                Reward / Task
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-lg
                                    font-bold
                                "
                            >
                                ₦
                                {rewardPerTask.toLocaleString()}
                            </p>

                        </div>

                        <div
                            className="
                                rounded-2xl
                                bg-white/10
                                p-4
                                backdrop-blur
                            "
                        >

                            <Award
                                size={18}
                                className="mb-3"
                            />

                            <p
                                className="
                                    text-xs
                                    text-blue-100
                                "
                            >
                                Status
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-lg
                                    font-bold
                                "
                            >
                                {earnings > 0
                                    ? "Active"
                                    : "Ready"}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}