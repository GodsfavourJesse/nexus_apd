"use client";

import EmptyOrders from "@/app/components/order/EmptyOrders";
import OrderGrid from "@/app/components/order/OrderGrid";
import OrdersHeader from "@/app/components/order/OrdersHeader";
import OrderSkeleton from "@/app/components/order/OrderSkeleton";
import OrderStatsCard from "@/app/components/order/OrderStatsCard";

import { useTodayOrder } from "@/app/hooks/clientHooks/ordersHooks/useTodayOrder";

export default function OrdersPage() {
    const {
        data: todayOrder,
        isLoading,
    } = useTodayOrder();

    if (isLoading) {
        return (
            <div
                className="
                    relative
                    min-h-full
                    overflow-x-hidden
                    bg-slate-50
                    pb-12
                "
            >
                <div className="h-60 w-full">
                    <OrdersHeader />
                </div>

                <main className="mt-20 px-4">
                    <OrderSkeleton />
                </main>
            </div>
        );
    }

    if (!todayOrder) {
        return (
            <div
                className="
                    relative
                    min-h-full
                    overflow-x-hidden
                    bg-slate-50
                    pb-12
                "
            >
                <div className="h-60 w-full">
                    <OrdersHeader />
                </div>

                <main className="mt-6 px-4">
                    <EmptyOrders state="NO_TASKS" />
                </main>
            </div>
        );
    }

    const showStats =
        todayOrder.state !== "NO_TASKS";

    const showOrders =
        todayOrder.state === "AVAILABLE";

    return (
        <div
            className="
                relative
                min-h-full
                overflow-x-hidden
                bg-slate-50
                pb-12
            "
        >
            <div className="h-60 w-full">
                <OrdersHeader />
            </div>

            {showStats && (
                <div
                    className="
                        absolute
                        top-30
                        z-30
                        w-full
                    "
                >
                    <OrderStatsCard
                        todaysEarnings={Number(todayOrder.rewardEarned)}
                        remaining={Math.max(
                            todayOrder.requiredTasks -
                                todayOrder.completedTasks,
                            0,
                        )}
                        totalTasks={todayOrder.requiredTasks}
                        completedTasks={todayOrder.completedTasks}
                    />
                </div>
            )}

            <main
                className={
                    showStats
                        ? "mt-20 px-4"
                        : "mt-6 px-4"
                }
            >
                {showOrders ? (
                    <OrderGrid
                        items={todayOrder.items}
                    />
                ) : (
                    <EmptyOrders
                        state={todayOrder.state}
                    />
                )}
            </main>
        </div>
    );
}