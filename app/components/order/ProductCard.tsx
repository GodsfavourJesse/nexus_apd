import Image from "next/image";
import { Plus } from "lucide-react";

interface ProductCardProps {
    name: string;
    imageUrl: string;
    commission: string;
    quantity: string;
    currency?: string;
    onAdd?: () => void;
}

export default function ProductCard({
    name,
    imageUrl,
    commission,
    quantity,
    currency = "NGN",
    onAdd,
}: ProductCardProps) {
    return (
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="relative aspect-square w-full bg-slate-50">
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 500px) 50vw, 200px"
                />
            </div>

            <div className="p-3">
                <p className="truncate text-[15px] text-slate-900">{name}</p>

                <p className="mt-1 text-sm font-medium text-[#FF9A1F]">
                    Commission: {currency}
                    {commission}
                </p>

                <div className="mt-1.5 flex items-center justify-between">
                    <p className="text-xs text-slate-500">
                        Quantity: {quantity}
                    </p>

                    <button
                        type="button"
                        onClick={onAdd}
                        aria-label={`Add ${name}`}
                        className="
                            flex h-7 w-7 shrink-0 items-center justify-center
                            rounded-full bg-slate-900
                            text-white
                            transition hover:bg-slate-800 active:scale-95
                        "
                    >
                        <Plus size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}