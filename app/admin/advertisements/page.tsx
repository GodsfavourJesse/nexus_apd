"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

import { useAdvertisements } from "@/app/hooks/adminHooks/advertisements/useAdvertisements";
import { useDeleteAdvertisement } from "@/app/hooks/adminHooks/advertisements/useDeleteAdvertisement";
import { useActivateAdvertisement } from "@/app/hooks/adminHooks/advertisements/useActivateAdvertisement";
import { useDeactivateAdvertisement } from "@/app/hooks/adminHooks/advertisements/useDeactivateAdvertisement";

import {
    Advertisement,
    AdvertisementStatus,
} from "@/app/types/adminTypes/advertisement.types";
import { AdvertisementFilters, AdvertisementStatistics, AdvertisementTable, DeleteAdvertisementDialog } from "../adminComponents/advertisements";

export default function AdvertisementsListPage() {
    const { data, isLoading } = useAdvertisements();
    const deleteMutation = useDeleteAdvertisement();
    const activateMutation = useActivateAdvertisement();
    const deactivateMutation = useDeactivateAdvertisement();

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState<AdvertisementStatus | "all">("all");
    const [toDelete, setToDelete] = useState<Advertisement | null>(null);

    const advertisements = data ?? [];

    const filtered = useMemo(() => {
        return advertisements.filter((ad) => {
            const matchesStatus = status === "all" || ad.status === status;

            const matchesSearch =
                !search ||
                ad.title.toLowerCase().includes(search.toLowerCase()) ||
                ad.category.toLowerCase().includes(search.toLowerCase());

            return matchesStatus && matchesSearch;
        });
    }, [advertisements, search, status]);

    function handleToggleActive(ad: Advertisement) {
        if (ad.status === AdvertisementStatus.ACTIVE) {
            deactivateMutation.mutate(ad.id);
        } else {
            activateMutation.mutate(ad.id);
        }
    }

    function handleConfirmDelete() {
        if (!toDelete) return;

        deleteMutation.mutate(toDelete.id, {
            onSuccess: () => setToDelete(null),
        });
    }

    return (
        <main className="min-h-screen bg-slate-50 p-4 pb-24 sm:p-6">
            <div className="mx-auto flex max-w-6xl flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">
                            Advertisements
                        </h1>
                        <p className="text-sm text-slate-500">
                            Manage promotional advertisements shown to members.
                        </p>
                    </div>

                    <Link
                        href="/admin/advertisements/create"
                        className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                    >
                        <Plus size={16} />
                        New Advertisement
                    </Link>
                </div>

                <AdvertisementStatistics
                    advertisements={advertisements}
                    loading={isLoading}
                />

                <AdvertisementFilters
                    search={search}
                    onSearchChange={setSearch}
                    status={status}
                    onStatusChange={setStatus}
                />

                <AdvertisementTable
                    advertisements={filtered}
                    loading={isLoading}
                    onDelete={setToDelete}
                    onToggleActive={handleToggleActive}
                />
            </div>

            <DeleteAdvertisementDialog
                advertisement={toDelete}
                loading={deleteMutation.isPending}
                onConfirm={handleConfirmDelete}
                onCancel={() => setToDelete(null)}
            />
        </main>
    );
}