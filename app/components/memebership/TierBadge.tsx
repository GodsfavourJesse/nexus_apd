interface TierBadgeProps {
    tier: number; // 0 = internship, 1-4 = star tiers
}

const TIER_COLORS: Record<number, { light: string; dark: string }> = {
    0: { light: "#EAF4FF", dark: "#4DA8FE" },
    1: { light: "#DCEBFF", dark: "#3B93F0" },
    2: { light: "#CFE3FF", dark: "#2B84E0" },
    3: { light: "#C2DBFF", dark: "#1E6FD1" },
    4: { light: "#B5D2FF", dark: "#1259B8" },
};

export default function TierBadge({ tier }: TierBadgeProps) {
    const colors = TIER_COLORS[tier] ?? TIER_COLORS[0];

    return (
        <svg viewBox="0 0 100 100" className="h-24 w-24">
            <defs>
                <linearGradient
                    id={`tier-grad-${tier}`}
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop offset="0%" stopColor={colors.light} />
                    <stop offset="100%" stopColor={colors.dark} />
                </linearGradient>
            </defs>

            <polygon
                points="50,4 92,27 92,73 50,96 8,73 8,27"
                fill={`url(#tier-grad-${tier})`}
                stroke="#FFFFFF"
                strokeWidth="2"
            />

            <polygon
                points="50,4 92,27 50,50 8,27"
                fill="#FFFFFF"
                fillOpacity="0.25"
            />

            {tier === 4 ? (
                <path
                    d="M50 30l6 13 14 2-10 10 2 14-12-6-12 6 2-14-10-10 14-2z"
                    fill="#FFFFFF"
                />
            ) : (
                <polygon
                    points="50,24 76,50 50,76 24,50"
                    fill="#FFFFFF"
                    fillOpacity="0.9"
                />
            )}
        </svg>
    );
}