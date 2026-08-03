"use client";

import { Flame } from "lucide-react";

import { OrderItem } from "@/app/types/clientTypes/order.types";

interface OrderHeroProps {
    item: OrderItem;
}

const STATUS_STYLES: Record<string, string> = {
    completed: "bg-emerald-500 text-white",
    expired: "bg-red-500 text-white",
    pending: "bg-blue-500 text-white",
    under_review: "bg-amber-500 text-white",
};

export default function OrderHero({ item }: OrderHeroProps) {
    const imageSrc =
        item.advertisement.bannerUrl ?? item.advertisement.thumbnailUrl ?? "";

    const statusStyle =
        STATUS_STYLES[item.status] ?? "bg-slate-700 text-white";

    return (
        <div className="px-4 pt-4">
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-sm">
                {imageSrc ? (
                    <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={imageSrc}
                            alt={item.advertisement.title}
                            className="h-full w-full object-cover"
                        />

                        {/* Subtle bottom gradient so badges/overlays always read clearly */}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent" />
                    </>
                ) : (
                    <div className="flex h-full items-center justify-center text-sm text-slate-400">
                        No Image
                    </div>
                )}

                {/* Status badge — floats top-right over the image */}
                {item.status && (
                    <span
                        className={`
                            absolute right-3 top-3 rounded-full px-3 py-1
                            text-[11px] font-semibold capitalize shadow-sm
                            backdrop-blur-sm
                            ${statusStyle}
                        `}
                    >
                        {item.status.replace("_", " ")}
                    </span>
                )}

                {/* "Sold" badge — floats bottom-left over the gradient */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-slate-600 backdrop-blur-sm">
                    <Flame size={12} className="text-orange-500" />
                    999 sold
                </div>
            </div>

            {/* Title */}
            <h1 className="mt-5 text-[22px] font-bold leading-tight tracking-tight text-slate-900">
                {item.advertisement.title}
            </h1>

            {/* Earnings chip */}
            <div className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-[#EAF3FF] px-4 py-2.5">
                <span className="text-[13px] font-medium text-slate-500">
                    Order Earnings
                </span>
                <span className="text-[19px] font-bold text-[#2B84E0]">
                    ₦{Number(item.reward).toLocaleString()}
                </span>
            </div>
        </div>
    );
}