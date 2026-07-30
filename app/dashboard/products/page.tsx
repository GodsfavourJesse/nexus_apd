"use client";

import EmptyProducts from "@/app/components/productComponents/EmptyProducts";
import ProductGrid from "@/app/components/productComponents/ProductGrid";
import ProductsHeader from "@/app/components/productComponents/ProductsHeader";
import ProductsStatsCard from "@/app/components/productComponents/ProductsStatsCard";
import ProductSkeleton from "@/app/components/productComponents/ProductSkeleton";
import { useProducts } from "@/app/hooks/productsHooks/useProducts";

export default function ProductsPage() {
    const { data: products = [], isLoading } = useProducts();

    return (
        <div className="relative overflow-x-hidden min-h-full bg-slate-50 pb-12">
            <div className="w-full h-60">
                <ProductsHeader />
            </div>

            {/* Floating Card */}
            <div className="absolute top-30 w-full z-30">
                <ProductsStatsCard
                    todaysEarnings={0}
                    remaining={products.length}
                    totalQuota={products.length}
                    totalCompleted={products.length}
                    completedToday={0}
                />
            </div>

            {/* <ProductsStatsCard
                todaysEarnings={0}
                remaining={products.length}
                totalQuota={products.length}
                totalCompleted={products.length}
                completedToday={0}
            /> */}

            <main className="mt-20 px-4">
                {isLoading ? (
                    <ProductSkeleton />
                ) : products.length === 0 ? (
                    <EmptyProducts />
                ) : (
                    <ProductGrid products={products} />
                )}
            </main>
        </div>
    );
}