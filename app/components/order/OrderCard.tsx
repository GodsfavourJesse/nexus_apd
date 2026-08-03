"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

import { OrderItem } from "@/app/types/clientTypes/order.types";

interface OrderCardProps {
    item: OrderItem;
}

export default function OrderCard({
    item,
}: OrderCardProps) {
    return (
        <Link
            href={`/dashboard/order/${item.id}`}
            className="
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-sm
                transition
                active:scale-[0.98]
            "
        >
            <div className="relative aspect-square w-full bg-slate-50">
                {item.advertisement.thumbnailUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={item.advertisement.thumbnailUrl}
                        alt={item.advertisement.title}
                        className="h-full w-full object-contain p-3"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-xs text-slate-400">
                        No Image
                    </div>
                )}
            </div>

            <div className="p-3">
                <p className="truncate text-[18px] font-medium text-slate-900">
                    {item.advertisement.title}
                </p>

                <p className="text-sm font-light text-[#e02b2b]">
                    Commision: ₦{Number(item.reward).toLocaleString()}
                </p>


                <div className="mt-2 flex items-center justify-between">
                    <p className="text-[12px] text-slate-400 italic">Quantity 9999+</p>
                    {/* <span
                        className={`
                            rounded-full
                            px-2
                            py-1
                            text-[11px]
                            font-medium
                            ${
                                item.status === "completed"
                                    ? "bg-emerald-100 text-emerald-700"
                                    : item.status === "expired"
                                      ? "bg-red-100 text-red-700"
                                      : "bg-blue-100 text-blue-700"
                            }
                        `}
                    >
                        {item.status.replace("_", " ").toUpperCase()}
                    </span> */}

                    <button
                        type="button"
                        onClick={(e) => e.preventDefault()}
                        className="
                            flex
                            h-4
                            w-4
                            items-center
                            justify-center
                            rounded-full
                            bg-slate-900
                            text-white
                        "
                    >
                        <Plus size={10} />
                    </button>
                </div>
            </div>
        </Link>
    );
}