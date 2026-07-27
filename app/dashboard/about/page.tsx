import Link from "next/link";
import {
    ChevronLeft,
    Building2,
    Globe,
    TrendingUp,
    Users,
    Sparkles,
} from "lucide-react";

import { ROUTES } from "@/app/constants/routes";

const sections = [
    {
        icon: Building2,
        title: "Who We Are",
        content:
            "PXES was founded in 2025 and is headquartered in Melbourne, Australia. We specialize in precision online marketing services for global e-commerce platforms. Through partnerships with leading marketplaces such as Amazon, eBay and Walmart, we provide customized marketing solutions that increase traffic, improve conversion rates and drive sustainable business growth. Since our establishment, we have helped brands including Labubu and Aje strengthen their visibility and become leaders within their industries.",
    },
    {
        icon: Globe,
        title: "The Market Opportunity",
        content:
            "The rapid growth of the internet and Artificial Intelligence (AI) has transformed global commerce. Traditional offline marketing is becoming increasingly expensive while delivering results that are difficult to measure. As consumer behavior shifts online, businesses require smarter, data-driven marketing solutions to remain competitive.",
    },
    {
        icon: TrendingUp,
        title: "Our Solution",
        content:
            "PXES provides a one-stop digital marketing platform designed to accelerate order growth for online merchants. Through entrusted marketing campaigns, businesses can reduce customer acquisition costs, expand globally, improve product visibility and achieve long-term, sustainable sales growth.",
    },
    {
        icon: Users,
        title: "How Members Earn",
        content:
            "PXES members contribute by completing promotional product orders for merchants. Every completed task helps merchants increase sales performance while generating service revenue for the platform. Sixty percent of the platform's service income is distributed to participating members as rewards, creating a win-win ecosystem for merchants and users alike.",
    },
];

export default function AboutCompany() {
    return (
        <main className="min-h-full bg-slate-50">

            {/* ===========================
                Header
            ============================ */}
            <header
                className="
                    sticky
                    top-0
                    z-20
                    border-b
                    border-slate-200
                    bg-white/80
                    backdrop-blur-xl
                "
            >
                <div className="flex h-16 items-center px-5">

                    <Link
                        href={ROUTES.DASHBOARD}
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-slate-100
                            transition
                            hover:bg-[#4DA8FE]
                            hover:text-white
                        "
                    >
                        <ChevronLeft size={20} />
                    </Link>

                    <h1 className="flex-1 text-center text-lg font-semibold text-slate-900">
                        Company Profile
                    </h1>

                    {/* Balance the layout */}
                    <div className="w-10" />

                </div>
            </header>

            <div className="space-y-6 p-5">

                {/* ===========================
                    Hero Card
                ============================ */}
                <section
                    className="
                        relative
                        overflow-hidden
                        rounded-3xl
                        bg-gradient-to-br
                        from-[#EAF4FF]
                        via-[#7CC0FF]
                        to-[#4DA8FE]
                        p-7
                        shadow-[0_20px_50px_-15px_rgba(77,168,254,.45)]
                    "
                >
                    {/* Decorative circles */}
                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/25 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/20 blur-xl" />

                    <div className="relative">

                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-white/30
                                px-3
                                py-1.5
                                backdrop-blur
                            "
                        >
                            <Sparkles
                                size={15}
                                className="text-white"
                            />

                            <span className="text-xs font-semibold text-slate-900">
                                About PXES
                            </span>
                        </div>

                        <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900">
                            Building the Future of
                            <br />
                            E-Commerce Marketing
                        </h2>

                        <p className="mt-4 max-w-sm text-sm leading-7 text-slate-800">
                            Helping merchants grow faster through intelligent
                            digital marketing, global partnerships and an
                            innovative reward ecosystem.
                        </p>

                        {/* Quick stats */}
                        <div className="mt-6 flex gap-6 border-t border-white/30 pt-5">
                            <div>
                                <p className="text-lg font-bold text-slate-900">
                                    2025
                                </p>
                                <p className="text-xs text-slate-800/80">
                                    Founded
                                </p>
                            </div>

                            <div>
                                <p className="text-lg font-bold text-slate-900">
                                    3+
                                </p>
                                <p className="text-xs text-slate-800/80">
                                    Global Marketplaces
                                </p>
                            </div>

                            <div>
                                <p className="text-lg font-bold text-slate-900">
                                    60%
                                </p>
                                <p className="text-xs text-slate-800/80">
                                    Revenue Shared
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ===========================
                    Company Information
                ============================ */}
                <section className="space-y-5">

                    {sections.map((section, i) => {
                        const Icon = section.icon;

                        return (
                            <article
                                key={section.title}
                                className="
                                    group
                                    rounded-3xl
                                    border
                                    border-slate-200
                                    bg-white
                                    p-6
                                    shadow-sm
                                    transition
                                    hover:border-[#4DA8FE]/30
                                    hover:shadow-md
                                "
                            >
                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            relative
                                            flex
                                            h-12
                                            w-12
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-[#4DA8FE]/10
                                            transition
                                            group-hover:bg-[#4DA8FE]/15
                                        "
                                    >
                                        <Icon
                                            size={22}
                                            className="text-[#2B84E0]"
                                        />

                                        <span
                                            className="
                                                absolute
                                                -right-1.5
                                                -top-1.5
                                                flex
                                                h-5
                                                w-5
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-slate-900
                                                text-[10px]
                                                font-bold
                                                text-white
                                            "
                                        >
                                            {i + 1}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900">
                                            {section.title}
                                        </h3>

                                        <div className="mt-1 h-1 w-12 rounded-full bg-[#4DA8FE]" />
                                    </div>

                                </div>

                                <p className="mt-5 text-[15px] leading-8 text-slate-600">
                                    {section.content}
                                </p>
                            </article>
                        );
                    })}

                </section>

                {/* ===========================
                    Bottom Card
                ============================ */}
                <section
                    className="
                        relative
                        overflow-hidden
                        rounded-3xl
                        bg-slate-900
                        p-7
                        text-white
                    "
                >
                    <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#4DA8FE]/20 blur-3xl" />

                    <h3 className="relative text-xl font-semibold">
                        Our Mission
                    </h3>

                    <div className="relative mt-2 h-1 w-12 rounded-full bg-[#4DA8FE]" />

                    <p className="relative mt-5 text-sm leading-7 text-slate-300">
                        To empower businesses worldwide with innovative digital
                        marketing solutions while creating meaningful earning
                        opportunities for our growing global community of
                        members.
                    </p>
                </section>

            </div>

        </main>
    );
}