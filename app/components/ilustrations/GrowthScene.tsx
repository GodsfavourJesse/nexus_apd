export default function GrowthScene() {
    return (
        <svg viewBox="0 0 300 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <rect x="30" y="90" width="100" height="80" rx="6" fill="#FFFFFF" stroke="#1E1B3A" strokeWidth="2.5" />
            <circle cx="80" cy="130" r="26" fill="none" stroke="#1E1B3A" strokeWidth="2.5" />
            <path d="M80 104a26 26 0 010 52" fill="#F97316" />
            <path d="M80 104a26 26 0 0118 44" fill="#FDBA74" />

            <rect x="95" y="55" width="80" height="55" rx="6" fill="#FFFFFF" stroke="#1E1B3A" strokeWidth="2.5" />
            <circle cx="122" cy="80" r="9" fill="#F97316" />
            <circle cx="150" cy="80" r="9" fill="#FDBA74" />
            <path
                d="M131 80h10"
                stroke="#1E1B3A"
                strokeWidth="2"
                markerEnd="url(#arrow)"
                markerStart="url(#arrowStart)"
            />

            <rect x="150" y="70" width="120" height="110" rx="6" fill="#FFFFFF" stroke="#1E1B3A" strokeWidth="2.5" />
            <rect x="165" y="150" width="12" height="20" fill="#FDBA74" />
            <rect x="182" y="135" width="12" height="35" fill="#F97316" />
            <rect x="199" y="120" width="12" height="50" fill="#EF4444" />
            <rect x="216" y="105" width="12" height="65" fill="#F97316" />
            <rect x="233" y="95" width="12" height="75" fill="#FDBA74" />
            <rect x="160" y="176" width="100" height="6" rx="3" fill="#F3F4F6" />

            <path
                d="M120 170c15-25 45-45 65-40s35-5 55 5"
                fill="none"
                stroke="#1E1B3A"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <circle cx="240" cy="140" r="7" fill="#F97316" stroke="#1E1B3A" strokeWidth="2" />

            <g transform="translate(155,175)">
                <path
                    d="M40 90c-20-15-35-40-35-65 0-15 8-25 8-25l30 15-3 20 25-5c10 20 10 45 0 60"
                    fill="url(#personGrad)"
                    stroke="#1E1B3A"
                    strokeWidth="2.5"
                />
                <ellipse cx="18" cy="10" rx="10" ry="12" fill="#F3F4F6" stroke="#1E1B3A" strokeWidth="2" />
            </g>

            <rect x="200" y="150" width="30" height="36" rx="3" fill="#FFFFFF" stroke="#1E1B3A" strokeWidth="2.2" />
            <path d="M200 155l30-5" stroke="#1E1B3A" strokeWidth="1" opacity="0.3" />
            <text x="215" y="172" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#F97316">$</text>

            <defs>
                <linearGradient id="personGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F97316" />
                    <stop offset="100%" stopColor="#7C2D12" />
                </linearGradient>
                <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="#1E1B3A" />
                </marker>
                <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto-start-reverse">
                    <path d="M0,0 L6,3 L0,6 Z" fill="#1E1B3A" />
                </marker>
            </defs>
        </svg>
    );
}