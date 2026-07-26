import ProductCard from "@/app/components/order/ProductCard";

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    commission: string;
    quantity: string;
}

interface ProductGridProps {
    products: Product[];
    onAdd?: (id: string) => void;
}

export default function ProductGrid({ products, onAdd }: ProductGridProps) {
    return (
        <div className="mx-4 mt-5 grid grid-cols-2 gap-3">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    commission={product.commission}
                    quantity={product.quantity}
                    onAdd={() => onAdd?.(product.id)}
                />
            ))}
        </div>
    );
}