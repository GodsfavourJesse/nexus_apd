import { Star } from "lucide-react";

interface TierBadgeProps {
    name: string;
    internship: boolean;
}

interface TierBadgeConfig {
    from: string;
    to: string;
    label: string;
}

const TIER_BADGE_CONFIG: Record<number, TierBadgeConfig> = {
    0: {
        from: "#A7D9FF",
        to: "#4DA8FE",
        label: "INTERN",
    },

    1: {
        from: "#57B4FF",
        to: "#197FEF",
        label: "1",
    },

    2: {
        from: "#57B4FF",
        to: "#197FEF",
        label: "2",
    },

    3: {
        from: "#57B4FF",
        to: "#197FEF",
        label: "3",
    },

    4: {
        from: "#57B4FF",
        to: "#197FEF",
        label: "4",
    },
};

export default function TierBadge({
    name,
    internship,
}: TierBadgeProps) {
    const tier = internship
        ? 0
        : Number(name.match(/\d+/)?.[0] ?? 0);

    const config =
        TIER_BADGE_CONFIG[tier] ??
        TIER_BADGE_CONFIG[0];

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
                    bg-blue-400
                    blur-xl
                    opacity-40
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