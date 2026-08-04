"use client";

import { Loader2 } from "lucide-react";

export default function AppLoader() {
    return (
        <div
            className="
                fixed
                inset-0
                z-[9999]
                flex
                items-center
                justify-center
                bg-slate-50/95
                backdrop-blur-sm
            "
        >
            <div className="flex flex-col items-center gap-5">

                <div
                    className="
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-3xl
                        bg-white
                        shadow-lg
                    "
                >
                    <Loader2
                        size={34}
                        className="
                            animate-spin
                            text-sky-600
                        "
                    />
                </div>

                <p
                    className="
                        text-sm
                        font-medium
                        text-slate-500
                    "
                >
                    Loading...
                </p>

            </div>
        </div>
    );
}