import OrderHeader from "@/app/components/order/OrderHeader";
import OrderStatsCard from "@/app/components/order/OrderStatsCard";
import ProductGrid from "@/app/components/order/ProductGrid";

// Replace with a real fetch from your order/product service
const PRODUCTS = [
    {
        id: "1",
        name: "Cosco Kids Pronto Trend Booster Seat",
        imageUrl: "/images/products/cosco-booster.png",
        commission: "150",
        quantity: "9999+",
    },
    {
        id: "2",
        name: "Holler The Glow Ritual Toner & Serum Duo",
        imageUrl: "/images/products/holler-glow.png",
        commission: "150",
        quantity: "9999+",
    },
    {
        id: "3",
        name: "Maelove Forever Firm Peptide Neck Treatment",
        imageUrl: "/images/products/maelove-firm.png",
        commission: "150",
        quantity: "9999+",
    },
    {
        id: "4",
        name: "InStyler 2 in 1 Hair Curling Iron",
        imageUrl: "/images/products/instyler-curler.png",
        commission: "150",
        quantity: "9999+",
    },
];

export default function OrderPage() {
    return (
        <main className="flex min-h-full flex-col bg-slate-50 pb-10">
            <OrderHeader />

            <OrderStatsCard
                todaysEarnings="0"
                remainingCount={4}
                totalCount={4}
                completedCount={0}
            />

            <ProductGrid
                products={PRODUCTS}
                onAdd={(id) => console.log("Add product", id)}
            />
        </main>
    );
}