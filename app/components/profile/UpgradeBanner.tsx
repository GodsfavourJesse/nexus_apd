import Link from "next/link";
import { ChevronRight, ShieldEllipsis } from "lucide-react";

interface UpgradeBannerProps {
    href?: string;
}

export default function UpgradeBanner({
    href = "/dashboard/membership",
}: UpgradeBannerProps) {
    return (
        <Link
            href={href}
            className="
                group
                relative
                z-20
                mx-4
                flex
                items-center
                justify-between
                overflow-hidden
                rounded-[24px]
                border
                border-white/60
                bg-gradient-to-r
                from-slate-100
                via-slate-100/90
                to-slate-200
                px-5
                py-4
                backdrop-blur-xl
                ring-1
                ring-black/5
                shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]
            "
        >
            {/* Glass Highlight */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/65
                    via-white/15
                    to-transparent
                "
            />

            {/* Soft Light */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -right-8
                    -top-8
                    h-28
                    w-28
                    rounded-full
                    bg-white/35
                    blur-3xl
                "
            />

            {/* Left Content */}
            <div className="relative flex items-center gap-4">
                <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/60
                        bg-white/40
                        shadow-inner
                        backdrop-blur-md
                    "
                >
                    <ShieldEllipsis
                        size={28}
                        strokeWidth={1.7}
                        className="text-slate-600"
                    />
                </div>

                <div>
                    <h3 className="text-[17px] font-semibold tracking-tight text-slate-900">
                        Upgrade Position
                    </h3>

                    <p className="mt-1 text-[13px] leading-5 text-slate-500">
                        Upgrade to unlock more platform privileges.
                    </p>
                </div>
            </div>

            {/* Right Arrow */}
            <div
                className="
                    relative
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/60
                    bg-white/40
                    backdrop-blur-md
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:bg-white/60
                "
            >
                <ChevronRight
                    size={20}
                    className="text-slate-500"
                />
            </div>

            {/* Bottom Reflection */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-x-5
                    bottom-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/80
                    to-transparent
                "
            />
        </Link>
    );
}