"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
    X,
    ChevronRight,
    LayoutDashboard,
    Users,
    BadgeDollarSign,
    CreditCard,
    Wallet,
    Package,
    ClipboardList,
    FileBarChart2,
    Settings,
    LogOut,
    Film,
} from "lucide-react";

import Cookies from "js-cookie";

interface AdminMenuSheetProps {
    open: boolean;
    onClose: () => void;
}

interface MenuItem {
    title: string;
    href: string;
    icon: React.ElementType;
}

const MANAGEMENT: MenuItem[] = [
    {
        title: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
    },
    {
        title: "Users",
        href: "/admin/users",
        icon: Users,
    },
    {
        title: "Upgrade Requests",
        href: "/admin/upgrade-requests",
        icon: BadgeDollarSign,
    },
    {
        title: "Withdrawal Requests",
        href: "/admin/withdrawals",
        icon: CreditCard,
    },
];

const BUSINESS: MenuItem[] = [
    {
        title: "Membership Plans",
        href: "/admin/membership-plans",
        icon: Package,
    },
    {
        title: "Daily Order Config",
        href: "/admin/daily-order-configs",
        icon: ClipboardList,
    },
    {
        title: "Transactions",
        href: "/admin/transactions",
        icon: Wallet,
    },
    {
        title: "Reports",
        href: "/admin/reports",
        icon: FileBarChart2,
    },
    {
        title: "Advertisements",
        href: "/admin/advertisements",
        icon: Film,
    },
    {
        title: "Settings",
        href: "/admin/settings",
        icon: Settings,
    },
];

export default function AdminMenuSheet({
    open,
    onClose,
}: AdminMenuSheetProps) {

    const pathname = usePathname();

    const router = useRouter();

    async function logout() {

        Cookies.remove("accessToken");

        Cookies.remove("refreshToken");

        router.replace("/login");
    }

    if (!open) {
        return null;
    }

    return (

        <>

            {/* Overlay */}

            <div
                onClick={onClose}
                className="
                    fixed
                    inset-0
                    z-[90]
                    bg-black/40
                    backdrop-blur-sm
                "
            />

            {/* Sheet */}

            <div
                className="
                    fixed
                    bottom-0
                    left-0
                    right-0
                    z-[100]
                    rounded-t-3xl
                    bg-white
                    shadow-2xl
                    animate-in
                    slide-in-from-bottom
                    duration-300
                    max-h-[85vh]
                    overflow-hidden
                    pb-[env(safe-area-inset-bottom)]
                "
            >

                {/* Handle */}

                <div className="flex justify-center py-3">

                    <div
                        className="
                            h-1.5
                            w-14
                            rounded-full
                            bg-gray-300
                        "
                    />

                </div>

                {/* Header */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        px-6
                        pb-4
                    "
                >

                    <div>

                        <h2 className="text-xl font-bold">

                            Admin Menu

                        </h2>

                        <p className="text-sm text-gray-500">

                            Manage the platform

                        </p>

                    </div>

                    <button
                        onClick={onClose}
                        className="
                            rounded-full
                            p-2
                            hover:bg-gray-100
                        "
                    >

                        <X size={22} />

                    </button>

                </div>

                <div
                    className="
                        overflow-y-auto
                        px-5
                        pb-8
                        max-h-[70vh]
                    "
                >

                    {/* MANAGEMENT */}

                    <SectionTitle>

                        Management

                    </SectionTitle>

                    {MANAGEMENT.map((item) => {

                        const Icon = item.icon;

                        const active =
                            pathname === item.href ||
                            pathname.startsWith(
                                item.href + "/",
                            );

                        return (

                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className={`
                                    mb-2
                                    flex
                                    items-center
                                    justify-between
                                    rounded-2xl
                                    p-4
                                    transition

                                    ${
                                        active
                                            ? "bg-black text-white"
                                            : "bg-gray-50 hover:bg-gray-100"
                                    }
                                `}
                            >

                                <div className="flex items-center gap-4">

                                    <Icon size={20} />

                                    <span className="font-medium">

                                        {item.title}

                                    </span>

                                </div>

                                <ChevronRight size={18} />

                            </Link>

                        );

                    })}

                    {/* BUSINESS */}

                    <SectionTitle>

                        Business

                    </SectionTitle>

                    {BUSINESS.map((item) => {

                        const Icon = item.icon;

                        const active =
                            pathname === item.href ||
                            pathname.startsWith(
                                item.href + "/",
                            );

                        return (

                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className={`
                                    mb-2
                                    flex
                                    items-center
                                    justify-between
                                    rounded-2xl
                                    p-4
                                    transition

                                    ${
                                        active
                                            ? "bg-black text-white"
                                            : "bg-gray-50 hover:bg-gray-100"
                                    }
                                `}
                            >

                                <div className="flex items-center gap-4">

                                    <Icon size={20} />

                                    <span className="font-medium">

                                        {item.title}

                                    </span>

                                </div>

                                <ChevronRight size={18} />

                            </Link>

                        );

                    })}

                    {/* LOGOUT */}

                    <button
                        onClick={logout}
                        className="
                            mt-8
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-3
                            rounded-2xl
                            bg-red-600
                            py-4
                            font-semibold
                            text-white
                            transition
                            hover:bg-red-700
                        "
                    >

                        <LogOut size={20} />

                        Logout

                    </button>

                </div>

            </div>

        </>

    );

}

function SectionTitle({
    children,
}: {
    children: React.ReactNode;
}) {

    return (

        <h3
            className="
                mb-3
                mt-6
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-gray-400
            "
        >

            {children}

        </h3>

    );

}