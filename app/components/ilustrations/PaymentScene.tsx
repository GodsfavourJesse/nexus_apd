export default function PaymentScene() {
    return (
        <svg viewBox="0 0 300 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <g transform="translate(120,50) rotate(8)">
                <rect x="0" y="0" width="150" height="220" rx="18" fill="#FFFFFF" stroke="#1E1B3A" strokeWidth="3" />
                <rect x="60" y="185" width="30" height="10" rx="5" fill="#F1F1F1" stroke="#1E1B3A" strokeWidth="1.5" />
                <path d="M20 30h60M120 20h20" stroke="#1E1B3A" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

                <g transform="translate(15,25)">
                    <rect width="120" height="130" rx="6" fill="#F97316" />
                    <rect width="120" height="130" rx="6" fill="url(#grad1)" opacity="0.5" />
                    <path
                        d="M15 90c15-10 20 15 40 5s25-25 50-10v40H15V90z"
                        fill="#FFFFFF"
                        opacity="0.9"
                    />
                </g>
            </g>

            <g transform="translate(15,20) rotate(-12)">
                <rect x="0" y="0" width="110" height="70" rx="8" fill="#F3F4F6" stroke="#1E1B3A" strokeWidth="3" />
                <rect x="10" y="12" width="30" height="22" rx="3" fill="#FB923C" />
                <rect x="10" y="45" width="60" height="4" rx="2" fill="#D1D5DB" />
                <rect x="10" y="54" width="45" height="4" rx="2" fill="#D1D5DB" />
            </g>

            <ellipse cx="45" cy="130" rx="18" ry="13" fill="#EF4444" stroke="#1E1B3A" strokeWidth="2.5" transform="rotate(-10 45 130)" />
            <text x="45" y="135" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FFFFFF" transform="rotate(-10 45 130)">$</text>

            <ellipse cx="75" cy="160" rx="20" ry="14" fill="#F97316" stroke="#1E1B3A" strokeWidth="2.5" />
            <text x="75" y="166" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#FFFFFF">$</text>

            <ellipse cx="55" cy="185" rx="17" ry="12" fill="#FB923C" stroke="#1E1B3A" strokeWidth="2.5" transform="rotate(10 55 185)" />
            <text x="55" y="190" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#FFFFFF" transform="rotate(10 55 185)">$</text>

            <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FDBA74" />
                    <stop offset="100%" stopColor="#EA580C" />
                </linearGradient>
            </defs>
        </svg>
    );
}