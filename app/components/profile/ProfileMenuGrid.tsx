import Link from "next/link";
import { LucideIcon, UsersRound, CalendarDays, Briefcase, BarChart3 } from "lucide-react";

interface ProfileMenuItem {
    icon: LucideIcon;
    line1: string;
    line2?: string;
    href: string;
}

const ITEMS: ProfileMenuItem[] = [
    {
        icon: UsersRound,
        line1: "Team",
        line2: "Management",
        href: "/team-management",
    },
    {
        icon: CalendarDays,
        line1: "Financial",
        line2: "Records",
        href: "/financial-records",
    },
    {
        icon: Briefcase,
        line1: "Position",
        line2: "management",
        href: "/position-management",
    },
    {
        icon: BarChart3,
        line1: "Financial",
        line2: "Products",
        href: "/financial-products",
    },
];

export default function ProfileMenuGrid() {
    return (
        <div className="mx-4 mt-4 grid grid-cols-4 gap-x-2 gap-y-4 rounded-3xl bg-white p-5 shadow-sm">
            {ITEMS.map((item) => {
                const Icon = item.icon;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="group flex flex-col items-center gap-2 text-center no-underline"
                    >
                        <div
                            className="
                                flex h-14 w-14 items-center justify-center
                                rounded-2xl bg-[#FFF3D9]
                                transition group-hover:bg-[#FFE9B8]
                                group-active:scale-95
                            "
                        >
                            <Icon
                                size={24}
                                className="text-[#FF9A1F]"
                                strokeWidth={1.8}
                            />
                        </div>

                        <span className="flex h-8 flex-col justify-start text-xs font-medium leading-tight text-slate-700">
                            <span>{item.line1}</span>
                            <span>{item.line2 ?? "\u00A0"}</span>
                        </span>
                    </Link>
                );
            })}
        </div>
    );
}