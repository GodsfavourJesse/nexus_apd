"use client";

import {
    ArrowLeft,
    History,
    RefreshCw,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import UpgradeRequestCard from "@/app/components/upgrade/UpgradeRequestCard";

import { ROUTES } from "@/app/constants/routes";

import {
    UpgradeRequest,
    UpgradeStatus,
} from "@/app/types/clientTypes/upgrade.types";

import { useUpgradeRequests } from "@/app/hooks/clientHooks/upgradeHooks/useUpgradeRequests";

export default function UpgradeHistoryPage() {
    const router = useRouter();

    const [filter, setFilter] =
        useState<UpgradeStatus | "all">("all");

    const {
        data: requests = [],
        isLoading,
        isError,
        refetch,
        isFetching,
    } = useUpgradeRequests();

    const filteredRequests = useMemo(() => {
        if (filter === "all") {
            return requests;
        }

        return requests.filter(
            (request) =>
                request.status === filter,
        );
    }, [requests, filter]);

    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            {/* Header */}

            <section className="bg-[#1592FF] px-4 pb-20 pt-7">
                <div className="mx-auto max-w-3xl">
                    <button
                        type="button"
                        onClick={() =>
                            router.back()
                        }
                        className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-white/15
                            text-white
                            backdrop-blur-xl
                            transition
                            hover:bg-white/20
                            active:scale-95
                        "
                    >
                        <ArrowLeft size={20} />
                    </button>

                    <div className="mt-9 text-center">
                        <div
                            className="
                                mx-auto
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                                bg-white/15
                                text-white
                                backdrop-blur-xl
                            "
                        >
                            <History size={22} />
                        </div>

                        <h1 className="mt-5 text-2xl font-bold tracking-tight text-white">
                            Upgrade History
                        </h1>

                        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-blue-50">
                            View and track all your
                            membership upgrade requests.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}

            <section className="-mt-10 mx-auto max-w-3xl px-4">
                {/* Filter */}

                <div
                    className="
                        rounded-3xl
                        border
                        border-slate-200
                        bg-white
                        p-3
                        shadow-sm
                    "
                >
                    <div className="flex gap-2 overflow-x-auto no-scrollbar">
                        <FilterButton
                            active={
                                filter === "all"
                            }
                            onClick={() =>
                                setFilter("all")
                            }
                        >
                            All
                        </FilterButton>

                        <FilterButton
                            active={
                                filter ===
                                UpgradeStatus.PENDING
                            }
                            onClick={() =>
                                setFilter(
                                    UpgradeStatus.PENDING,
                                )
                            }
                        >
                            Pending
                        </FilterButton>

                        <FilterButton
                            active={
                                filter ===
                                UpgradeStatus.UNDER_REVIEW
                            }
                            onClick={() =>
                                setFilter(
                                    UpgradeStatus.UNDER_REVIEW,
                                )
                            }
                        >
                            Under Review
                        </FilterButton>

                        <FilterButton
                            active={
                                filter ===
                                UpgradeStatus.APPROVED
                            }
                            onClick={() =>
                                setFilter(
                                    UpgradeStatus.APPROVED,
                                )
                            }
                        >
                            Approved
                        </FilterButton>

                        <FilterButton
                            active={
                                filter ===
                                UpgradeStatus.REJECTED
                            }
                            onClick={() =>
                                setFilter(
                                    UpgradeStatus.REJECTED,
                                )
                            }
                        >
                            Rejected
                        </FilterButton>
                    </div>
                </div>

                {/* Loading */}

                {isLoading && (
                    <div className="mt-5 space-y-4">
                        {Array.from({
                            length: 3,
                        }).map((_, index) => (
                            <div
                                key={index}
                                className="
                                    h-80
                                    animate-pulse
                                    rounded-3xl
                                    bg-white
                                "
                            />
                        ))}
                    </div>
                )}

                {/* Error */}

                {isError && !isLoading && (
                    <div
                        className="
                            mt-5
                            rounded-3xl
                            border
                            border-red-200
                            bg-white
                            p-8
                            text-center
                        "
                    >
                        <h2 className="text-base font-bold text-slate-900">
                            Unable to load history
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            We couldn't retrieve your
                            upgrade requests.
                        </p>

                        <button
                            type="button"
                            onClick={() =>
                                refetch()
                            }
                            className="
                                mt-5
                                inline-flex
                                items-center
                                gap-2
                                rounded-2xl
                                bg-[#1592FF]
                                px-5
                                py-3
                                text-sm
                                font-semibold
                                text-white
                            "
                        >
                            <RefreshCw
                                size={15}
                            />
                            Try Again
                        </button>
                    </div>
                )}

                {/* Empty */}

                {!isLoading &&
                    !isError &&
                    filteredRequests.length ===
                        0 && (
                        <div
                            className="
                                mt-5
                                rounded-3xl
                                border
                                border-slate-200
                                bg-white
                                p-10
                                text-center
                                shadow-sm
                            "
                        >
                            <div
                                className="
                                    mx-auto
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-slate-100
                                    text-slate-400
                                "
                            >
                                <History
                                    size={24}
                                />
                            </div>

                            <h2 className="mt-5 text-base font-bold text-slate-900">
                                No upgrade requests
                            </h2>

                            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                                You don't have any
                                upgrade requests matching
                                this filter.
                            </p>

                            <button
                                type="button"
                                onClick={() =>
                                    router.push(
                                        ROUTES.MEMBERS,
                                    )
                                }
                                className="
                                    mt-6
                                    rounded-2xl
                                    bg-[#1592FF]
                                    px-5
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-white
                                "
                            >
                                Browse Memberships
                            </button>
                        </div>
                    )}

                {/* Requests */}

                {!isLoading &&
                    !isError &&
                    filteredRequests.length >
                        0 && (
                        <div className="mt-5 space-y-4">
                            {filteredRequests.map(
                                (
                                    request,
                                ) => (
                                    <UpgradeRequestCard
                                        request={request}
                                        onClick={() =>
                                            router.push(
                                                `${ROUTES.UPGRADE_HISTORY}/${request.id}`,
                                            )
                                        }
                                    />
                                ),
                            )}
                        </div>
                    )}

                {/* Refresh indicator */}

                {isFetching &&
                    !isLoading && (
                        <p className="mt-4 text-center text-xs text-slate-400">
                            Updating upgrade history...
                        </p>
                    )}
            </section>
        </main>
    );
}

interface FilterButtonProps {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

function FilterButton({
    active,
    onClick,
    children,
}: FilterButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                shrink-0
                rounded-xl
                px-4
                py-2.5
                text-xs
                font-semibold
                transition
                ${
                    active
                        ? "bg-[#1592FF] text-white"
                        : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }
            `}
        >
            {children}
        </button>
    );
}