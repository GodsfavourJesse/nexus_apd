"use client";

import { Product } from "@/app/types/product.types";

interface Props {
    product: Product;
}

export default function ProductDescription({ product }: Props) {
    return (
        <section className="mx-4 rounded-2xl border border-slate-200 bg-white p-4">
            <h2 className="text-[17px] font-semibold text-slate-900">
                Description
            </h2>

            <p className="mt-2 whitespace-pre-line text-[15px] leading-6 text-slate-600">
                {product.fullDescription}
            </p>
        </section>
    );
}