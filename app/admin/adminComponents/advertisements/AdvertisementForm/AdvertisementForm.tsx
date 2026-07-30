"use client";

import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AdvertisementBasicInfo from "./AdvertisementBasicInfo";
import AdvertisementDescriptions from "./AdvertisementDescriptions";
import AdvertisementMedia from "./AdvertisementMedia";
import AdvertisementPreview from "./AdvertisementPreview";
import AdvertisementActions from "./AdvertisementActions";

// Kept but intentionally unused for now — the ad behaves like a task
// (same pattern as daily order config), so campaign targeting isn't
// needed at creation time. Re-enable by importing + rendering below
// if/when campaign scheduling becomes a real requirement.
// import AdvertisementCampaign from "./AdvertisementCampaign";

import {
    advertisementSchema,
    CreateAdvertisementFormValues,
} from "@/app/schema/advertisement.schema";

interface AdvertisementFormProps {
    defaultValues?: Partial<CreateAdvertisementFormValues>;
    submitLabel: string;
    loading?: boolean;
    onSubmit: (values: CreateAdvertisementFormValues) => Promise<void> | void;
    onCancel?: () => void;
}

const DEFAULT_VALUES: CreateAdvertisementFormValues = {
    title: "",
    slug: "",
    shortDescription: "",
    fullDescription: "",
    thumbnailUrl: "",
    bannerUrl: "",
    buttonText: "Rush to Order",

    // Campaign fields are optional now — sensible defaults so the
    // form/preview don't show "undefined" anywhere, but nothing here
    // blocks submission.
    targetUrl: "",
    // category: "",
    // priority: 0,
    startDate: undefined,
    endDate: undefined,
};

export default function AdvertisementForm({
    defaultValues,
    submitLabel,
    loading = false,
    onSubmit,
    onCancel,
}: AdvertisementFormProps) {
    const initialValues = useMemo<CreateAdvertisementFormValues>(
        () => ({ ...DEFAULT_VALUES, ...defaultValues }),
        [defaultValues],
    );

    const form = useForm<CreateAdvertisementFormValues>({
        resolver: zodResolver(advertisementSchema),
        defaultValues: initialValues,
        mode: "onChange",
    });

    const {
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { isDirty, isValid },
    } = form;

    useEffect(() => {
        reset(initialValues);
    }, [initialValues, reset]);

    const preview = watch();

    useEffect(() => {
        const subscription = watch((values, { name }) => {
            if (name !== "title") return;

            const slug = values.title
                ?.toLowerCase()
                .trim()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "");

            if (slug && !watch("slug")) {
                setValue("slug", slug, { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, setValue]);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex h-screen flex-col bg-slate-50"
        >
            <main className="flex-1 overflow-y-auto">
                <div
                    className="
                        mx-auto grid w-full max-w-7xl gap-6
                        px-4 py-6 sm:px-6
                        xl:grid-cols-[minmax(0,1fr)_380px]
                    "
                >
                    <div className="flex min-w-0 flex-col gap-5">
                        <AdvertisementBasicInfo form={form} />
                        <AdvertisementDescriptions form={form} />
                        <AdvertisementMedia form={form} />
                        {/* <AdvertisementCampaign form={form} /> */}
                    </div>

                    <aside className="h-fit xl:sticky xl:top-6">
                        <AdvertisementPreview values={preview} />
                    </aside>
                </div>
            </main>

            <footer
                className="
                    shrink-0 border-t border-slate-200 bg-white/95
                    px-4 py-3 backdrop-blur-xl
                    supports-[backdrop-filter]:bg-white/80
                    sm:px-6
                    pb-[max(12px,env(safe-area-inset-bottom))]
                "
            >
                <AdvertisementActions
                    submitLabel={submitLabel}
                    loading={loading}
                    isDirty={isDirty}
                    isValid={isValid}
                    onCancel={onCancel}
                />
            </footer>
        </form>
    );
}