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
        href: ROUTES.MEMBERS,
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
                        tab.href === ROUTES.HOME
                            ? pathname === ROUTES.HOME
                            : pathname.startsWith(tab.href);

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
    className={`
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#4DA8FE]
        ring-8
        transition-all
        duration-300
        hover:scale-105
        ${
            active
                ? "scale-110 ring-white shadow-[0_18px_40px_rgba(77,168,254,.55)]"
                : "ring-white/70 shadow-[0_15px_30px_rgba(77,168,254,.35)]"
        }
    `}
>
    <Icon
        size={28}
        className={`
            text-white
            transition-transform
            duration-300
            ${active ? "scale-110" : ""}
        `}
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
                                        ? "text-[#4DA8FE]"
                                        : "text-[#6B7280]"
                                }
                            />

                            <span
                                className={`text-[11px] font-medium ${
                                    active
                                        ? "text-[#4DA8FE]"
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