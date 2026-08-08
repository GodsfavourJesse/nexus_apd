"use client";

import {
    Eye,
    ShieldCheck,
    Wallet,
} from "lucide-react";

interface Props {
    availableBalance?: string;
    heldBalance?: string;
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

export default function WalletBalanceCard({
    availableBalance = "0",
    heldBalance = "0",
}: Props) {

    return (

        <section>

            <div
                className="
                    relative
                    overflow-hidden
                    rounded-[32px]
                    bg-gradient-to-br
                    from-sky-600
                    via-sky-700
                    to-indigo-800
                    p-6
                    text-white
                    shadow-xl
                "
            >

                {/* Decorative Circles */}

                <div
                    className="
                        absolute
                        -right-12
                        -top-12
                        h-40
                        w-40
                        rounded-full
                        bg-white/10
                    "
                />

                <div
                    className="
                        absolute
                        -bottom-10
                        -left-10
                        h-32
                        w-32
                        rounded-full
                        bg-white/5
                    "
                />

                {/* Top */}

                <div className="relative flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <div
                            className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                                bg-white/15
                                backdrop-blur
                            "
                        >
                            <Wallet size={24} />
                        </div>

                        <div>

                            <p className="text-sm text-sky-100">
                                Available Balance
                            </p>

                            <div
                                className="
                                    mt-1
                                    inline-flex
                                    items-center
                                    gap-2
                                "
                            >
                                <ShieldCheck
                                    size={15}
                                    className="text-emerald-300"
                                />
                                <span
                                    className="
                                        text-xs
                                        font-medium
                                        text-sky-100
                                    "
                                >
                                    Wallet Active
                                </span>
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-white/10
                            backdrop-blur
                            transition
                            active:scale-95
                        "
                    >
                        <Eye size={20} />
                    </button>

                </div>

                {/* Balance */}
                <div className="relative mt-8">
                    <p
                        className="
                            text-3xl
                            font-bold
                            tracking-tight
                        "
                    >
                        {money(availableBalance)}
                    </p>
                    <p
                        className="
                            mt-2 text-[12px]
                            md:text-sm
                            text-sky-100
                        "
                    >
                        Funds available for spending and withdrawals
                    </p>
                </div>

                {/* Bottom */}

                <div
                    className="
                        relative
                        mt-8
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/10
                        p-4
                        backdrop-blur-sm
                    "
                >

                    <div className="flex items-center justify-between">

                        <div>

                            <p
                                className="
                                    text-xs
                                    uppercase
                                    tracking-wider
                                    text-sky-100
                                "
                            >
                                Held Balance
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[16px]
                                    font-semibold
                                "
                            >
                                {money(heldBalance)}
                            </p>

                        </div>

                        <div
                            className="
                                h-10
                                w-px
                                bg-white/20
                            "
                        />

                        <div className="text-right">

                            <p
                                className="
                                    text-xs
                                    uppercase
                                    tracking-wider
                                    text-sky-100
                                "
                            >
                                Currency
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[16px]
                                    font-semibold
                                "
                            >
                                NGN
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}