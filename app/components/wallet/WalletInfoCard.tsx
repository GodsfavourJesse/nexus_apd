"use client";

import {
    ShieldCheck,
    Calendar,
    Wallet,
    BadgeCheck,
    ChevronRight,
} from "lucide-react";

interface Props {
    walletId?: string;
    createdAt?: string;
    updatedAt?: string;
}

function formatDate(value?: string) {
    if (!value) return "--";

    return new Date(value).toLocaleDateString(
        "en-NG",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        },
    );
}

function shorten(value?: string) {
    if (!value) return "--";

    return `${value.slice(0, 8)}••••${value.slice(-6)}`;
}

export default function WalletInfoCard({
    walletId,
    createdAt,
    updatedAt,
}: Props) {

    const items = [
        {
            icon: Wallet,
            label: "Wallet ID",
            value: shorten(walletId),
        },
        {
            icon: BadgeCheck,
            label: "Status",
            value: "Active",
            badge: true,
        },
        {
            icon: ShieldCheck,
            label: "Currency",
            value: "Nigerian Naira (₦)",
        },
        {
            icon: Calendar,
            label: "Created",
            value: formatDate(createdAt),
        },
        {
            icon: Calendar,
            label: "Last Updated",
            value: formatDate(updatedAt),
        },
    ];

    return (

        <section className="space-y-4">

            <div>

                <h2 className="text-lg font-semibold text-slate-900">
                    Wallet Information
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Basic information about your wallet.
                </p>

            </div>

            <div
                className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                "
            >

                {items.map((item, index) => {

                    const Icon = item.icon;

                    return (

                        <div
                            key={item.label}
                            className={`
                                flex
                                items-center
                                justify-between
                                px-5
                                py-4
                                ${
                                    index !== items.length - 1
                                        ? "border-b border-slate-100"
                                        : ""
                                }
                            `}
                        >

                            <div className="flex items-center gap-4">

                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-slate-100
                                    "
                                >

                                    <Icon
                                        size={20}
                                        className="text-slate-600"
                                    />

                                </div>

                                <div>

                                    <p
                                        className="
                                            text-xs
                                            font-medium
                                            uppercase
                                            tracking-wide
                                            text-slate-400
                                        "
                                    >
                                        {item.label}
                                    </p>

                                    {item.badge ? (

                                        <span
                                            className="
                                                mt-1
                                                inline-flex
                                                rounded-full
                                                bg-emerald-100
                                                px-3
                                                py-1
                                                text-xs
                                                font-semibold
                                                text-emerald-700
                                            "
                                        >
                                            Active
                                        </span>

                                    ) : (

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                font-medium
                                                text-slate-900
                                            "
                                        >
                                            {item.value}
                                        </p>

                                    )}

                                </div>

                            </div>

                            <ChevronRight
                                size={18}
                                className="text-slate-300"
                            />

                        </div>

                    );

                })}

            </div>

            <div
                className="
                    rounded-3xl
                    border
                    border-sky-100
                    bg-sky-50
                    p-5
                "
            >

                <div className="flex gap-3">

                    <ShieldCheck
                        size={22}
                        className="mt-0.5 text-sky-600"
                    />

                    <div>

                        <h3 className="font-semibold text-sky-900">
                            Your wallet is secured
                        </h3>

                        <p
                            className="
                                mt-2
                                text-sm
                                leading-6
                                text-sky-700
                            "
                        >
                            Every wallet transaction is encrypted,
                            verified and securely recorded. Always
                            keep your login credentials private and
                            enable two-factor authentication whenever
                            it becomes available.
                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}