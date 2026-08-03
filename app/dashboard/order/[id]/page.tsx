"use client";

import FansRushingCard from "@/app/components/order/FansRushingCard";
import OrderAction from "@/app/components/order/OrderAction";
import OrderDescription from "@/app/components/order/OrderDescription";
import OrderDetailsHeader from "@/app/components/order/OrderDetailsHeader";
import OrderHero from "@/app/components/order/OrderHero";
import { useOrderItem } from "@/app/hooks/clientHooks/ordersHooks/useOrderItem";
import { useParams } from "next/navigation";


export default function OrderDetailsPage() {

    const params = useParams();

    console.log(params);

    const itemId = params.id as string;

    console.log("itemId:", itemId);

    const {
        data: item,
        isLoading,
    } = useOrderItem(itemId);

    if (isLoading) {
        return (
            <div className="flex min-h-full flex-col bg-slate-50">

                <OrderDetailsHeader />

                <div className="flex flex-1 items-center justify-center text-sm text-slate-500">
                    Loading...
                </div>

            </div>
        );
    }

    if (!item) {
        return (
            <div className="flex h-screen flex-col bg-slate-50">

                <OrderDetailsHeader />

                <div className="flex flex-1 items-center justify-center text-sm text-slate-500">
                    Order not found.
                </div>

            </div>
        );
    }

    return (
        <div className="flex h-screen flex-col bg-slate-50 absolute z-1000">

            <OrderDetailsHeader />

            <div className="flex-1 overflow-y-auto pb-6">

                <OrderHero
                    item={item}
                />

                <div className="mt-4">
                    <FansRushingCard />
                </div>

                <div className="mt-4">
                    <OrderDescription
                        item={item}
                    />
                </div>

            </div>

            <OrderAction
                item={item}
            />

        </div>
    );
}