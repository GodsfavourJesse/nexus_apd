"use client";

import { useRouter } from "next/navigation";

import { useCreateDailyOrderConfig } from "@/app/hooks/adminHooks/daily-order-config/useCreateDailyOrderConfig";
import { useMembershipPlans } from "@/app/hooks/adminHooks/membership-plan/useMembershipPlans";

import DailyOrderConfigForm from "../../adminComponents/daily-order-configs/DailyOrderConfigForm";
import DailyOrderConfigSkeleton from "../../adminComponents/daily-order-configs/DailyOrderConfigSkeleton";

export default function NewDailyOrderConfigPage() {
    const router = useRouter();

    const createConfig =
        useCreateDailyOrderConfig();

    const {
        data,
        isLoading,
    } = useMembershipPlans();

    if (isLoading) {
        return <DailyOrderConfigSkeleton />;
    }

    const membershipPlans =
        data?.data ?? [];

    return (
        <main className="min-h-screen bg-slate-50 p-4 pb-24">
            <div className="mx-auto flex max-w-xl flex-col gap-6">
                <div>
                    <h1 className="text-2xl font-bold">
                        New Daily Order Configuration
                    </h1>

                    <p className="text-sm text-slate-500">
                        Create a daily order configuration
                        for a membership plan.
                    </p>
                </div>

                <DailyOrderConfigForm
                    membershipPlans={
                        membershipPlans
                    }
                    isSubmitting={
                        createConfig.isPending
                    }
                    onSubmit={async (
                        values,
                    ) => {
                        await createConfig.mutateAsync(
                            values,
                        );

                        router.push(
                            "/admin/daily-order-configs",
                        );
                    }}
                />
            </div>
        </main>
    );
}