"use client";

import { OrderItem } from "@/app/types/clientTypes/order.types";

interface Props {
    item: OrderItem;
}

export default function OrderDescription({
    item,
}: Props) {
    return (
        <section className="mx-4 rounded-2xl bg-white p-5 shadow-sm">

            <h2 className="text-[17px] font-semibold text-slate-900">
                Description
            </h2>

            <p className="mt-3 whitespace-pre-line text-[15px] leading-7 text-slate-600">
                {item.advertisement.fullDescription}
            </p>

        </section>
    );
}