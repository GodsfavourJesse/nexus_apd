"use client";

import OrderCard from "./OrderCard";

import { OrderItem } from "@/app/types/clientTypes/order.types";

interface Props {
    items: OrderItem[];
}

export default function OrderGrid({
    items,
}: Props) {
    return (
        <div className="grid grid-cols-2 gap-3">
            {items.map((item) => (
                <OrderCard
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    );
}