"use client";

import { ROUTES } from "@/app/constants/routes";
import { useWalletStore } from "@/app/store/wallet.store";
import Link from "next/link";

// interface StatsCardProps {
//     onDeposit?: () => void;
//     onWithdraw?: () => void;
// }

export default function ProfileStatsCard() {
    const wallet = useWalletStore(
        (state) => state.wallet
    );

    const formatCurrency = (
        value?: string
    ) =>
        Number(value ?? 0).toLocaleString(
            "en-NG",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }
        );

    return (
        <section
            className="
                relative
                z-20
                mx-4
                -mt-5
                overflow-hidden
                rounded-[28px]
                border
                border-white/60
                bg-white/85
                p-5
                shadow-[0_16px_40px_rgba(15,23,42,0.10)]
                backdrop-blur-xl
            "
        >
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/60
                    via-white/20
                    to-transparent
                "
            />

            <div className="relative">

                {/* Top Stats */}
                <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-medium text-slate-400">
                            Account Balance
                        </p>

                        <h2 className="mt-2 mb-3 text-[16px] md:text-2xl font-bold tracking-tight text-slate-900">
                            ₦{formatCurrency(wallet?.availableBalance)}
                        </h2>

                        <Link
                            href={ROUTES.DEPOSIT}
                            className="
                                mt-4
                                w-full
                                px-8
                                rounded-xl
                                bg-[#4DA8FE]
                                py-2.5
                                text-sm
                                font-semibold
                                text-white
                                transition
                                hover:bg-[#2B84E0]
                                active:scale-95
                                cursor-pointer
                            "
                        >
                            Deposit
                        </Link>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-medium text-slate-400">
                            Total Income
                        </p>

                        <h2 className="mt-2 mb-3 text-[16px] md:text-2xl font-bold tracking-tight text-slate-900">
                            ₦{formatCurrency(wallet?.totalEarned)}
                        </h2>

                        <Link
                            href={ROUTES.WITHDRAWAL}
                            className="
                                mt-4
                                w-full
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                px-8
                                py-2.5
                                text-sm
                                font-semibold
                                text-slate-700
                                transition
                                active:scale-95
                            "
                        >
                            Withdraw
                        </Link>
                    </div>

                </div>

                {/* Mini Stats */}
                <div className="mt-5 grid grid-cols-4 gap-2">

                    <MiniStat
                        label="Withdrawals"
                        value={`₦${formatCurrency(
                            wallet?.totalWithdrawn
                        )}`}
                    />

                    <MiniStat
                        label="Deposited"
                        value={`₦${formatCurrency(
                            wallet?.totalDeposited
                        )}`}
                    />

                    <MiniStat
                        label="Held"
                        value={`₦${formatCurrency(
                            wallet?.heldBalance
                        )}`}
                    />

                    <MiniStat
                        label="Earned"
                        value={`₦${formatCurrency(
                            wallet?.totalEarned
                        )}`}
                    />

                </div>

            </div>
        </section>
    );
}

function MiniStat({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div
            className="
                rounded-2xl
                border
                border-slate-100
                bg-slate-50
                px-2
                py-3
                text-center
                transition
                hover:bg-slate-100
            "
        >
            <p
                className="
                    truncate
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-wide
                    text-slate-400
                "
            >
                {label}
            </p>

            <p
                className="
                    mt-1.5 text-[12px]
                    md:text-[15px]
                    font-semibold
                    text-slate-900
                "
            >
                {value}
            </p>
        </div>
    );
}