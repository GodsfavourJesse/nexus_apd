import ProductCard from "@/app/components/productComponents/ProductCard";
import { Product } from "@/app/types/product.types";

interface Props {
    products: Product[];
}

export default function ProductGrid({ products }: Props) {
    return (
        <div className="flex flex-col gap-2.5">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}