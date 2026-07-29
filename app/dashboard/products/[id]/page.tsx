"use client";

import { useParams } from "next/navigation";

import { useProduct } from "@/app/hooks/productsHooks/useProduct";
import ProductDetailsHeader from "@/app/components/productComponents/ProductDetailsHeader";
import ProductHero from "@/app/components/productComponents/ProductHero";
import ProductDescription from "@/app/components/productComponents/ProductDescription";
import ProductRewardCard from "@/app/components/productComponents/ProductRewardCard";
import ProductAction from "@/app/components/productComponents/ProductAction";

export default function ProductDetailsPage() {
    const params = useParams();
    const productId = params.id as string;

    const { data: product, isLoading } = useProduct(productId);

    if (isLoading) {
        return (
            <div className="flex min-h-full flex-col bg-slate-50">
                <ProductDetailsHeader />
                <div className="flex flex-1 items-center justify-center text-sm text-slate-500">
                    Loading...
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex min-h-full flex-col bg-slate-50">
                <ProductDetailsHeader />
                <div className="flex flex-1 items-center justify-center text-sm text-slate-500">
                    Product not found.
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-full flex-col bg-slate-50">
            <ProductDetailsHeader />

            <div className="flex-1 overflow-y-auto pb-6">
                <ProductHero product={product} />

                <div className="mt-5 flex flex-col gap-4">
                    <ProductRewardCard />
                    <ProductDescription product={product} />
                </div>
            </div>

            <ProductAction product={product} />
        </div>
    );
}