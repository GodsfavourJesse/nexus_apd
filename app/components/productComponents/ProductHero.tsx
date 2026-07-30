"use client";

import { Product } from "@/app/types/product.types";

interface ProductHeroProps {
    product: Product;
}

export default function ProductHero({ product }: ProductHeroProps) {
    const commission = (product as any).commission ?? "150";
    const sold = (product as any).sold ?? (product as any).quantity ?? "9999";

    return (
        <div className="px-4 pt-4">
            <div className="overflow-hidden rounded-2xl bg-slate-50">
                {product.bannerUrl || product.thumbnailUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={product.bannerUrl || product.thumbnailUrl}
                        alt={product.title}
                        className="w-full object-cover"
                    />
                ) : (
                    <div className="flex h-56 items-center justify-center text-sm text-slate-400">
                        No Image
                    </div>
                )}
            </div>

            <h1 className="mt-4 text-[19px] font-medium leading-snug text-slate-900">
                {product.title}
            </h1>

            <div className="mt-1 flex items-center justify-between">
                <p className="text-[14px] font-semibold text-red-500">
                    Order Earnings：NGN {commission}
                </p>

                <p className="text-sm text-slate-400">Sold {sold}</p>
            </div>
        </div>
    );
}