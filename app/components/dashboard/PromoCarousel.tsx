"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
    ChevronRight,
    Sparkles,
    ShoppingBag,
    Gift,
} from "lucide-react";

interface Slide {
    badge: string;
    title: string;
    subtitle: string;
    image: string;
}

const SLIDES: Slide[] = [
    {
        badge: "Global Shopping",
        title: "Premium Products\nWorldwide",
        subtitle:
            "Discover thousands of authentic products from trusted global brands.",
        image: "/images/promo_items/cart_31.png",
    },
    {
        badge: "Flash Sale",
        title: "Earn While\nYou Shop",
        subtitle:
            "Invite friends, grow your referrals and unlock bigger rewards.",
        image: "/images/promo_items/gift_box.png",
    },
    {
        badge: "Exclusive Rewards",
        title: "Premium Member\nBenefits",
        subtitle:
            "Unlock cashback, bonuses and exclusive promotional campaigns.",
        image: "/images/promo_items/cart_1.png",
    },
];

const AUTOPLAY = 4500;

export default function PromoCarousel() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const touchStart = useRef<number | null>(null);

    useEffect(() => {
        if (paused) return;

        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % SLIDES.length);
        }, AUTOPLAY);

        return () => clearInterval(timer);
    }, [paused]);

    function goTo(i: number) {
        setIndex((i + SLIDES.length) % SLIDES.length);
    }

    function onTouchStart(e: React.TouchEvent) {
        touchStart.current = e.touches[0].clientX;
        setPaused(true);
    }

    function onTouchEnd(e: React.TouchEvent) {
        if (touchStart.current === null) return;

        const diff =
            e.changedTouches[0].clientX -
            touchStart.current;

        if (diff > 50) goTo(index - 1);

        if (diff < -50) goTo(index + 1);

        touchStart.current = null;

        setPaused(false);
    }

    return (
        <section className="w-full">
            <div
                className="
                    relative
                    overflow-hidden
                    rounded-[30px]
                    bg-gradient-to-br
                    from-[#FFF8D8]
                    via-[#FFE57A]
                    to-[#FDDA02]
                    shadow-[0_25px_60px_rgba(253,218,2,.35)]
                "
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                {/* Decorations */}

                <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-white/40 blur-3xl" />

                <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-orange-300/40 blur-2xl" />

                <div className="absolute right-6 top-5 rounded-full bg-white/40 p-2 backdrop-blur-xl">
                    <Sparkles
                        size={18}
                        className="text-yellow-700"
                    />
                </div>

                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${index * 100}%)`,
                    }}
                >
                    {SLIDES.map((slide, i) => (
                        <div
                            key={i}
                            className="
                                flex
                                min-w-full
                                items-center
                                justify-between
                                px-7
                                py-7
                            "
                        >
                            {/* LEFT */}

                            <div className="max-w-[55%]">
                                <span
                                    className="
                                        inline-flex
                                        items-center
                                        rounded-full
                                        bg-white/70
                                        px-3
                                        py-1
                                        text-[11px]
                                        font-semibold
                                        text-yellow-800
                                        backdrop-blur-xl
                                    "
                                >
                                    {slide.badge}
                                </span>

                                <h2 className="mt-4 whitespace-pre-line text-[26px] font-bold leading-tight text-slate-900">
                                    {slide.title}
                                </h2>

                                <p className="mt-3 text-[13px] leading-6 text-slate-700">
                                    {slide.subtitle}
                                </p>

                                <button
                                    className="
                                        mt-6
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        bg-slate-900
                                        px-5
                                        py-3
                                        text-sm
                                        font-semibold
                                        text-white
                                    "
                                >
                                    Explore

                                    <ChevronRight size={16} />
                                </button>
                            </div>

                            {/* RIGHT */}

                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-white/40 blur-2xl" />

                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    width={190}
                                    height={190}
                                    className="relative object-contain drop-shadow-2xl"
                                    priority={i === 0}
                                />

                                {/* Floating Cards */}

                                <div
                                    className="
                                        absolute
                                        -left-3
                                        top-5
                                        rounded-2xl
                                        bg-white/80
                                        px-3
                                        py-2
                                        shadow-lg
                                        backdrop-blur-xl
                                    "
                                >
                                    <ShoppingBag
                                        size={18}
                                        className="text-yellow-600"
                                    />
                                </div>

                                <div
                                    className="
                                        absolute
                                        -right-4
                                        bottom-5
                                        rounded-2xl
                                        bg-white/80
                                        px-3
                                        py-2
                                        shadow-lg
                                        backdrop-blur-xl
                                    "
                                >
                                    <Gift
                                        size={18}
                                        className="text-yellow-600"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Indicators */}

            <div className="mt-5 flex justify-center gap-2">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`
                            rounded-full
                            transition-all
                            duration-300
                            ${
                                i === index
                                    ? "h-2 w-8 bg-[#FDDA02]"
                                    : "h-2 w-2 bg-slate-300"
                            }
                        `}
                    />
                ))}
            </div>
        </section>
    );
}