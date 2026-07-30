import { Star } from "lucide-react";

interface TierBadgeProps {
    tier: number;
}

const TIER_CONFIG = {
    0: {
        label: "INTERN",
        from: "#DDF1FF",
        to: "#55AEFF",
    },
    1: {
        label: "I",
        from: "#CFE7FF",
        to: "#3A9BFF",
    },
    2: {
        label: "II",
        from: "#BCDFFF",
        to: "#2B84E0",
    },
    3: {
        label: "III",
        from: "#9FD0FF",
        to: "#176FD4",
    },
    4: {
        label: "IV",
        from: "#84C2FF",
        to: "#0A57B8",
    },
} as const;

export default function TierBadge({
    tier,
}: TierBadgeProps) {
    const config =
        TIER_CONFIG[tier as keyof typeof TIER_CONFIG] ??
        TIER_CONFIG[0];

    return (
        <div
            className="
                relative
                flex
                h-28
                w-28
                items-center
                justify-center
                transition-transform
                duration-300
                hover:scale-105
            "
        >
            {/* Glow */}
            <div
                className="
                    absolute
                    inset-3
                    rounded-full
                    bg-blue-400/25
                    blur-xl
                "
            />

            {/* Badge */}
            <div
                className="
                    relative
                    flex
                    h-24
                    w-24
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[28px]
                    shadow-[0_18px_40px_rgba(0,102,255,0.28)]
                "
                style={{
                    background: `linear-gradient(135deg, ${config.from}, ${config.to})`,
                    clipPath:
                        "polygon(25% 6%,75% 6%,100% 50%,75% 94%,25% 94%,0% 50%)",
                }}
            >
                {/* Shine */}
                <div
                    className="
                        absolute
                        left-0
                        top-0
                        h-1/2
                        w-full
                        bg-gradient-to-b
                        from-white/45
                        to-transparent
                    "
                />

                {/* Border */}
                <div
                    className="
                        absolute
                        inset-1
                        rounded-[26px]
                        border
                        border-white/30
                    "
                    style={{
                        clipPath:
                            "polygon(25% 6%,75% 6%,100% 50%,75% 94%,25% 94%,0% 50%)",
                    }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                    {tier > 0 && (
                        <Star
                            size={18}
                            fill="white"
                            className="mb-1 text-white"
                        />
                    )}

                    <span
                        className={`
                            font-bold
                            text-white
                            ${
                                tier === 0
                                    ? "text-[10px] tracking-wider"
                                    : "text-xl"
                            }
                        `}
                    >
                        {config.label}
                    </span>
                </div>
            </div>
        </div>
    );
}