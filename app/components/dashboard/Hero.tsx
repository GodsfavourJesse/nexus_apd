import { Settings } from "lucide-react";

import NotifyBar from "@/app/components/dashboard/NotifyBar";
import BalanceCard from "@/app/components/dashboard/BalanceCard";
import Link from "next/link";

interface HeroProps {
    name?: string;
}

export default function Hero({ name = "Internship Member" }: HeroProps) {

    return (
        <div className="relative overflow-hidden rounded-b-[40px] bg-[#FEC013] px-4 pb-8 pt-4">

            <div
                className="
                    absolute inset-0
                    bg-[url('/images/background_3.jpg')]
                    bg-cover
                    bg-center
                "
            />
            {/* Decorative wave */}
            <svg
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 w-full opacity-25"
                viewBox="0 0 400 150"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,90 C100,30 300,150 400,70"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                />
            </svg>

            <div className="relative z-10 flex flex-col gap-5 px-3">
                <Link
                    href="/dashboard/settings"
                    aria-label="Settings"
                    className="w-fit text-white/90 transition hover:text-white cursor-pointer"
                >
                    <Settings
                        size={26}
                        strokeWidth={1.75}
                    />
                </Link>

                <NotifyBar />

                <div>
                    <h1 className="text-5xl leading-[1.1] font-semibold text-white">
                        Hi, {name}
                    </h1>

                    <p className="mt-4 text-[20px] font-medium text-white/90">
                        Welcome to <span className="font-bold">PXES</span>,
                        Start your work journey!
                    </p>
                </div>

                <BalanceCard />
            </div>
        </div>
    );
}