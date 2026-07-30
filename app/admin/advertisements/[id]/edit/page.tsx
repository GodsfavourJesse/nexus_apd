"use client";

import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

import { AdvertisementForm } from "@/app/admin/adminComponents/advertisements";
import { useAdvertisement } from "@/app/hooks/adminHooks/advertisements/useAdvertisement";
import { useUpdateAdvertisement } from "@/app/hooks/adminHooks/advertisements/useUpdateAdvertisement";
import { CreateAdvertisementFormValues } from "@/app/schema/advertisement.schema";

function formatDate(value?: string | null) {
    return value ? value.slice(0, 10) : undefined;
}

export default function EditAdvertisementPage() {
    const params = useParams<{ id: string }>();
    const router = useRouter();

    const id = params.id;

    if (!id) {
        return (
            <div>Invalid advertisement.</div>
        );
    }

    const {
        data: advertisement,
        isLoading,
        isError,
    } = useAdvertisement(id);

    const updateAdvertisement = useUpdateAdvertisement();

    async function handleSubmit(
        values: CreateAdvertisementFormValues,
    ) {
        try {
            await updateAdvertisement.mutateAsync({
                id,
                data: {
                    ...values,
                    bannerUrl:
                        values.bannerUrl || null,
                },
            });

            toast.success(
                "Advertisement updated successfully.",
            );

            router.push(
                `/admin/advertisements/${id}`,
            );
        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Failed to update advertisement.",
            );
        }
    }

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50 text-sm text-slate-500">
                Loading advertisement...
            </div>
        );
    }

    if (isError || !advertisement) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50 text-sm font-medium text-red-500">
                Advertisement not found.
            </div>
        );
    }

    return (
        <AdvertisementForm
            defaultValues={{
                title: advertisement.title,
                slug: advertisement.slug,
                shortDescription:
                    advertisement.shortDescription,
                fullDescription:
                    advertisement.fullDescription,
                thumbnailUrl:
                    advertisement.thumbnailUrl,
                bannerUrl:
                    advertisement.bannerUrl ?? "",
                buttonText:
                    advertisement.buttonText ??
                    "Learn More",
                targetUrl:
                    advertisement.targetUrl,

                startDate: formatDate(advertisement.startDate),

                endDate: formatDate(advertisement.endDate),
            }}
            submitLabel="Update Advertisement"
            loading={
                updateAdvertisement.isPending
            }
            onSubmit={handleSubmit}
            onCancel={() =>
                router.push(
                    `/admin/advertisements/${id}`,
                )
            }
        />
    );
}