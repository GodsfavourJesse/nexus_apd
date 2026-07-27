"use client";

import { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";

interface PromotedNoticeProps {
    messages?: string[];
    intervalMs?: number;
}

const DEFAULT_MESSAGES = [
    "User 0******7316 promoted to 3-star member",
    "User 0******2841 promoted to 2-star member",
    "User 0******9053 promoted to 4-star member",
];

export default function PromotedNotice({
    messages = DEFAULT_MESSAGES,
    intervalMs = 3000,
}: PromotedNoticeProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (messages.length <= 1) return;

        const id = setInterval(() => {
            setIndex((i) => i + 1);
        }, intervalMs);

        return () => clearInterval(id);
    }, [messages.length, intervalMs]);

    // Loop back to 0 without an animated jump: once we've scrolled past
    // the duplicated first item, snap back instantly.
    const isWrapping = index === messages.length;

    useEffect(() => {
        if (!isWrapping) return;

        const id = setTimeout(() => setIndex(0), 500);
        return () => clearTimeout(id);
    }, [isWrapping]);

    return (
        <div className="flex h-16 items-center gap-3 rounded-2xl bg-[#E8F3FF] px-5">
            <Volume2
                size={22}
                className="shrink-0 text-[#2B84E0]"
                strokeWidth={1.8}
            />

            <div className="relative h-6 min-w-0 flex-1 overflow-hidden">
                <div
                    className="flex flex-col"
                    style={{
                        transform: `translateY(-${index * 1.5}rem)`,
                        transition: isWrapping
                            ? "none"
                            : "transform 500ms ease",
                    }}
                >
                    {messages.map((message, i) => (
                        <span
                            key={i}
                            className="flex h-6 items-center truncate font-serif text-[15px] text-[#2B84E0]"
                        >
                            {message}
                        </span>
                    ))}

                    {/* Duplicate of the first message for a seamless wrap */}
                    <span
                        className="flex h-6 items-center truncate font-serif text-[15px] text-[#2B84E0]"
                        aria-hidden="true"
                    >
                        {messages[0]}
                    </span>
                </div>
            </div>
        </div>
    );
}