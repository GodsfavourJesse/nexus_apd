"use client";

import {
    ReceiptText,
} from "lucide-react";

export default function TransactionListPlaceholder() {

    return (

        <section
            className="
                rounded-3xl
                border
                border-dashed
                border-slate-300
                bg-white
                py-20
                text-center
            "
        >

            <div
                className="
                    mx-auto
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-slate-100
                "
            >

                <ReceiptText
                    size={34}
                    className="text-slate-400"
                />

            </div>

            <h3
                className="
                    mt-6
                    text-lg
                    font-bold
                    text-slate-900
                "
            >
                Transaction history
            </h3>

            <p
                className="
                    mx-auto
                    mt-3
                    max-w-xs
                    text-sm
                    leading-7
                    text-slate-500
                "
            >
                Your deposits, withdrawals, rewards, commissions and every wallet activity will appear here.
            </p>

        </section>

    );
}