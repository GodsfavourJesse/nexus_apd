import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import RegisterForm from "@/app/components/auth/RegisterForm";

export default function RegisterPage() {
    return (
        <main className="flex min-h-full flex-col bg-slate-50">
            {/* Hero header */}
            <header className="relative h-64 shrink-0 overflow-hidden bg-slate-900">
                {/* Background image */}
                <div
                    className="
                        absolute inset-0
                        bg-[url('/images/background.jpg')]
                        bg-cover
                        bg-center
                    "
                />

                {/* Gradient overlay for text contrast */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-b
                        from-white/20
                        via-white/10
                        to-white/40
                    "
                />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-8 pt-6">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="
                                flex h-10 w-10 items-center justify-center
                                rounded-full bg-white/15
                                backdrop-blur-md
                                transition hover:bg-white/25
                            "
                        >
                            <ArrowLeft className="h-5 w-5 text-black/70" />
                        </Link>

                        <h1 className="flex-1 text-center text-[18px] text-black/70 font-medium">
                            Register
                        </h1>

                        {/* Spacer to balance the back button so the title stays centered */}
                        <div className="h-10 w-10" />
                    </div>

                    <div className="px-6">
                        <h2 className="text-3xl font-medium text-black/70 tracking-tight">
                            PXES
                        </h2>
                        <p className="mt-4 mb-4 text-[16px] leading-relaxed text-black/70">
                            Provide your information to register your account
                        </p>
                    </div>
                </div>
            </header>

            {/* Body — overlaps the header slightly for a layered app feel */}
            <section className="relative -mt-6 flex-1 rounded-t-[2rem] bg-slate-50">
                <div
                    className="
                        rounded-t-[2rem]
                        border border-slate-200
                        bg-white
                        p-6
                        shadow-sm
                    "
                >
                    <Suspense fallback={<div>Loading...</div>}>
                        <RegisterForm />
                    </Suspense>
                </div>
            </section>
        </main>
    );
}