"use client";

import { ChevronLeft, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

import ProductsStatsCard from "./ProductsStatsCard";
import { useProducts } from "@/app/hooks/productsHooks/useProducts";

export default function ProductsHeader() {
    const router = useRouter();

    return (
        <header
            className=" h-60
                relative isolate overflow-visible
                bg-[#0A74F3]
                px-5
                pt-6
                pb-20
            "
        >
            {/* Decorative background */}
            <div
                className="
                    absolute
                    -right-24
                    -top-24
                    h-[100%]
                    w-72
                    rounded-full
                    bg-white/15
                    blur-3xl
                "
            />

            <div
                className="
                    absolute
                    -left-20
                    top-24
                    h-[100%]
                    w-60
                    rounded-full
                    bg-cyan-300/20
                    blur-[120px]
                "
            />

            <div
                className="
                    absolute
                    right-10
                    top-20
                    h-50
                    w-20
                    rounded-full
                    border
                    border-white/15
                "
            />

            {/* Content */}
            <div className="relative z-20">

                {/* Top Navigation */}
                <div className="flex items-center justify-between">

                    <button
                        type="button"
                        onClick={() => router.back()}
                        aria-label="Go back"
                        className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-white/20
                            text-white
                            backdrop-blur-xl
                            transition-all
                            active:scale-95
                        "
                    >
                        <ChevronLeft
                            size={22}
                            strokeWidth={2.5}
                        />
                    </button>

                    <span
                        className="
                            inline-flex
                            rounded-full
                            bg-white/20
                            px-4
                            py-1.5
                            text-xs
                            font-semibold
                            tracking-wide
                            text-white
                            backdrop-blur-xl
                        "
                    >
                        PRODUCT STORE
                    </span>

                    <div
                        className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-white/20
                            backdrop-blur-xl
                        "
                    >
                        <ShoppingBag
                            size={20}
                            className="text-white"
                        />
                    </div>

                </div>

                

            </div>

            {/* ===== Bottom Blend ===== */}

            {/* Large blue glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-24
                    left-1/2
                    h-56
                    w-[140%]
                    -translate-x-1/2
                    rounded-full
                    bg-[#67B7FF]/45
                    blur-[120px]
                "
            />

            {/* White blur that melts into page */}
            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[-120px]
                    left-0
                    h-40
                    w-full
                    bg-white
                    blur-[100px]
                "
            />

            {/* Smooth fade */}
            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[-2px]
                    left-0
                    h-32
                    w-full
                    bg-gradient-to-b
                    from-transparent
                    via-white/30
                    to-white
                "
            />
        </header>
    );
}