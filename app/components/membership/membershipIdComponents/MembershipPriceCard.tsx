interface MembershipPriceCardProps {
    price?: number;
}

export default function MembershipPriceCard({
    price,
}: MembershipPriceCardProps) {
    return (
        <section
            className="
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-slate-200
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05)]
            "
        >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-100/70 blur-2xl" />

            <div className="relative p-5">

                <div className="flex items-center justify-between">

                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1592FF]">
                            Investment
                        </p>

                        <h2 className="mt-1 text-lg font-bold text-slate-900">
                            Membership Cost
                        </h2>
                    </div>

                    <span
                        className="
                            rounded-full
                            bg-blue-50
                            px-3
                            py-1
                            text-[10px]
                            font-semibold
                            text-[#1592FF]
                        "
                    >
                        One-Time
                    </span>

                </div>

                <div
                    className="
                        mt-6
                        rounded-2xl
                        bg-gradient-to-br
                        from-[#1592FF]
                        to-[#2B84E0]
                        p-6
                        text-center
                        text-white
                    "
                >
                    <p className="text-xs uppercase tracking-wider text-blue-100">
                        Upgrade Fee
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        {price && price > 0
                            ? `₦${price.toLocaleString()}`
                            : "FREE"}
                    </h2>

                    <p className="mt-2 text-sm text-blue-100">
                        One-time payment to unlock this membership.
                    </p>
                </div>

                <div
                    className="
                        mt-5
                        rounded-2xl
                        border
                        border-blue-100
                        bg-blue-50/60
                        p-4
                    "
                >
                    <p className="text-sm font-semibold text-slate-900">
                        Important
                    </p>

                    <p className="mt-2 text-[12px] leading-6 text-slate-600">
                        Daily earnings depend on your daily order allocation.
                        You can view your order capacity and estimated daily
                        reward in the section below.
                    </p>
                </div>

            </div>
        </section>
    );
}