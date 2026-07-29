"use client";

import Link from "next/link";
import { ImageOff, Eye, Pencil, Trash2, Power } from "lucide-react";

import { Advertisement } from "@/app/types/adminTypes/advertisement.types";
import StatusBadge from "./StatusBadge";

interface Props {
    advertisements: Advertisement[];
    loading?: boolean;
    onDelete?: (ad: Advertisement) => void;
    onToggleActive?: (ad: Advertisement) => void;
}

export default function AdvertisementTable({
    advertisements,
    loading = false,
    onDelete,
    onToggleActive,
}: Props) {
    if (loading) {
        return (
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="flex animate-pulse items-center gap-4 border-b border-slate-100 p-4 last:border-0"
                    >
                        <div className="h-12 w-12 rounded-xl bg-slate-200" />
                        <div className="flex-1 space-y-2">
                            <div className="h-4 w-48 rounded bg-slate-200" />
                            <div className="h-3 w-28 rounded bg-slate-100" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (advertisements.length === 0) {
        return (
            <div className="flex h-48 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm text-slate-500">
                No advertisements found.
            </div>
        );
    }

    return (
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[720px] text-sm">
                <thead>
                    <tr className="border-b border-slate-100 bg-slate-50/60 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                        <th className="px-4 py-3">Advertisement</th>
                        <th className="px-4 py-3">Category</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Priority</th>
                        <th className="px-4 py-3">Views / Completions</th>
                        <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {advertisements.map((ad) => (
                        <tr
                            key={ad.id}
                            className="border-b border-slate-100 transition hover:bg-slate-50/60 last:border-0"
                        >
                            <td className="px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                                        {ad.thumbnailUrl ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                src={ad.thumbnailUrl}
                                                alt={ad.title}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <ImageOff size={16} className="text-slate-300" />
                                        )}
                                    </div>

                                    <div className="min-w-0">
                                        <p className="truncate font-medium text-slate-900">
                                            {ad.title}
                                        </p>
                                        <p className="truncate text-xs text-slate-400">
                                            {ad.slug}
                                        </p>
                                    </div>
                                </div>
                            </td>

                            <td className="px-4 py-3 text-slate-600">
                                {ad.category}
                            </td>

                            <td className="px-4 py-3">
                                <StatusBadge status={ad.status} />
                            </td>

                            <td className="px-4 py-3 text-slate-600">
                                {ad.priority}
                            </td>

                            <td className="px-4 py-3 text-slate-600">
                                {ad.viewCount.toLocaleString()} /{" "}
                                {ad.completionCount.toLocaleString()}
                            </td>

                            <td className="px-4 py-3">
                                <div className="flex items-center justify-end gap-1.5">
                                    <Link
                                        href={`/admin/advertisements/${ad.id}`}
                                        className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                                        aria-label="View"
                                    >
                                        <Eye size={16} />
                                    </Link>

                                    <Link
                                        href={`/admin/advertisements/${ad.id}/edit`}
                                        className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                                        aria-label="Edit"
                                    >
                                        <Pencil size={16} />
                                    </Link>

                                    {onToggleActive && (
                                        <button
                                            type="button"
                                            onClick={() => onToggleActive(ad)}
                                            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                                            aria-label="Toggle active"
                                        >
                                            <Power size={16} />
                                        </button>
                                    )}

                                    {onDelete && (
                                        <button
                                            type="button"
                                            onClick={() => onDelete(ad)}
                                            className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                                            aria-label="Delete"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}