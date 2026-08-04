"use client";

import Link from "next/link";
import { ReceiptText } from "lucide-react";

import { ROUTES } from "@/app/constants/routes";

export default function TransactionPageEmpty() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">

            <div className="max-w-md text-center">

                <div
                    className="
                        mx-auto
                        flex
                        h-24
                        w-24
                        items-center
                        justify-center
                        rounded-full
                        bg-sky-100
                    "
                >
                    <ReceiptText
                        size={42}
                        className="text-sky-600"
                    />
                </div>

                <h1
                    className="
                        mt-8
                        text-2xl
                        font-bold
                        text-slate-900
                    "
                >
                    No Transactions Yet
                </h1>

                <p
                    className="
                        mt-4
                        text-sm
                        leading-7
                        text-slate-500
                    "
                >
                    Your deposits, withdrawals,
                    advertisement rewards,
                    referral commissions,
                    membership payments and every
                    wallet activity will appear here.
                </p>

                <Link
                    href={ROUTES.DASHBOARD}
                    className="
                        mt-8
                        inline-flex
                        rounded-xl
                        bg-sky-600
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-sky-700
                    "
                >
                    Back to Dashboard
                </Link>

            </div>

        </main>
    );
}