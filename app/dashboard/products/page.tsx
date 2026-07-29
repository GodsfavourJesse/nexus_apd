"use client";

import EmptyProducts from "@/app/components/productComponents/EmptyProducts";
import MembershipBadge from "@/app/components/productComponents/MembershipBadge";
import ProductGrid from "@/app/components/productComponents/ProductGrid";
import ProductsHeader from "@/app/components/productComponents/ProductsHeader";
import ProductSkeleton from "@/app/components/productComponents/ProductSkeleton";
import { useProducts } from "@/app/hooks/productsHooks/useProducts";

export default function ProductsPage() {
    const { data: products = [], isLoading } = useProducts();

    return (
        <div className="flex min-h-full flex-col bg-slate-50 pb-10">
            <ProductsHeader />

            <div className="mt-4">
                <MembershipBadge />
            </div>

            <div className="mt-4 px-4">
                {isLoading ? (
                    <ProductSkeleton />
                ) : products.length === 0 ? (
                    <EmptyProducts />
                ) : (
                    <ProductGrid products={products} />
                )}
            </div>
        </div>
    );
}