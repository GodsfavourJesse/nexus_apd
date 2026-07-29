"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, ImageOff, Pencil } from "lucide-react";

import { useAdvertisement } from "@/app/hooks/adminHooks/advertisements/useAdvertisement";
import { StatusBadge } from "../../adminComponents/advertisements";

export default function AdvertisementDetailsPage() {
    const params = useParams();
    const router = useRouter();

    const id = params.id as string;

    const {
        data: ad,
        isLoading,
        isError,
    } = useAdvertisement(id);

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50 text-sm text-slate-500">
                Loading advertisement...
            </div>
        );
    }

    if (isError || !ad) {
        return (
            <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 p-6">
                <div className="w-full max-w-md rounded-3xl border border-red-200 bg-white p-8 text-center shadow-sm">
                    <h2 className="text-xl font-semibold text-red-600">
                        Unable to load this advertisement.
                    </h2>

                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                        <ArrowLeft size={16} />
                        Go Back
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 p-4 pb-24 sm:p-6">
            <div className="mx-auto flex max-w-5xl flex-col gap-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-100"
                    >
                        <ArrowLeft size={18} />
                    </button>

                    <Link
                        href={`/admin/advertisements/${ad.id}/edit`}
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                    >
                        <Pencil size={16} />
                        Edit Advertisement
                    </Link>
                </div>

                {/* Card */}
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                    {/* Banner */}
                    <div className="flex h-64 w-full items-center justify-center bg-slate-100">
                        {ad.bannerUrl || ad.thumbnailUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={ad.bannerUrl ?? ad.thumbnailUrl}
                                alt={ad.title}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <ImageOff
                                size={40}
                                className="text-slate-300"
                            />
                        )}
                    </div>

                    <div className="space-y-8 p-6">
                        {/* Title */}
                        <div>
                            <div className="flex flex-wrap items-center gap-3">
                                <StatusBadge status={ad.status} />

                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                                    {ad.category}
                                </span>
                            </div>

                            <h1 className="mt-4 text-3xl font-bold text-slate-900">
                                {ad.title}
                            </h1>

                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                {ad.shortDescription}
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-6 md:grid-cols-4">
                            <Stat
                                label="Priority"
                                value={ad.priority}
                            />

                            <Stat
                                label="Views"
                                value={ad.viewCount.toLocaleString()}
                            />

                            <Stat
                                label="Completions"
                                value={ad.completionCount.toLocaleString()}
                            />

                            <Stat
                                label="Created"
                                value={new Date(
                                    ad.createdAt,
                                ).toLocaleDateString()}
                            />
                        </div>

                        {/* Details */}
                        <section>
                            <h2 className="mb-3 text-sm font-semibold text-slate-900">
                                Full Description
                            </h2>

                            <p className="whitespace-pre-line text-sm leading-7 text-slate-600">
                                {ad.fullDescription}
                            </p>
                        </section>

                        {/* Campaign Information */}
                        <section className="grid gap-4 rounded-2xl bg-slate-50 p-5 md:grid-cols-2">
                            <InfoItem
                                label="Slug"
                                value={ad.slug}
                            />

                            <InfoItem
                                label="Button Text"
                                value={ad.buttonText}
                            />

                            <InfoItem
                                label="Start Date"
                                value={
                                    ad.startDate
                                        ? new Date(
                                              ad.startDate,
                                          ).toLocaleString()
                                        : "Not Scheduled"
                                }
                            />

                            <InfoItem
                                label="End Date"
                                value={
                                    ad.endDate
                                        ? new Date(
                                              ad.endDate,
                                          ).toLocaleString()
                                        : "No Expiration"
                                }
                            />
                        </section>

                        {/* Target URL */}
                        <section className="border-t border-slate-100 pt-6">
                            <h2 className="mb-3 text-sm font-semibold text-slate-900">
                                Target URL
                            </h2>

                            <a
                                href={ad.targetUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 break-all text-sm font-medium text-blue-600 transition hover:text-blue-700 hover:underline"
                            >
                                {ad.targetUrl}
                                <ExternalLink size={16} />
                            </a>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}

interface StatProps {
    label: string;
    value: string | number;
}

function Stat({
    label,
    value,
}: StatProps) {
    return (
        <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
                {label}
            </p>

            <p className="mt-2 text-xl font-semibold text-slate-900">
                {value}
            </p>
        </div>
    );
}

interface InfoItemProps {
    label: string;
    value: string;
}

function InfoItem({
    label,
    value,
}: InfoItemProps) {
    return (
        <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
                {label}
            </p>

            <p className="mt-1 break-all text-sm font-medium text-slate-800">
                {value}
            </p>
        </div>
    );
}