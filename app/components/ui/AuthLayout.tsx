"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface AuthLayoutProps {
    title: string;
    heading: string;
    description: string;
    backHref?: string;
    children: React.ReactNode;
}

export default function AuthLayout({
    title,
    heading,
    description,
    backHref = "/",
    children,
}: AuthLayoutProps) {
    return (
        <main className="min-h-screen bg-[#F6F7FB]">

            {/* Hero */}

            <section
                className="
                    relative
                    overflow-hidden
                    rounded-b-[40px]
                    bg-[url('/images/background_3.jpg')]
                    bg-cover
                    bg-center
                "
            >
                {/* Glass Overlay */}

                <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/45 to-white/70 backdrop-blur-[2px]" />

                {/* Decorative */}

                <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

                <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

                <div className="relative z-10 px-6 pt-[max(env(safe-area-inset-top),20px)] pb-12">

                    {/* Top Bar */}

                    <div className="flex items-center justify-between">

                        <Link
                            href={backHref}
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/40
                                bg-white/50
                                shadow-sm
                                backdrop-blur-xl
                                transition
                                active:scale-95
                            "
                        >
                            <ArrowLeft
                                size={20}
                                className="text-slate-800"
                            />
                        </Link>

                        <h1 className="text-[17px] font-semibold tracking-tight text-slate-900">
                            {title}
                        </h1>

                        {/* Balance */}

                        <div className="h-11 w-11" />

                    </div>

                    {/* Hero Content */}

                    <div className="mt-12">

                        <span
                            className="
                                inline-flex
                                rounded-full
                                bg-blue-600/10
                                px-4
                                py-2
                                text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                text-blue-700
                            "
                        >
                            Welcome
                        </span>

                        <h2 className="mt-5 text-[34px] font-bold leading-tight tracking-tight text-slate-900">
                            {heading}
                        </h2>

                        <p className="mt-4 max-w-sm text-[15px] leading-7 text-slate-600">
                            {description}
                        </p>

                    </div>

                </div>

            </section>

            {/* Card */}

            <section className="-mt-7 relative z-20">

                <div
                    className="
                        rounded-t-[34px]
                        bg-white
                        px-1
                        pb-[calc(env(safe-area-inset-bottom)+30px)]
                        pt-2
                        shadow-[0_-10px_40px_rgba(15,23,42,0.06)]
                    "
                >
                    {children}
                </div>

            </section>

        </main>
    );
}