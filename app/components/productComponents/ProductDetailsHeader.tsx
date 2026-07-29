"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProductDetailsHeader() {
    const router = useRouter();

    return (
        <header
            className="
                sticky top-0 z-20
                border-b border-slate-200/70
                bg-white/80 backdrop-blur-xl
                pt-[env(safe-area-inset-top)]
            "
        >
            <div className="flex h-11 items-center px-1">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="
                        flex h-11 min-w-11 items-center gap-0.5
                        px-1.5 text-[#199FFF] active:opacity-40
                    "
                    aria-label="Go back"
                >
                    <ChevronLeft size={26} strokeWidth={2.25} />
                    <span className="text-[17px]">Back</span>
                </button>
            </div>
        </header>
    );
}