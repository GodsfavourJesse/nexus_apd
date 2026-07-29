"use client";

import { useDailyOrderConfigs } from "@/app/hooks/adminHooks/daily-order-config/useDailyOrderConfigs";
import DailyOrderConfigSkeleton from "../adminComponents/daily-order-configs/DailyOrderConfigSkeleton";
import DailyOrderConfigCard from "../adminComponents/daily-order-configs/DailyOrderConfigCard";


export default function DailyOrderConfigsPage() {
    const {
        data,
        isLoading,
        isError,
    } = useDailyOrderConfigs();

    const configs = data?.data ?? [];

    if (isLoading) {
        return <DailyOrderConfigSkeleton />;
    }

    if (isError) {
        return (
            <main className="p-6">
                Unable to load configurations.
            </main>
        );
    }

    if (configs.length === 0) {
        return (
            <main className="p-6">
                No daily order configurations found.
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 p-4 pb-24">
            <div className="mx-auto flex max-w-md flex-col gap-4">

                <div>
                    <h1 className="text-2xl font-bold">
                        Daily Order Configurations
                    </h1>

                    <p className="text-sm text-slate-500">
                        Manage task limits, rewards, and
                        membership plan settings.
                    </p>
                </div>

                {configs.map((config) => (
                    <DailyOrderConfigCard
                        key={config.id}
                        config={config}
                    />
                ))}
            </div>
        </main>
    );
}