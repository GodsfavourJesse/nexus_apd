"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

import { Product } from "@/app/types/product.types";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    // These two fields aren't on your current Product type — see note
    // below the component. Falling back gracefully if absent.
    const commission = (product as any).commission ?? "150";
    const quantity = (product as any).quantity ?? "9999+";

    return (
        <Link
            href={`/dashboard/products/${product.id}`}
            className="
                overflow-hidden rounded-2xl bg-white
                shadow-sm transition active:scale-[0.98]
            "
        >
            <div className="relative aspect-square w-full bg-slate-50">
                {product.thumbnailUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={product.thumbnailUrl}
                        alt={product.title}
                        className="h-full w-full object-contain p-3"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-xs text-slate-400">
                        No Image
                    </div>
                )}
            </div>

            <div className="p-3">
                <p className="truncate text-[15px] text-slate-900">
                    {product.title}
                </p>

                <p className="mt-1 text-sm font-medium text-[#2B84E0]">
                    Commission: NGN{commission}
                </p>

                <div className="mt-1.5 flex items-center justify-between">
                    <p className="text-xs text-slate-500">
                        Quantity: {quantity}
                    </p>

                    <button
                        type="button"
                        onClick={(e) => e.preventDefault()}
                        className="
                            flex h-7 w-7 shrink-0 items-center justify-center
                            rounded-full bg-slate-900 text-white
                            transition active:scale-90
                        "
                    >
                        <Plus size={15} />
                    </button>
                </div>
            </div>
        </Link>
    );
}