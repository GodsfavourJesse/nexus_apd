export default function ShoppingBagScene() {
    return (
        <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
            <ellipse cx="100" cy="128" rx="70" ry="10" fill="#B8860015" />
            <path d="M55 62h60l6 60H49l6-60z" fill="#FFFFFF" />
            <path
                d="M68 62v-8c0-9 7-16 16-16s16 7 16 16v8"
                stroke="#FDDA02"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
            />
            <rect x="82" y="84" width="10" height="10" rx="2" fill="#FDDA02" />
            <rect x="98" y="84" width="10" height="10" rx="2" fill="#FDDA02" />
            <circle cx="150" cy="40" r="5" fill="#EBC200" />
            <circle cx="40" cy="90" r="4" fill="#EBC200" />
        </svg>
    );
}