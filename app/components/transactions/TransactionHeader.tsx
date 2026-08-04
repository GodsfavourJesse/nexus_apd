"use client";

import { ArrowLeft, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TransactionHeader() {
    const router = useRouter();

    return (
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">

            <div className="mx-auto flex h-16 max-w-md items-center justify-between px-4">

                <button
                    onClick={() => router.back()}
                    className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        transition
                        hover:bg-slate-100
                    "
                >
                    <ArrowLeft size={22} />
                </button>

                <h1 className="text-lg font-bold text-slate-900">
                    Transactions
                </h1>

                <button
                    className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        transition
                        hover:bg-slate-100
                    "
                >
                    <Search size={21} />
                </button>

            </div>

        </header>
    );
}