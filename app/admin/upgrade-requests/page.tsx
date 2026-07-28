"use client";

import { useUpgradeRequests } from "@/app/hooks/adminHooks/upgrade-requests/useUpgradeRequests";
import UpgradeRequestSkeleton from "../adminComponents/upgrades/UpgradeRequestSkeleton";
import UpgradeRequestCard from "../adminComponents/upgrades/UpgradeRequestCard";

export default function AdminUpgradeRequestsPage() {
    const {
        data,
        isLoading,
        isError,
    } = useUpgradeRequests();

    const requests =
        data?.data ?? [];

    if (isLoading) {
        return <UpgradeRequestSkeleton />;
    }

    if (isError) {
        return (
            <main className="p-6">
                Unable to load upgrade requests.
            </main>
        );
    }

    if (requests.length === 0) {
        return (
            <main className="p-6">
                No upgrade requests found.
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 p-4 pb-24">
            <div className="mx-auto flex max-w-md flex-col gap-4">
                <div>
                    <h1 className="text-2xl font-bold">
                        Upgrade Requests
                    </h1>

                    <p className="text-sm text-slate-500">
                        Pending membership upgrade requests.
                    </p>
                </div>

                {requests.map((request) => (
                    <UpgradeRequestCard
                        key={request.id}
                        request={request}
                    />
                ))}
            </div>
        </main>
    );
}