"use client";

import { ChevronLeft, Bell } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WalletHeader() {
    const router = useRouter();

    return (
        <header
            className="
                sticky
                top-0
                z-30
                border-b
                border-slate-100
                bg-white/95
                backdrop-blur-xl
                supports-[backdrop-filter]:bg-white/80
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    max-w-md
                    items-center
                    justify-between
                    px-4
                    pb-4
                    pt-[max(16px,env(safe-area-inset-top))]
                "
            >
                {/* Left */}

                <div className="flex items-center gap-3">

                    <button
                        type="button"
                        onClick={() => router.back()}
                        aria-label="Go back"
                        className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-slate-200
                            bg-white
                            text-slate-700
                            shadow-sm
                            transition-all
                            duration-200
                            hover:border-sky-200
                            hover:bg-sky-50
                            hover:text-sky-600
                            active:scale-95
                        "
                    >
                        <ChevronLeft
                            size={22}
                            strokeWidth={2.3}
                        />
                    </button>

                    <div>

                        <h1
                            className="
                                text-xl
                                font-bold
                                tracking-tight
                                text-slate-900
                            "
                        >
                            Wallet
                        </h1>

                        <p
                            className="
                                mt-0.5
                                text-xs
                                text-slate-500
                            "
                        >
                            Manage your funds securely
                        </p>

                    </div>

                </div>

                {/* Right */}

                <button
                    type="button"
                    aria-label="Notifications"
                    className="
                        relative
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-200
                        bg-white
                        text-slate-700
                        shadow-sm
                        transition-all
                        duration-200
                        hover:border-sky-200
                        hover:bg-sky-50
                        hover:text-sky-600
                        active:scale-95
                    "
                >
                    <Bell
                        size={20}
                        strokeWidth={2.2}
                    />

                    {/* Placeholder Notification Dot */}

                    <span
                        className="
                            absolute
                            right-3
                            top-3
                            h-2.5
                            w-2.5
                            rounded-full
                            bg-red-500
                            ring-2
                            ring-white
                        "
                    />
                </button>

            </div>
        </header>
    );
}