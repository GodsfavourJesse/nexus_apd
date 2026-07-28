"use client";

import { useRef, useState } from "react";
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
    const [index, setIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);

    const active = tiers[index];

    function goTo(i: number) {
        setIndex(Math.max(0, Math.min(tiers.length - 1, i)));
    }

    function onTouchStart(e: React.TouchEvent) {
        touchStartX.current = e.touches[0].clientX;
    }

    function onTouchEnd(e: React.TouchEvent) {
        if (touchStartX.current === null) return;

        const delta = e.changedTouches[0].clientX - touchStartX.current;

        if (delta > 50) goTo(index - 1);
        else if (delta < -50) goTo(index + 1);

        touchStartX.current = null;
    }

    return (
        <div className="w-full">
            <div className="w-full flex flex-col items-center justify-center">
                <h1>Member</h1>

                {/* Header with badge */}
                <div
                    className="w-[90%]
                        relative overflow-hidden rounded-t-[28px] rounded-b-[50%]
                        bg-gradient-to-b from-[#7CC0FF] to-[#4DA8FE]
                        px-6 pb-10 pt-8 
                    "
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={() => goTo(index - 1)}
                            disabled={index === 0}
                            className="text-white/80 transition hover:text-white disabled:opacity-30"
                            aria-label="Previous tier"
                        >
                            <ChevronLeft size={28} strokeWidth={1.5} />
                        </button>

                        <TierBadge tier={active.tierIndex} />

                        <button
                            type="button"
                            onClick={() => goTo(index + 1)}
                            disabled={index === tiers.length - 1}
                            className="text-white/80 transition hover:text-white disabled:opacity-30"
                            aria-label="Next tier"
                        >
                            <ChevronRight size={28} strokeWidth={1.5} />
                        </button>
                    </div>

                    <h1 className="mt-3 text-center font-serif text-2xl font-bold italic text-slate-900">
                        {active.name}
                    </h1>
                </div>
            </div>

            {/* Body */}
            <div className="-mt-5 rounded-t-[24px] bg-white px-1 pb-1 pt-1 shadow-[0_-10px_30px_-15px_rgba(15,23,42,0.15)]">
                <MembershipTierSlide tier={active} onJoin={onJoin} />
            </div>

            {/* Dots */}
            <div className="mt-4 flex items-center justify-center gap-1.5">
                {tiers.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => goTo(i)}
                        aria-label={`Go to tier ${i + 1}`}
                        className={`
                            h-1.5 rounded-full transition-all
                            ${
                                i === index
                                    ? "w-5 bg-[#4DA8FE]"
                                    : "w-1.5 bg-slate-200"
                            }
                        `}
                    />
                ))}
            </div>
        </div>
    );
}