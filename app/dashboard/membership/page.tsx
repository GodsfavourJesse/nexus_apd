"use client";

import MembershipTierSlider from "@/app/components/memebership/MembershipTierSlider";
import { MembershipTier } from "@/app/types/memebership.types";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const TIERS: MembershipTier[] = [
    {
        id: "internship",
        tierIndex: 0,
        name: "Internship Member",
        isCurrent: true,
        isLocked: false,
        description:
            "The internship period for intern members is 4 days. Complete four orders every day. Reward: You will receive NGN150 for each completed order, totaling NGN600 per day.",
        orderQuota: {
            timeUnit: "Daily",
            orderQuota: 4,
            totalOrderRevenue: 600,
        },
    },
    {
        id: "1-star",
        tierIndex: 1,
        name: "1-star member",
        isCurrent: false,
        isLocked: true,
        price: 21600,
        currency: "NGN",
        description:
            "Number of promotion orders and commission income per day",
        orderQuota: {
            timeUnit: "Daily",
            orderQuota: 4,
            totalOrderRevenue: 720,
        },
        invitationCommissions: [
            { method: "Invite A to become a 1-star member", rate: "10.00%", incomeAmount: 2160 },
            { method: "A invite subordinate B to become a 1-star member", rate: "3.00%", incomeAmount: 648 },
            { method: "B invite subordinate C to become a 1-star member", rate: "1.00%", incomeAmount: 216 },
        ],
        orderCommissions: [
            { completionFrom: "Subordinate A completes the order", ratio: "3.00%", incomeAmount: 21.6 },
            { completionFrom: "Subordinate B completes the order", ratio: "2.00%", incomeAmount: 14.4 },
            { completionFrom: "Subordinate C completes the order", ratio: "1.00%", incomeAmount: 7.2 },
        ],
    },
    {
        id: "2-star",
        tierIndex: 2,
        name: "2-star member",
        isCurrent: false,
        isLocked: true,
        price: 64800,
        currency: "NGN",
        description:
            "Number of promotion orders and commission income per day",
        orderQuota: {
            timeUnit: "Daily",
            orderQuota: 8,
            totalOrderRevenue: 2160,
        },
        invitationCommissions: [
            { method: "Invite A to become a 2-star member", rate: "10.00%", incomeAmount: 6480 },
            { method: "A invite subordinate B to become a 2-star member", rate: "3.00%", incomeAmount: 1944 },
            { method: "B invite subordinate C to become a 2-star member", rate: "1.00%", incomeAmount: 648 },
        ],
        orderCommissions: [
            { completionFrom: "Subordinate A completes the order", ratio: "3.00%", incomeAmount: 64.8 },
            { completionFrom: "Subordinate B completes the order", ratio: "2.00%", incomeAmount: 43.2 },
            { completionFrom: "Subordinate C completes the order", ratio: "1.00%", incomeAmount: 21.6 },
        ],
    },
    {
        id: "3-star",
        tierIndex: 3,
        name: "3-star members",
        isCurrent: false,
        isLocked: true,
        price: 207000,
        currency: "NGN",
        description:
            "Number of promotion orders and commission income per day",
        orderQuota: {
            timeUnit: "Daily",
            orderQuota: 15,
            totalOrderRevenue: 6900,
        },
        invitationCommissions: [
            { method: "Invite A to become a 3-star members", rate: "10.00%", incomeAmount: 20700 },
            { method: "A invite subordinate B to become a 3-star members", rate: "3.00%", incomeAmount: 6210 },
            { method: "B invite subordinate C to become a 3-star members", rate: "1.00%", incomeAmount: 2070 },
        ],
        orderCommissions: [
            { completionFrom: "Subordinate A completes the order", ratio: "3.00%", incomeAmount: 207 },
            { completionFrom: "Subordinate B completes the order", ratio: "2.00%", incomeAmount: 138 },
            { completionFrom: "Subordinate C completes the order", ratio: "1.00%", incomeAmount: 69 },
        ],
    },
    {
        id: "4-star",
        tierIndex: 4,
        name: "4-star members",
        isCurrent: false,
        isLocked: true,
        price: 612500,
        currency: "NGN",
        description:
            "Number of promotion orders and commission income per day",
        orderQuota: {
            timeUnit: "Daily",
            orderQuota: 25,
            totalOrderRevenue: 21875,
        },
        invitationCommissions: [
            { method: "Invite A to become a 4-star members", rate: "10.00%", incomeAmount: 61250 },
            { method: "A invite subordinate B to become a 4-star members", rate: "3.00%", incomeAmount: 18375 },
            { method: "B invite subordinate C to become a 4-star members", rate: "1.00%", incomeAmount: 6125 },
        ],
        orderCommissions: [
            { completionFrom: "Subordinate A completes the order", ratio: "3.00%", incomeAmount: 656.25 },
            { completionFrom: "Subordinate B completes the order", ratio: "2.00%", incomeAmount: 437.5 },
            { completionFrom: "Subordinate C completes the order", ratio: "1.00%", incomeAmount: 218.75 },
        ],
    },
];

export default function MembershipPage() {

    const router = useRouter();

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section
                className="
                    relative
                    overflow-visible
                    bg-gradient-to-br
                    from-[#8CCEFF]
                    via-[#4DA8FE]
                    to-[#0E8FFF]
                    px-6
                    pt-10
                    pb-32
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
                    tiers={TIERS}
                    // onJoin={(tierId) => console.log(tierId)}
                />
            </section>
        </main>
    );
}