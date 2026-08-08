"use client";

import { ArrowLeft, CalendarDays, CreditCard, Hash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { format } from "date-fns";
import { useUpgradeRequests } from "@/app/hooks/clientHooks/upgradeHooks/useUpgradeRequests";
import UpgradeStatusBadge from "@/app/components/upgrade/UpgradeStatusBadge";
import BackToMembershipPage from "@/app/components/ui/BackToMembershipPage";

export default function UpgradeHistoryDetailsPage() {
    const router = useRouter();
    const params = useParams();

    const { data: requests = [], isLoading } = useUpgradeRequests();

    const request = requests.find(
        (item) => item.id === params.id,
    );

    if (isLoading) {
        return (
            <main className="min-h-screen bg-slate-50 px-4 py-8">
                <div className="mx-auto max-w-md animate-pulse">
                    <div className="h-8 w-40 rounded bg-slate-200" />
                    <div className="mt-6 h-96 rounded-3xl bg-white" />
                </div>
            </main>
        );
    }

    if (!request) {
        return <BackToMembershipPage />;
    }

    return (
        <main className="min-h-screen bg-slate-50">
            <section className="bg-[#1592FF] px-4 pb-24 pt-8">
                <div className="mx-auto max-w-md">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white"
                    >
                        <ArrowLeft size={20} />
                    </button>

                    <div className="mt-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
                            Upgrade Request
                        </p>

                        <h1 className="mt-2 text-2xl font-bold text-white">
                            {request.membershipPlan?.name ??
                                "Membership Upgrade"}
                        </h1>

                        <div className="mt-4">
                            <UpgradeStatusBadge
                                status={request.status}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="-mt-12 mx-auto max-w-md px-4 pb-24">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    {/* Amount */}
                    <div className="rounded-2xl bg-slate-50 p-5">
                        <p className="text-xs font-medium text-slate-500">
                            Upgrade Amount
                        </p>

                        <p className="mt-1 text-2xl font-bold text-slate-900">
                            ₦
                            {Number(request.amount).toLocaleString(
                                "en-NG",
                                {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                },
                            )}
                        </p>
                    </div>

                    {/* Details */}
                    <div className="mt-6 space-y-5">
                        <div className="flex gap-3">
                            <Hash
                                size={18}
                                className="mt-0.5 text-slate-400"
                            />

                            <div>
                                <p className="text-xs text-slate-400">
                                    Reference
                                </p>

                                <p className="mt-1 text-sm font-semibold text-slate-900">
                                    {request.reference}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <CreditCard
                                size={18}
                                className="mt-0.5 text-slate-400"
                            />

                            <div>
                                <p className="text-xs text-slate-400">
                                    Payment Method
                                </p>

                                <p className="mt-1 text-sm font-semibold capitalize text-slate-900">
                                    {request.paymentMethod.replace(
                                        "_",
                                        " ",
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <CalendarDays
                                size={18}
                                className="mt-0.5 text-slate-400"
                            />

                            <div>
                                <p className="text-xs text-slate-400">
                                    Submitted
                                </p>

                                <p className="mt-1 text-sm font-semibold text-slate-900">
                                    {format(
                                        new Date(request.createdAt),
                                        "MMMM d, yyyy • h:mm a",
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <CalendarDays
                                size={18}
                                className="mt-0.5 text-slate-400"
                            />

                            <div>
                                <p className="text-xs text-slate-400">
                                    Last Updated
                                </p>

                                <p className="mt-1 text-sm font-semibold text-slate-900">
                                    {format(
                                        new Date(request.updatedAt),
                                        "MMMM d, yyyy • h:mm a",
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}