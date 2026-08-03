"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OrderDetailsHeader() {

    const router =
        useRouter();

    return (

        <header
            className="
                sticky
                top-0
                z-20
                border-b
                border-slate-200/70
                bg-white/90
                pt-[env(safe-area-inset-top)]
                backdrop-blur-xl
            "
        >

            <div
                className="
                    relative
                    flex
                    h-11
                    items-center
                    justify-center
                    px-2
                "
            >

                <button
                    type="button"
                    onClick={() => router.back()}
                    aria-label="Go back"
                    className="
                        absolute
                        left-1
                        flex
                        h-11
                        min-w-11
                        items-center
                        px-1.5
                        text-slate-900
                        active:opacity-40
                    "
                >
                    <ChevronLeft
                        size={26}
                        strokeWidth={2.25}
                    />
                </button>

                <h1
                    className="
                        text-[17px]
                        font-semibold
                        text-slate-900
                    "
                >
                    Order Details
                </h1>

            </div>

        </header>

    );

}