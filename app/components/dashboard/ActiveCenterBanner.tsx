import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ActiveCenterBannerProps {
    href?: string;
}

export default function ActiveCenterBanner({
    href = "/active-center",
}: ActiveCenterBannerProps) {
    return (
        <Link
            href={href}
            className="
                group relative flex h-32 w-full items-center justify-between
                overflow-hidden rounded-3xl
                bg-gradient-to-br from-[#1E2FBE] via-[#1631C9] to-[#0A1FA0]
                px-6
                shadow-[0_12px_30px_-10px_rgba(20,40,200,0.5)]
                transition
                hover:shadow-[0_16px_36px_-8px_rgba(20,40,200,0.6)]
            "
        >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -right-6 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-cyan-400/30 blur-3xl" />
            <div className="pointer-events-none absolute right-16 -top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

            {/* Text */}
            <div className="relative z-10">
                <h3 className="font-serif text-[26px] font-bold leading-tight text-white">
                    Active Center
                </h3>

                <span
                    className="
                        mt-2 inline-flex items-center gap-1.5
                        font-serif text-[15px] font-semibold text-white/90
                        transition group-hover:gap-2.5
                    "
                >
                    Go now
                    <ArrowRight size={16} />
                </span>
            </div>

            {/* Illustration */}
            <div className="relative z-10 h-full shrink-0">
                <TreasureIllustration />
            </div>
        </Link>
    );
}

function TreasureIllustration() {
    return (
        <svg
            width="160"
            height="128"
            viewBox="0 0 160 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-auto"
        >
            {/* Sparkles */}
            <circle cx="22" cy="30" r="2.5" fill="#7FD8FF" opacity="0.9" />
            <circle cx="14" cy="60" r="1.8" fill="#FFFFFF" opacity="0.7" />
            <circle cx="40" cy="14" r="1.5" fill="#FFFFFF" opacity="0.8" />
            <path
                d="M118 8l2.4 6.6L127 17l-6.6 2.4L118 26l-2.4-6.6L109 17l6.6-2.4L118 8z"
                fill="#FFD84D"
            />

            {/* Star */}
            <g transform="translate(96,26)">
                <path
                    d="M16 0l4.5 9.2 10.1 1.5-7.3 7.1 1.7 10-9-4.7-9 4.7 1.7-10-7.3-7.1 10.1-1.5L16 0z"
                    fill="#FFC93D"
                />
                <circle cx="12" cy="15" r="1.3" fill="#7A4B00" />
                <circle cx="20" cy="15" r="1.3" fill="#7A4B00" />
                <path
                    d="M11 20c2 2 6 2 8 0"
                    stroke="#7A4B00"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    fill="none"
                />
            </g>

            {/* Gift box */}
            <g transform="translate(38,52)">
                <rect x="0" y="14" width="30" height="24" rx="3" fill="#FF8FB1" />
                <rect x="0" y="14" width="30" height="8" fill="#FF6B98" />
                <rect x="12" y="8" width="6" height="30" fill="#FFD84D" />
                <path
                    d="M15 8c-4-2-8 0-6 4 2 3 6 0 6-4z"
                    fill="#FFD84D"
                />
                <path
                    d="M15 8c4-2 8 0 6 4-2 3-6 0-6-4z"
                    fill="#FFD84D"
                />
            </g>

            {/* Chest */}
            <g transform="translate(64,44)">
                <rect
                    x="0"
                    y="26"
                    width="80"
                    height="42"
                    rx="8"
                    fill="#3E5CE0"
                    stroke="#2740B8"
                    strokeWidth="2"
                />
                <path
                    d="M0 34c0-13 18-24 40-24s40 11 40 24"
                    fill="#4E6BF0"
                    stroke="#2740B8"
                    strokeWidth="2"
                />
                <rect x="0" y="30" width="80" height="6" fill="#2740B8" />
                <circle cx="40" cy="44" r="6" fill="#1E2FBE" stroke="#FFD84D" strokeWidth="2" />

                {/* Coins spilling out */}
                <circle cx="16" cy="24" r="7" fill="#FFD84D" stroke="#E0A600" strokeWidth="1.5" />
                <circle cx="30" cy="16" r="7" fill="#FFE27A" stroke="#E0A600" strokeWidth="1.5" />
                <circle cx="48" cy="18" r="7" fill="#FFD84D" stroke="#E0A600" strokeWidth="1.5" />
                <circle cx="62" cy="24" r="7" fill="#FFE27A" stroke="#E0A600" strokeWidth="1.5" />
            </g>

            {/* Flower accent */}
            <g transform="translate(126,92)">
                <circle cx="0" cy="8" r="5" fill="#FF6FA5" />
                <circle cx="8" cy="0" r="5" fill="#FF6FA5" />
                <circle cx="16" cy="8" r="5" fill="#FF6FA5" />
                <circle cx="8" cy="16" r="5" fill="#FF6FA5" />
                <circle cx="8" cy="8" r="4" fill="#FFD84D" />
            </g>
        </svg>
    );
}