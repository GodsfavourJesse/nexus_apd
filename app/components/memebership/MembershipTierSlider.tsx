"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import TierBadge from "./TierBadge";
import MembershipTierSlide from "./MembershipTierSlide";

import { MembershipTier } from "@/app/types/memebership.types";

interface MembershipTierSliderProps {
    tiers: MembershipTier[];
    onJoin?: (tierId: string) => void;
}

export default function MembershipTierSlider({
    tiers,
    onJoin,
}: MembershipTierSliderProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const [index, setIndex] = useState(0);

    function scrollToCard(i: number) {
        if (!scrollRef.current) return;

        const container = scrollRef.current;

        const clamped = Math.max(
            0,
            Math.min(tiers.length - 1, i),
        );

        const cardWidth =
            container.clientWidth + 20;

        container.scrollTo({
            left: clamped * cardWidth,
            behavior: "smooth",
        });

        setIndex(clamped);
    }

    function handleScroll() {
        if (!scrollRef.current) return;

        const container = scrollRef.current;

        const cardWidth =
            container.clientWidth + 20;

        const current = Math.round(
            container.scrollLeft / cardWidth,
        );

        if (current !== index) {
            setIndex(current);
        }
    }

    useEffect(() => {
        scrollToCard(0);
    }, []);

    return (
        <div className="w-full">
            {/* Card Slider */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="
                    flex
                    snap-x
                    snap-mandatory
                    gap-5
                    overflow-x-auto
                    scroll-smooth
                    scrollbar-none
                    px-2
                    pb-4
                "
            >
                {tiers.map((tier) => (
                    <div
                        key={tier.id}
                        className="
                            w-full
                            shrink-0
                            snap-center
                        "
                    >
                        {/* Premium Header */}
                        <div
                            className="
                                relative
                                overflow-hidden
                                rounded-[34px]
                                bg-gradient-to-br
                                from-[#8ED1FF]
                                via-[#4DA8FE]
                                to-[#148EFF]
                                px-6
                                pb-12
                                pt-8
                                shadow-xl
                            "
                        >
                            <div
                                className="
                                    absolute
                                    -right-10
                                    -top-10
                                    h-32
                                    w-32
                                    rounded-full
                                    bg-white/15
                                    blur-2xl
                                "
                            />

                            <div
                                className="
                                    absolute
                                    -left-10
                                    bottom-0
                                    h-24
                                    w-24
                                    rounded-full
                                    bg-white/10
                                    blur-xl
                                "
                            />

                            <div className="relative flex items-center justify-between">
                                <button
                                    type="button"
                                    onClick={() =>
                                        scrollToCard(index - 1)
                                    }
                                    disabled={index === 0}
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white/15
                                        text-white
                                        backdrop-blur-md
                                        disabled:opacity-30
                                    "
                                >
                                    <ChevronLeft size={20} />
                                </button>

                                <TierBadge
                                    tier={tier.tierIndex}
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        scrollToCard(index + 1)
                                    }
                                    disabled={
                                        index ===
                                        tiers.length - 1
                                    }
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white/15
                                        text-white
                                        backdrop-blur-md
                                        disabled:opacity-30
                                    "
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>

                            <h3
                                className="
                                    mt-5
                                    text-center
                                    text-xl
                                    font-bold
                                    text-white
                                "
                            >
                                {tier.name}
                            </h3>
                        </div>

                        {/* Body */}
                        <div
                            className="
                                -mt-8
                                rounded-[28px]
                                bg-white
                                p-2
                                shadow-[0_20px_45px_rgba(15,23,42,0.08)]
                            "
                        >
                            <MembershipTierSlide
                                tier={tier}
                                onJoin={onJoin}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className="mt-5 flex justify-center gap-2">
                {tiers.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollToCard(i)}
                        className={`
                            rounded-full
                            transition-all
                            ${
                                index === i
                                    ? "h-2 w-8 bg-[#2B84E0]"
                                    : "h-2 w-2 bg-slate-300"
                            }
                        `}
                    />
                ))}
            </div>
        </div>
    );
}