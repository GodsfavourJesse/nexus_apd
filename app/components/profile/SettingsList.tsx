import Link from "next/link";
import {
    LucideIcon,
    Award,
    ShieldCheck,
    FileSignature,
    FileText,
    Compass,
    ChevronRight,
    Wallet,
} from "lucide-react";

interface SettingsItem {
    icon: LucideIcon;
    label: string;
    href: string;
}

const ITEMS: SettingsItem[] = [
    {
        icon: Wallet,
        label: "Transaction history",
        href: "/transaction-history",
    },
    {
        icon: Award,
        label: "Registration Certificate",
        href: "/registration-certificate",
    },
    {
        icon: ShieldCheck,
        label: "Account Security",
        href: "/security",
    },
    {
        icon: FileSignature,
        label: "Privacy Policy",
        href: "/privacy-policy",
    },
    {
        icon: FileText,
        label: "Electronic Contract",
        href: "/electronic-contract",
    },
    {
        icon: Compass,
        label: "APP Download",
        href: "/app-download",
    },
];

export default function SettingsList() {
    return (
        <section
            className="
                mx-4
                mt-5
                overflow-hidden
                rounded-[28px]
                border
                border-white/70
                bg-white/80
                shadow-[0_12px_35px_rgba(15,23,42,0.08)]
                backdrop-blur-xl
            "
        >
            {ITEMS.map((item, index) => {
                const Icon = item.icon;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="
                            group
                            relative
                            flex
                            items-center
                            gap-4
                            px-5
                            py-4
                            transition-all
                            duration-300
                            hover:bg-slate-50/80
                            active:scale-[0.985]
                        "
                    >
                        {/* Divider */}
                        {index !== ITEMS.length - 1 && (
                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-[72px]
                                    right-5
                                    h-px
                                    bg-slate-100
                                "
                            />
                        )}

                        {/* Icon */}
                        <div
                            className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-slate-100
                                bg-gradient-to-b
                                from-white
                                to-slate-50
                                shadow-sm
                            "
                        >
                            <Icon
                                size={21}
                                strokeWidth={1.8}
                                className="text-slate-700"
                            />
                        </div>

                        {/* Text */}
                        <div className="min-w-0 flex-1">
                            <p
                                className="
                                    truncate
                                    text-[15px]
                                    font-medium
                                    tracking-tight
                                    text-slate-800
                                "
                            >
                                {item.label}
                            </p>

                            <p
                                className="
                                    mt-0.5
                                    text-xs
                                    text-slate-400
                                "
                            >
                                Tap to view details
                            </p>
                        </div>

                        {/* Arrow */}
                        <ChevronRight
                            size={18}
                            strokeWidth={2}
                            className="
                                text-slate-300
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        />
                    </Link>
                );
            })}
        </section>
    );
}