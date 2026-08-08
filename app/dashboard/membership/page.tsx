"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import MembershipTierSlider from "@/app/components/membership/MembershipTierSlider";

import { ROUTES } from "@/app/constants/routes";
import { useMemberships } from "@/app/hooks/clientHooks/membershipHooks/useMemberships";

export default function MembershipPage() {
    const router = useRouter();

    const {
        data: tiers = [],
        isLoading,
        isError,
    } = useMemberships();

    // console.log(tiers);

    return (
        <main className=" bg-slate-50 overflow-x-hidden">
            {/* Hero */}
            <section
                className="
                    relative
                    overflow-hidden
                    bg-gradient-to-br
                    from-[#8CCEFF]
                    via-[#4DA8FE]
                    to-[#0E8FFF]
                    px-4
                    sm:px-6
                    pt-8
                    sm:scroll-pt-10
                    pb-24
                    sm:pb-32
                "
            >
                {/* Top Glow */}
                <div
                    className="
                        absolute
                        -right-20
                        -top-20
                        h-20
                        w-20
                        rounded-full
                        bg-white/20
                        blur-[90px]
                    "
                />

                {/* Left Glow */}
                <div
                    className="
                        absolute
                        -left-20
                        bottom-20
                        h-12
                        w-12
                        rounded-full
                        bg-white/15
                        blur-[90px]
                    "
                />

                {/* Floating Light */}
                <div
                    className="
                        absolute
                        right-10
                        top-24
                        h-8
                        w-8
                        rounded-full
                        bg-white/10
                        blur-2xl
                    "
                />

                {/* Content */}
                <div className="relative z-10">
                    {/* Back Button */}
                    <button
                        type="button"
                        onClick={() => router.back()}
                        aria-label="Go back"
                        className="
                            absolute
                            left-0
                            top-0
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/20
                            bg-white/15
                            text-white
                            backdrop-blur-xl
                            transition-all
                            duration-200
                            hover:bg-white/20
                            active:scale-95
                        "
                    >
                        <ArrowLeft size={20} strokeWidth={2.2} />
                    </button>

                    <div className="flex flex-col items-center text-center">
                        <span
                            className="
                                inline-flex
                                rounded-full
                                border
                                border-white/20
                                bg-white/20
                                px-4
                                py-2
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.18em]
                                text-white
                                backdrop-blur-xl
                            "
                        >
                            Membership Center
                        </span>

                        <h1 className="mt-5 text-3xl font-bold tracking-tight text-white">
                            Upgrade Your Membership
                        </h1>

                        <p
                            className="
                                mt-3
                                max-w-sm
                                text-sm
                                leading-6
                                text-blue-50/95
                            "
                        >
                            Unlock higher daily earnings, bigger referral rewards, and more order opportunities.
                        </p>
                    </div>
                </div>

                {/* Bottom Fog */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        -bottom-28
                        left-1/2
                        h-56
                        w-[160%]
                        -translate-x-1/2
                        rounded-full
                        bg-white
                        opacity-95
                        blur-[80px]
                    "
                />

                {/* Extra Fade */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        bottom-0
                        left-0
                        h-14
                        w-full
                        bg-gradient-to-b
                        from-transparent
                        via-white/25
                        to-white
                    "
                />
            </section>

            {/* Slider */}
            <section className="-mt-16 px-4 pb-10">
                <MembershipTierSlider
                        tiers={tiers}
                        onJoin={(slug) =>
                            router.push(
                                `${ROUTES.MEMBERS}/${slug}`
                            )
                        }
                    />
            </section>
        </main>
    );
}