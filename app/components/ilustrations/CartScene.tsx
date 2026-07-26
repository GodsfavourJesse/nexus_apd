export default function CartScene() {
    return (
        <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
            <ellipse cx="100" cy="132" rx="60" ry="8" fill="#B8860015" />
            <path
                d="M40 40h14l8 56h72l10-40H62"
                stroke="#FFFFFF"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="70" cy="112" r="8" fill="#FFFFFF" />
            <circle cx="120" cy="112" r="8" fill="#FFFFFF" />
            <rect x="66" y="50" width="50" height="30" rx="3" fill="#FDDA02" />
            <text
                x="91"
                y="70"
                textAnchor="middle"
                fontSize="12"
                fontWeight="bold"
                fill="#7A5E00"
                fontFamily="serif"
            >
                PXES
            </text>
            <circle cx="155" cy="90" r="4" fill="#EBC200" />
            <circle cx="35" cy="30" r="4" fill="#EBC200" />
        </svg>
    );
}