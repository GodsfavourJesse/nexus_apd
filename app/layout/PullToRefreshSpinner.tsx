"use client";

import { Loader2 } from "lucide-react";

interface Props {
    progress: number;
    refreshing: boolean;
}

export default function PullToRefreshSpinner({
    progress,
    refreshing,
}: Props) {
    return (
        <div
            className="
                absolute
                left-1/2
                top-4
                -translate-x-1/2
                transition-all
                duration-200
            "
            style={{
                opacity: refreshing ? 1 : progress,
                transform: `translate(-50%, ${
                    refreshing ? 0 : -25 + progress * 25
                }px)`,
            }}
        >
            <div
                className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    shadow-md
                "
            >
                <Loader2
                    size={22}
                    className={
                        refreshing
                            ? "animate-spin text-sky-600"
                            : "text-slate-500"
                    }
                />
            </div>
        </div>
    );
}