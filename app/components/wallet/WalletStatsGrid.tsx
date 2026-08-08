"use client";

import {
    ArrowDownLeft,
    ArrowUpRight,
    Wallet,
    TrendingUp,
} from "lucide-react";

interface Props {
    availableBalance?: string;
    totalEarned?: string;
    totalDeposited?: string;
    totalWithdrawn?: string;
}

function money(value?: string) {
    return Number(value ?? 0).toLocaleString(
        "en-NG",
        {
            style: "currency",
            currency: "NGN",
            minimumFractionDigits: 2,
        },
    );
}

export default function WalletStatsGrid({
    availableBalance = "0",
    totalEarned = "0",
    totalDeposited = "0",
    totalWithdrawn = "0",
}: Props) {

    const stats = [
        {
            title: "Available",
            value: money(availableBalance),
            subtitle: "Current wallet balance",
            icon: Wallet,
            iconBg: "bg-sky-100",
            iconColor: "text-sky-600",
        },
        {
            title: "Earned",
            value: money(totalEarned),
            subtitle: "Lifetime earnings",
            icon: TrendingUp,
            iconBg: "bg-emerald-100",
            iconColor: "text-emerald-600",
        },
        {
            title: "Deposited",
            value: money(totalDeposited),
            subtitle: "Funds added",
            icon: ArrowDownLeft,
            iconBg: "bg-violet-100",
            iconColor: "text-violet-600",
        },
        {
            title: "Withdrawn",
            value: money(totalWithdrawn),
            subtitle: "Total withdrawals",
            icon: ArrowUpRight,
            iconBg: "bg-rose-100",
            iconColor: "text-rose-600",
        },
    ];

    return (

        <section className="grid grid-cols-2 gap-4">

            {stats.map((item) => {

                const Icon = item.icon;

                return (

                    <div
                        key={item.title}
                        className="
                            rounded-3xl
                            border
                            border-slate-200
                            bg-white
                            p-4
                            shadow-sm
                            transition-all
                            duration-200
                            active:scale-[0.98]
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div
                                className={`
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    ${item.iconBg}
                                `}
                            >
                                <Icon
                                    size={20}
                                    className={item.iconColor}
                                />
                            </div>

                        </div>

                        <p
                            className="
                                mt-5
                                text-[11px]
                                font-semibold
                                uppercase
                                tracking-widest
                                text-slate-500
                            "
                        >
                            {item.title}
                        </p>

                        <h3
                            className="
                                mt-2 text-[16px]
                                md:text-lg
                                font-bold
                                leading-tight
                                text-slate-900
                            "
                        >
                            {item.value}
                        </h3>

                        <p
                            className="
                                mt-2 text-[12px]
                                md:text-xs
                                leading-5
                                text-slate-500
                            "
                        >
                            {item.subtitle}
                        </p>

                    </div>

                );

            })}

        </section>

    );

}