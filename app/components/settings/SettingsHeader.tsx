"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SettingsHeader() {

    const router =
        useRouter();

    return (
        <header
            className="
                sticky
                top-0
                z-20
                border-b
                border-slate-200
                bg-white/90
                backdrop-blur
            "
        >

            <div className="flex h-16 items-center px-4">

                <button
                    onClick={() => router.back()}
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        transition
                        hover:bg-slate-100
                    "
                >
                    <ChevronLeft size={22} />
                </button>

                <h1 className="ml-3 text-xl font-bold text-slate-900">
                    Settings
                </h1>

            </div>

        </header>
    );
}