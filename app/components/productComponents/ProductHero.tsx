"use client";

import { Product } from "@/app/types/product.types";

interface ProductHeroProps {
    product: Product;
}

export default function ProductHero({ product }: ProductHeroProps) {
    return (
        <div>
            {/* Banner — edge to edge, iOS hero image standard */}
            <div className="relative h-56 w-full bg-slate-100">
                {product.bannerUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={product.bannerUrl}
                        alt={product.title}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-sm text-slate-400">
                        No Banner
                    </div>
                )}
            </div>

            <div className="px-4 pt-4">
                <div className="flex items-start gap-3">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={product.thumbnailUrl}
                            alt={product.title}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5">
                        <h1 className="text-[22px] font-bold leading-tight tracking-tight text-slate-900">
                            {product.title}
                        </h1>
                        <p className="mt-1 text-[15px] leading-5 text-slate-500">
                            {product.shortDescription}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}