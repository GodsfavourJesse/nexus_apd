"use client";

import { useParams } from "next/navigation";

import { useUpgradeRequest } from "@/app/hooks/adminHooks/upgrade-requests/useUpgradeRequest";

import UpgradeProfileCard from "../../adminComponents/upgrades/UpgradeProfileCard";
import UpgradeMembershipCard from "../../adminComponents/upgrades/UpgradeMembershipCard";
import UpgradePaymentCard from "../../adminComponents/upgrades/UpgradePaymentCard";
import UpgradeProofCard from "../../adminComponents/upgrades/UpgradeProofCard";
import UpgradeActionsCard from "../../adminComponents/upgrades/UpgradeActionsCard";
import UpgradeRequestSkeleton from "../../adminComponents/upgrades/UpgradeRequestSkeleton";

export default function AdminUpgradeDetailsPage() {
    const params = useParams();

    const id = Array.isArray(params.id)
        ? params.id[0]
        : params.id;

    const {
        data,
        isLoading,
        isError,
    } = useUpgradeRequest(id);

    if (isLoading) {
        return <UpgradeRequestSkeleton />;
    }

    if (isError || !data?.data) {
        return (
            <main className="p-6">
                Unable to load upgrade request.
            </main>
        );
    }

    const request = data.data;

    return (
        <main className="min-h-screen bg-slate-50 p-4 pb-24">
            <div className="mx-auto flex max-w-3xl flex-col gap-4">

                <div>
                    <h1 className="text-2xl font-bold text-slate-900">
                        Upgrade Request
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Review membership upgrade details.
                    </p>
                </div>

                <UpgradeProfileCard
                    request={request}
                />

                <UpgradeMembershipCard
                    request={request}
                />

                <UpgradePaymentCard
                    request={request}
                />

                <UpgradeProofCard
                    request={request}
                />

                <UpgradeActionsCard
                    request={request}
                />

            </div>
        </main>
    );
}