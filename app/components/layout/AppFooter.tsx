"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    Package2,
    ShoppingBag,
    Users,
    User,
    MessageCircle,
} from "lucide-react";

import { ROUTES } from "@/app/constants/routes";

const tabs = [
    {
        label: "Home",
        href: ROUTES.HOME,
        icon: Home,
    },
    {
        label: "Message",
        href: ROUTES.PRODUCTS,
        icon: MessageCircle,
    },
    {
        label: "Orders",
        href: ROUTES.ORDERS,
        icon: ShoppingBag,
        center: true,
    },
    {
        label: "Members",
        href: ROUTES.REFERRALS,
        icon: Users,
    },
    {
        label: "Profile",
        href: ROUTES.PROFILE,
        icon: User,
    },
];

export default function AppFooter() {

    const pathname = usePathname();

    return (

        <footer
            className="
                sticky
                bottom-0
                z-50
                bg-white
            "
        >

            <nav
                className="
                    relative
                    flex
                    h-20
                    items-center
                    justify-between
                    border
                    border-white/60
                    px-3
                    shadow-[0_15px_45px_rgba(15,23,42,.12)]
                "
            >

                {tabs.map((tab) => {

                    const active =
                        pathname === tab.href ||
                        pathname.startsWith(tab.href + "/");

                    const Icon = tab.icon;

                    if (tab.center) {

                        return (

                            <Link
                                key={tab.href}
                                href={tab.href}
                                className="
                                    -mt-12
                                    flex
                                    flex-1
                                    flex-col
                                    items-center
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-16
                                        w-16
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FDDA02]
                                        shadow-[0_15px_30px_rgba(253,218,2,.45)]
                                        ring-8
                                        ring-white/70
                                        transition-transform
                                        hover:scale-105
                                    "
                                >

                                    <Icon
                                        size={28}
                                        className="text-[#1F2937]"
                                    />

                                </div>

                                <span
                                    className="
                                        mt-2
                                        text-xs
                                        font-semibold
                                        text-[#1F2937]
                                    "
                                >
                                    {tab.label}
                                </span>

                            </Link>

                        );

                    }

                    return (

                        <Link
                            key={tab.href}
                            href={tab.href}
                            className="
                                flex
                                flex-1
                                flex-col
                                items-center
                                gap-2
                            "
                        >

                            <Icon
                                size={22}
                                strokeWidth={2}
                                className={
                                    active
                                        ? "text-[#FDDA02]"
                                        : "text-[#6B7280]"
                                }
                            />

                            <span
                                className={`text-[11px] font-medium ${
                                    active
                                        ? "text-[#FDDA02]"
                                        : "text-[#374151]"
                                }`}
                            >
                                {tab.label}
                            </span>

                        </Link>

                    );

                })}

            </nav>

        </footer>

    );

}