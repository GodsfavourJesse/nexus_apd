"use client";

import { UpgradeRequest } from "@/app/types/adminTypes/upgrade-request.types";

import { useApproveUpgrade } from "@/app/hooks/adminHooks/upgrade-requests/useApproveUpgrade";
import { useRejectUpgrade } from "@/app/hooks/adminHooks/upgrade-requests/useReviewUpgrade";

interface Props {
    request: UpgradeRequest;
}

export default function UpgradeActionsCard({
    request,
}: Props) {
    const approveMutation =
        useApproveUpgrade();

    const rejectMutation = useRejectUpgrade();

    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-slate-900">
                    Actions
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Review and process this upgrade request.
                </p>
            </div>

            {request.status === "UNDER_REVIEW" && (
                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={() =>
                            approveMutation.mutate({
                                id: request.id,
                            })
                        }
                        disabled={
                            approveMutation.isPending ||
                            rejectMutation.isPending
                        }
                        className="
                            flex-1
                            rounded-xl
                            bg-green-600
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            transition
                            hover:bg-green-700
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                        "
                    >
                        {approveMutation.isPending
                            ? "Approving..."
                            : "Approve"}
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            rejectMutation.mutate({
                                id: request.id,
                                data: {
                                    rejectedReason:
                                        "Rejected by administrator",
                                },
                            })
                        }
                        disabled={
                            approveMutation.isPending ||
                            rejectMutation.isPending
                        }
                        className="
                            flex-1
                            rounded-xl
                            bg-red-600
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            transition
                            hover:bg-red-700
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                        "
                    >
                        {rejectMutation.isPending
                            ? "Rejecting..."
                            : "Reject"}
                    </button>
                </div>
            )}
        </section>
    );
}