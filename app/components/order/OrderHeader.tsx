"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface OrderHeaderProps {
    title?: string;
}

export default function OrderHeader({ title = "Order" }: OrderHeaderProps) {
    const router = useRouter();

    return (
        <div className="relative flex h-16 items-center justify-center bg-gradient-to-b from-[#FFCB3D] to-[#FFA000] px-4">
            <button
                type="button"
                onClick={() => router.back()}
                className="absolute left-4 text-slate-900/80 transition hover:text-slate-900"
                aria-label="Go back"
            >
                <ArrowLeft size={22} />
            </button>

            <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
        </div>
    );
}