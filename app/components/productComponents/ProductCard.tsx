"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Product } from "@/app/types/product.types";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Link
            href={`/dashboard/products/${product.id}`}
            className="
                flex items-center gap-3 rounded-2xl border
                border-slate-200 bg-white p-3
                transition active:scale-[0.98] active:bg-slate-50
            "
        >
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                {product.thumbnailUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={product.thumbnailUrl}
                        alt={product.title}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-[10px] text-slate-400">
                        No Image
                    </div>
                )}
            </div>

            <div className="min-w-0 flex-1">
                <h3 className="truncate text-[15px] font-semibold text-slate-900">
                    {product.title}
                </h3>
                <p className="mt-0.5 line-clamp-1 text-[13px] leading-5 text-slate-500">
                    {product.shortDescription}
                </p>
            </div>

            <ChevronRight
                size={18}
                className="shrink-0 text-slate-300"
                strokeWidth={2.25}
            />
        </Link>
    );
}