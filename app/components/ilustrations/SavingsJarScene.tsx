export default function SavingsJarScene() {
    return (
        <svg viewBox="0 0 300 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <path
                d="M110 40h80v10c0 4-3 7-7 7h-66c-4 0-7-3-7-7V40z"
                fill="none"
                stroke="#1E1B3A"
                strokeWidth="3"
            />
            <path
                d="M100 57h100l6 150c0 8-6 14-14 14H108c-8 0-14-6-14-14l6-150z"
                fill="#FFFFFF"
                stroke="#1E1B3A"
                strokeWidth="3"
            />

            <g>
                <ellipse cx="140" cy="150" rx="20" ry="15" fill="#F97316" stroke="#1E1B3A" strokeWidth="2.5" />
                <text x="140" y="156" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#FFFFFF">$</text>

                <ellipse cx="170" cy="130" rx="20" ry="15" fill="#EF4444" stroke="#1E1B3A" strokeWidth="2.5" />
                <text x="170" y="136" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#FFFFFF">$</text>

                <ellipse cx="175" cy="160" rx="18" ry="13" fill="#FB923C" stroke="#1E1B3A" strokeWidth="2.5" />
                <text x="175" y="165" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FFFFFF">$</text>

                <ellipse cx="115" cy="175" rx="20" ry="15" fill="#EF4444" stroke="#1E1B3A" strokeWidth="2.5" />
                <text x="115" y="181" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#FFFFFF">$</text>

                <ellipse cx="150" cy="185" rx="18" ry="13" fill="#FB923C" stroke="#1E1B3A" strokeWidth="2.5" />
                <text x="150" y="190" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FFFFFF">$</text>

                <ellipse
                    cx="120"
                    cy="118"
                    rx="18"
                    ry="12"
                    fill="#FB923C"
                    stroke="#1E1B3A"
                    strokeWidth="2.5"
                    transform="rotate(-25 120 118)"
                />

                <ellipse
                    cx="185"
                    cy="88"
                    rx="17"
                    ry="12"
                    fill="#EF4444"
                    stroke="#1E1B3A"
                    strokeWidth="2.5"
                    transform="rotate(15 185 88)"
                />
                <text
                    x="185"
                    y="93"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="bold"
                    fill="#FFFFFF"
                    transform="rotate(15 185 88)"
                >
                    $
                </text>

                <ellipse cx="150" cy="50" rx="16" ry="11" fill="#F97316" stroke="#1E1B3A" strokeWidth="2.5" />
                <text x="150" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FFFFFF">$</text>
            </g>
        </svg>
    );
}