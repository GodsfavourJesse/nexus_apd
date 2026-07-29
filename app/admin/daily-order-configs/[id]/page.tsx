"use client";

import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

import {
    useDailyOrderConfig,
} from "@/app/hooks/adminHooks/daily-order-config/useDailyOrderConfig";

import {
    useUpdateDailyOrderConfig,
} from "@/app/hooks/adminHooks/daily-order-config/useUpdateDailyOrderConfig";

import {
    useActivateDailyOrderConfig,
} from "@/app/hooks/adminHooks/daily-order-config/useActivateDailyOrderConfig";

import {
    useDeactivateDailyOrderConfig,
} from "@/app/hooks/adminHooks/daily-order-config/useDeactiviateDailyOrderConfig";

import {
    useMembershipPlans,
} from "@/app/hooks/adminHooks/membership-plan/useMembershipPlans";

import DailyOrderConfigForm from "../../adminComponents/daily-order-configs/DailyOrderConfigForm";
import DailyOrderConfigSkeleton from "../../adminComponents/daily-order-configs/DailyOrderConfigSkeleton";
import { useDeleteDailyOrderConfig } from "@/app/hooks/adminHooks/daily-order-config/useDeleteDailyOrderConfig";
import DailyOrderConfigNotFound from "../../adminComponents/daily-order-configs/DailyOrderConfigNotFound";

export default function DailyOrderConfigDetailsPage() {
    const router = useRouter();
    const params = useParams();

    const id = Array.isArray(params.id)
        ? params.id[0]
        : params.id;

    if (!id) {
        return (
            <main className="p-6">
                Invalid configuration.
            </main>
        );
    }

    const {
        data,
        isLoading,
        isError,
    } = useDailyOrderConfig(id);

    const {
        data: plans,
        isLoading: plansLoading,
    } = useMembershipPlans();

    const updateConfig = useUpdateDailyOrderConfig();
    const activateConfig = useActivateDailyOrderConfig();
    const deactivateConfig = useDeactivateDailyOrderConfig();
    const deleteConfig = useDeleteDailyOrderConfig();

    if (
        isLoading ||
        plansLoading
    ) {
        return (
            <DailyOrderConfigSkeleton />
        );
    }

    if (isError || !data?.data) {
        return (
            <main className="min-h-screen bg-slate-50 p-4">
                <div className="mx-auto max-w-3xl">
                    <DailyOrderConfigNotFound />
                </div>
            </main>
        );
    }

    const config = data.data;

    const handleDelete = async () => {
        const confirmed =
            window.confirm(
                "Are you sure you want to permanently delete this configuration?",
            );

        if (!confirmed) {
            return;
        }

        try {
            await deleteConfig.mutateAsync(
                id,
            );

            toast.success(
                "Configuration deleted successfully.",
            );

            router.push(
                "/admin/daily-order-configs",
            );
        } catch {
            toast.error(
                "Failed to delete configuration.",
            );
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 p-6 pb-24">
            <div className="mx-auto flex max-w-3xl flex-col gap-6">

                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">
                            Daily Order Configuration
                        </h1>

                        <p className="mt-1 text-slate-500">
                            Edit this configuration and manage its status.
                        </p>
                    </div>

                    <span
                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                            config.isActive
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                        }`}
                    >
                        {config.isActive
                            ? "Active"
                            : "Inactive"}
                    </span>
                </div>

                <DailyOrderConfigForm
                    defaultValues={config}
                    membershipPlans={
                        plans?.data ?? []
                    }
                    isSubmitting={
                        updateConfig.isPending
                    }
                    onSubmit={async (
                        values,
                    ) => {
                        try {
                            await updateConfig.mutateAsync({
                                id,
                                data: values,
                            });

                            toast.success(
                                "Configuration updated successfully.",
                            );

                            router.refresh();
                        } catch {
                            toast.error(
                                "Unable to update configuration.",
                            );
                        }
                    }}
                />

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

                    <h2 className="text-lg font-semibold">
                        Configuration Actions
                    </h2>

                    <p className="mt-1 mb-6 text-sm text-slate-500">
                        Activate or deactivate this
                        configuration without editing
                        its settings.
                    </p>

                    <div className="flex flex-wrap gap-4">

                        {config.isActive ? (
                            <button
                                type="button"
                                disabled={
                                    deactivateConfig.isPending
                                }
                                onClick={async () => {
                                    try {
                                        await deactivateConfig.mutateAsync(
                                            id,
                                        );

                                        toast.success(
                                            "Configuration deactivated successfully.",
                                        );

                                        router.refresh();
                                    } catch {
                                        toast.error(
                                            "Unable to deactivate configuration.",
                                        );
                                    }
                                }}
                                className="rounded-lg bg-red-600 px-5 py-2.5 font-medium text-white transition hover:bg-red-700 disabled:opacity-50"
                            >
                                {deactivateConfig.isPending
                                    ? "Deactivating..."
                                    : "Deactivate"}
                            </button>
                        ) : (
                            <button
                                type="button"
                                disabled={
                                    activateConfig.isPending
                                }
                                onClick={async () => {
                                    try {
                                        await activateConfig.mutateAsync(
                                            id,
                                        );

                                        toast.success(
                                            "Configuration activated successfully.",
                                        );

                                        router.refresh();
                                    } catch {
                                        toast.error(
                                            "Unable to activate configuration.",
                                        );
                                    }
                                }}
                                className="rounded-lg bg-green-600 px-5 py-2.5 font-medium text-white transition hover:bg-green-700 disabled:opacity-50"
                            >
                                {activateConfig.isPending
                                    ? "Activating..."
                                    : "Activate"}
                            </button>
                        )}

                    </div>
                </div>

                <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm">
                    <h2 className="mb-2 text-lg font-semibold text-red-700">
                        Danger Zone
                    </h2>

                    <p className="mb-4 text-sm text-slate-500">
                        Permanently delete this daily
                        order configuration.
                        This action cannot be undone.
                    </p>

                    <button
                        type="button"
                        onClick={handleDelete}
                        disabled={
                            deleteConfig.isPending
                        }
                        className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700 disabled:opacity-50"
                    >
                        {deleteConfig.isPending
                            ? "Deleting..."
                            : "Delete Configuration"}
                    </button>
                </div>
            </div>
        </main>
    );
}