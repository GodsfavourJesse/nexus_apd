export default function HomePage() {
    return (
        <main className="flex flex-col px-6 py-10">

            {/* =========================================
                Hero Section
            ========================================== */}
            <section
                className="
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-8
                    text-center
                    shadow-sm
                "
            >
                <div
                    className="
                        mx-auto
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-slate-900
                        text-2xl
                        font-bold
                        text-white
                    "
                >
                    N
                </div>

                <h1 className="mt-6 text-3xl font-bold text-slate-900">
                    Nexus APD
                </h1>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                    A modern referral-powered advertising platform that
                    connects users, advertisers and administrators through a
                    secure and scalable ecosystem.
                </p>

                <div className="mt-8 flex gap-3">
                    <button
                        className="
                            flex-1
                            rounded-xl
                            bg-slate-900
                            py-3
                            font-medium
                            text-white
                        "
                    >
                        Get Started
                    </button>

                    <button
                        className="
                            flex-1
                            rounded-xl
                            border
                            border-slate-300
                            py-3
                            font-medium
                        "
                    >
                        Login
                    </button>
                </div>
            </section>

            {/* =========================================
                Status Card
            ========================================== */}
            <section className="mt-6 rounded-2xl bg-emerald-50 p-5">
                <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-emerald-500" />

                    <div>
                        <p className="font-semibold text-emerald-700">
                            System Status
                        </p>

                        <p className="text-sm text-emerald-600">
                            All services are operational.
                        </p>
                    </div>
                </div>
            </section>

            {/* =========================================
                Quick Statistics
            ========================================== */}
            <section className="mt-8">
                <h2 className="mb-4 text-lg font-semibold">
                    Platform Overview
                </h2>

                <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-2xl border p-5">
                        <p className="text-sm text-slate-500">
                            Members
                        </p>

                        <h3 className="mt-2 text-3xl font-bold">
                            2,500+
                        </h3>
                    </div>

                    <div className="rounded-2xl border p-5">
                        <p className="text-sm text-slate-500">
                            Advertisers
                        </p>

                        <h3 className="mt-2 text-3xl font-bold">
                            120
                        </h3>
                    </div>

                    <div className="rounded-2xl border p-5">
                        <p className="text-sm text-slate-500">
                            Campaigns
                        </p>

                        <h3 className="mt-2 text-3xl font-bold">
                            350+
                        </h3>
                    </div>

                    <div className="rounded-2xl border p-5">
                        <p className="text-sm text-slate-500">
                            Uptime
                        </p>

                        <h3 className="mt-2 text-3xl font-bold">
                            99.9%
                        </h3>
                    </div>

                </div>
            </section>

            {/* =========================================
                Features
            ========================================== */}
            <section className="mt-8">
                <h2 className="mb-4 text-lg font-semibold">
                    Features
                </h2>

                <div className="space-y-4">

                    {[
                        {
                            title: "Referral System",
                            description:
                                "Invite new members and grow your network using personalized referral links.",
                        },
                        {
                            title: "Secure Authentication",
                            description:
                                "JWT authentication with refresh tokens and role-based access control.",
                        },
                        {
                            title: "Real-time Dashboard",
                            description:
                                "Track campaigns, earnings and referrals from a clean mobile interface.",
                        },
                        {
                            title: "Admin Management",
                            description:
                                "Manage users, campaigns and platform activities from the admin dashboard.",
                        },
                    ].map((feature) => (
                        <div
                            key={feature.title}
                            className="
                                rounded-2xl
                                border
                                bg-white
                                p-5
                            "
                        >
                            <h3 className="font-semibold">
                                {feature.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                {feature.description}
                            </p>
                        </div>
                    ))}

                </div>
            </section>

            {/* =========================================
                Footer
            ========================================== */}
            <section className="mt-10 pb-10 text-center">
                <p className="text-sm text-slate-400">
                    Nexus APD v1.0.0
                </p>

                <p className="mt-2 text-xs text-slate-400">
                    Built with Next.js, Tailwind CSS and TypeScript.
                </p>
            </section>

        </main>
    );
}