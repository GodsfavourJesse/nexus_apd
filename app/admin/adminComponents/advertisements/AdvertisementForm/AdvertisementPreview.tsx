"use client";

import { ImageOff, Sparkles } from "lucide-react";
import { CreateAdvertisementFormValues } from "@/app/schema/advertisement.schema";

interface Props {
    values: Partial<CreateAdvertisementFormValues>;
}

export default function AdvertisementPreview({ values }: Props) {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/60 px-5 py-4">
                <Sparkles size={15} className="text-blue-500" />
                <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Live Preview
                </h2>
            </div>

            <div className="p-5">
                <div className="overflow-hidden rounded-xl border border-slate-200">
                    <div className="flex h-36 w-full items-center justify-center bg-slate-100">
                        {values.thumbnailUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={values.thumbnailUrl}
                                alt="Preview"
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                }}
                            />
                        ) : (
                            <ImageOff size={22} className="text-slate-300" />
                        )}
                    </div>

                    <div className="space-y-2 p-4">
                        {values.category && (
                            <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600">
                                {values.category}
                            </span>
                        )}

                        <h3 className="text-base font-semibold text-slate-900">
                            {values.title || "Advertisement title"}
                        </h3>

                        <p className="line-clamp-2 text-sm text-slate-500">
                            {values.shortDescription ||
                                "Short description will appear here."}
                        </p>

                        <button
                            type="button"
                            disabled
                            className="mt-3 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white opacity-90"
                        >
                            {values.buttonText || "Learn More"}
                        </button>
                    </div>
                </div>

                <dl className="mt-4 space-y-1.5 text-xs text-slate-400">
                    <div className="flex justify-between">
                        <dt>Slug</dt>
                        <dd className="font-mono text-slate-500">
                            {values.slug || "—"}
                        </dd>
                    </div>
                    <div className="flex justify-between">
                        <dt>Priority</dt>
                        <dd className="text-slate-500">{values.priority ?? 0}</dd>
                    </div>
                    <div className="flex justify-between">
                        <dt>Status</dt>
                        <dd className="text-slate-500">
                            {values.status ?? "draft"}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}