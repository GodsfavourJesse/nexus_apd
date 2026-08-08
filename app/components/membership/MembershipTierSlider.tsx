"use client";

import { useEffect, useRef, useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import TierBadge from "./TierBadge";
import MembershipTierSlide from "./MembershipTierSlide";

import { MembershipTier } from "@/app/types/clientTypes/membership.types";

interface MembershipTierSliderProps {
    tiers: MembershipTier[];
    onJoin?: (slug: string) => void;
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

        const cardWidth = container.clientWidth + 20;

        container.scrollTo({
            left: clamped * cardWidth,
            behavior: "smooth",
        });

        setIndex(clamped);
    }

    function handleScroll() {
        if (!scrollRef.current) return;

        const container = scrollRef.current;

        const cardWidth = container.clientWidth + 20;

        const current = Math.round(
            container.scrollLeft / cardWidth,
        );

        if (current !== index) {
            setIndex(current);
        }
    }

    useEffect(() => {
        if (tiers.length > 0) {
            scrollToCard(0);
        }
    }, [tiers.length]);

    if (tiers.length === 0) {
        return null;
    }

    return (
        <div className="w-full">
            {/* =====================================================
                CARD SLIDER
            ===================================================== */}
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
                    px-1
                    pb-6
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
                        {/* =================================================
                            BLUE MEMBERSHIP HEADER
                        ================================================= */}
                        <div
                            className="
                                relative
                                z-0
                                overflow-hidden
                                rounded-[34px]
                                bg-gradient-to-br
                                from-[#8ED1FF]
                                via-[#4DA8FE]
                                to-[#148EFF]
                                px-6
                                pb-20
                                pt-8
                                shadow-xl
                            "
                        >
                            {/* Top Glow */}
                            <div
                                className="
                                    pointer-events-none
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

                            {/* Bottom Glow */}
                            <div
                                className="
                                    pointer-events-none
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

                            {/* Additional bottom light */}
                            {/* <div
                                className="
                                    pointer-events-none
                                    absolute
                                    bottom-0
                                    left-1/2
                                    h-20
                                    w-[80%]
                                    -translate-x-1/2
                                    rounded-full
                                    bg-white/10
                                    blur-3xl
                                "
                            /> */}

                            {/* =================================================
                                HEADER CONTENT
                            ================================================= */}
                            <div
                                className="
                                    relative
                                    z-10
                                    flex
                                    items-center
                                    justify-between
                                "
                            >
                                {/* Previous */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        scrollToCard(
                                            index - 1,
                                        )
                                    }
                                    disabled={
                                        index === 0
                                    }
                                    aria-label="Previous membership"
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white/15
                                        text-white
                                        backdrop-blur-md
                                        transition-all
                                        hover:bg-white/25
                                        active:scale-95
                                        disabled:opacity-30
                                    "
                                >
                                    <ChevronLeft
                                        size={22}
                                        strokeWidth={2.5}
                                    />
                                </button>

                                {/* Badge */}
                                <TierBadge
                                    name={tier.name}
                                    internship={
                                        tier.isInternship
                                    }
                                />

                                {/* Next */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        scrollToCard(
                                            index + 1,
                                        )
                                    }
                                    disabled={
                                        index ===
                                        tiers.length - 1
                                    }
                                    aria-label="Next membership"
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white/15
                                        text-white
                                        backdrop-blur-md
                                        transition-all
                                        hover:bg-white/25
                                        active:scale-95
                                        disabled:opacity-30
                                    "
                                >
                                    <ChevronRight
                                        size={22}
                                        strokeWidth={2.5}
                                    />
                                </button>
                            </div>

                            {/* Membership Name */}
                            <h3
                                className="
                                    relative
                                    z-10
                                    mt-5
                                    text-center
                                    text-xl
                                    font-bold
                                    text-white
                                    md:text-2xl
                                "
                            >
                                {tier.name}
                            </h3>
                        </div>

                        {/* =================================================
                            WHITE MEMBERSHIP CONTENT CARD

                            IMPORTANT:
                            - z-20 puts it ABOVE the blue header
                            - -mt-14 pulls it upward into the blue header
                            - rounded top corners create the "cut into"
                              stacked-paper appearance
                        ================================================= */}
                        <div
                            className="
                                relative
                                z-20
                                -mt-14
                                mx-1
                                rounded-[32px]
                                bg-white
                                shadow-[0_20px_50px_rgba(15,23,42,0.12)]
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

            {/* =====================================================
                SLIDER INDICATORS
            ===================================================== */}
            {tiers.length > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                    {tiers.map((tier, i) => (
                        <button
                            key={tier.id}
                            type="button"
                            onClick={() =>
                                scrollToCard(i)
                            }
                            aria-label={`Go to membership ${i + 1}`}
                            className={`
                                rounded-full
                                transition-all
                                duration-300
                                ${
                                    index === i
                                        ? "h-2 w-8 bg-[#2B84E0]"
                                        : "h-2 w-2 bg-slate-300"
                                }
                            `}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}