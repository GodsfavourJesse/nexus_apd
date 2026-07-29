"use client";

import { UseFormReturn } from "react-hook-form";
import { CreateAdvertisementFormValues } from "@/app/schema/advertisement.schema";

interface Props {
    form: UseFormReturn<CreateAdvertisementFormValues>;
}

export default function AdvertisementBasicInfo({ form }: Props) {
    const {
        register,
        formState: { errors },
    } = form;

    return (
        <section className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-neutral-900">
                    Basic Information
                </h2>
                <p className="mt-1 text-sm text-neutral-500">
                    Provide the essential details users will see.
                </p>
            </div>

            <div className="space-y-6">
                <div>
                    <label
                        htmlFor="title"
                        className="mb-2 block text-sm font-medium text-neutral-700"
                    >
                        Advertisement Title
                    </label>

                    <input
                        id="title"
                        type="text"
                        placeholder="Apple iPhone 17 Pro"
                        {...register("title")}
                        className="h-12 w-full rounded-2xl border border-neutral-300 bg-white px-4 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    />

                    {errors.title && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.title.message}
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="slug"
                        className="mb-2 block text-sm font-medium text-neutral-700"
                    >
                        Slug
                    </label>

                    <input
                        id="slug"
                        type="text"
                        placeholder="apple-iphone-17-pro"
                        {...register("slug")}
                        className="h-12 w-full rounded-2xl border border-neutral-300 bg-white px-4 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    />

                    <p className="mt-2 text-xs text-neutral-500">
                        Used for URLs. Must be unique.
                    </p>

                    {errors.slug && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.slug.message}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}