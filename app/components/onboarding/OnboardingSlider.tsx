"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ComponentType } from "react";

import { ROUTES } from "@/app/constants/routes";
import SavingsJarScene from "../ilustrations/SavingsJarScene";
import PaymentScene from "../ilustrations/PaymentScene";
import GrowthScene from "../ilustrations/GrowthScene";


interface Slide {
    illustration: ComponentType;
    title: string[];
    body: string;
}

const SLIDES: Slide[] = [
    {
        illustration: SavingsJarScene,
        title: ["Safe and Secure", "Worry-Free"],
        body: "Real Order, transparent processes, and escrowed payments — every step is designed to protect your safety.",
    },
    {
        illustration: PaymentScene,
        title: ["Easy Order Visible", "Rewards"],
        body: "Complete Order to earn instantly. Fast withdrawals supported — your time deserves greater value.",
    },
    {
        illustration: GrowthScene,
        title: ["One-Tap to Start", "Zero Learning Curve"],
        body: "Clear steps, simple submission, and automatic payouts — even beginners can start earning effortlessly.",
    },
];

export default function OnboardingSlider() {
    const router = useRouter();
    const [index, setIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);

    const isLast = index === SLIDES.length - 1;

    const goTo = (i: number) => {
        setIndex(Math.max(0, Math.min(SLIDES.length - 1, i)));
    };

    const handleNext = () => {
        if (isLast) {
            router.push(ROUTES.REGISTER);
        } else {
            goTo(index + 1);
        }
    };

    const handleSkip = () => {
        router.push(ROUTES.REGISTER);
    };

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;

        const delta = e.changedTouches[0].clientX - touchStartX.current;

        if (delta > 50) goTo(index - 1);
        else if (delta < -50) goTo(index + 1);

        touchStartX.current = null;
    };

    return (
        <div
            className="relative flex h-full flex-col overflow-hidden bg-white"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            {/* Skip */}
            {!isLast && (
                <button
                    type="button"
                    onClick={handleSkip}
                    className="absolute right-6 top-6 z-20 rounded-full bg-slate-200/70 px-4 py-1.5 text-sm text-slate-600 transition hover:bg-slate-300/70"
                >
                    Skip
                </button>
            )}

            {/* Illustration track */}
            <div className="relative flex-1 overflow-hidden">
                <div
                    className="flex h-full transition-transform duration-400 ease-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {SLIDES.map((slide, i) => {
                        const Illustration = slide.illustration;

                        return (
                            <div
                                key={i}
                                className="flex h-full w-full shrink-0 items-center justify-center px-10 pt-16"
                            >
                                <div className="h-64 w-64">
                                    <Illustration />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Decorative dashed swoosh, sits behind illustrations */}
                <svg
                    className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-40"
                    viewBox="0 0 400 500"
                    preserveAspectRatio="none"
                >
                    <ellipse cx="60" cy="220" rx="90" ry="60" stroke="#D1D5DB" strokeDasharray="4 5" fill="none" />
                    <ellipse cx="330" cy="140" rx="70" ry="45" stroke="#D1D5DB" strokeDasharray="4 5" fill="none" />
                </svg>
            </div>

            {/* Bottom panel */}
            <div className="relative overflow-hidden rounded-t-[48px] bg-gradient-to-b from-[#FFCB3D] to-[#FFA000] px-7 pb-8 pt-9">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-400 ease-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {SLIDES.map((slide, i) => (
                            <div key={i} className="w-full shrink-0 pr-4">
                                <h2 className=" text-[28px] font-bold leading-tight text-[#241B00]">
                                    {slide.title.map((line, j) => (
                                        <span key={j} className="block">
                                            {line}
                                        </span>
                                    ))}
                                </h2>

                                <p className="mt-4 text-[15px] leading-relaxed text-[#3A2E00]/85">
                                    {slide.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots + CTA */}
                <div className="mt-7 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        {SLIDES.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => goTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`h-2.5 rounded-full transition-all ${
                                    i === index
                                        ? "w-6 bg-slate-900"
                                        : "w-2.5 bg-white/60"
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={handleNext}
                        className="
                            rounded-full bg-slate-900 px-10 py-4
                            text-[15px] font-semibold text-white
                            shadow-[0_10px_24px_-6px_rgba(0,0,0,0.4)]
                            transition hover:bg-slate-800 active:scale-95
                        "
                    >
                        {isLast ? "Get started" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}