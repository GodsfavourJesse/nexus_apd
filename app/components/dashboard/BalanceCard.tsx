"use client";

import { useState } from "react";
import {
    CreditCard,
    Eye,
    EyeOff,
    ArrowDownToLine,
    Plus,
} from "lucide-react";

import AvatarBadge from "@/app/components/dashboard/AvatarBadge";
import { useWalletStore } from "@/app/store/wallet.store";
import Link from "next/link";
export default function BalanceCard() {
    const [visible, setVisible] = useState(false);

    const wallet = useWalletStore(
        (state) => state.wallet
    );

    const balance = Number(
        wallet?.availableBalance ?? 0
    ).toLocaleString("en-NG", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return (
        <div
            className="
                relative
                overflow-hidden
                rounded-3xl
                border border-white/40
                bg-white/25
                p-5
                shadow-[0_10px_40px_-12px_rgba(0,0,0,0.25)]
                backdrop-blur-xl
            "
        >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/30 blur-3xl" />

            <div className="relative flex items-center gap-4">
                <AvatarBadge />

                <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
                            <CreditCard
                                size={16}
                                className="text-slate-600"
                            />

                            Account Balance
                        </div>

                        <button
                            type="button"
                            onClick={() =>
                                setVisible(
                                    (prev) => !prev
                                )
                            }
                            className="
                                flex h-8 w-8 items-center justify-center
                                rounded-full bg-white/40
                                text-slate-700
                                transition
                                hover:bg-white/60
                                hover:text-slate-900
                            "
                        >
                            {visible ? (
                                <Eye size={16} />
                            ) : (
                                <EyeOff size={16} />
                            )}
                        </button>
                    </div>

                    <p
                        className="
                            text-3xl
                            font-bold
                            tracking-tight
                            text-slate-900
                            transition-all
                            duration-300
                        "
                    >
                        <span className="mr-1.5 text-lg font-semibold text-slate-500">
                            NGN
                        </span>

                        {visible
                            ? balance
                            : "••••••"}
                    </p>
                </div>
            </div>

            {/* Actions */}
            <div className="relative mt-5 flex items-center gap-3 border-t border-white/40 pt-4">
                <Link
                    href="/dashboard/wallet/deposit"
                    className="
                        flex flex-1
                        items-center
                        justify-center
                        gap-1.5
                        rounded-full
                        bg-slate-900
                        py-2.5
                        text-sm
                        font-semibold
                        text-white
                        shadow-sm
                        transition
                        hover:bg-slate-800 cursor-pointer
                    "
                >
                    <Plus size={16} />
                    Deposit                        
                </Link>

                <Link
                    href="/dashboard/wallet/withdraw"
                    className="
                        flex flex-1
                        items-center
                        justify-center
                        gap-1.5
                        rounded-full
                        border
                        border-white/60
                        bg-white/30
                        py-2.5
                        text-sm
                        font-semibold
                        text-slate-800
                        transition
                        hover:bg-white/50 cursor-pointer
                    "
                >
                    <ArrowDownToLine size={16} />
                    Withdraw
                </Link>

            </div>
        </div>
    );
}