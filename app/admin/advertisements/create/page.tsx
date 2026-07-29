"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useCreateAdvertisement } from "@/app/hooks/adminHooks/advertisements/useCreateAdvertisement";
import { CreateAdvertisementFormValues } from "@/app/schema/advertisement.schema";
import { AdvertisementForm } from "../../adminComponents/advertisements";

export default function CreateAdvertisementPage() {
    const router = useRouter();
    const mutation = useCreateAdvertisement();

    async function handleSubmit(values: CreateAdvertisementFormValues) {
        try {
            await mutation.mutateAsync({
                ...values,
                bannerUrl: values.bannerUrl || null,
            });

            toast.success("Advertisement created.");
            router.push("/admin/advertisements");
        } catch (error: any) {
            toast.error(
                error?.response?.data?.message ??
                    "Failed to create advertisement.",
            );
        }
    }

    return (
        <AdvertisementForm
            submitLabel="Create Advertisement"
            loading={mutation.isPending}
            onSubmit={handleSubmit}
            onCancel={() => router.push("/admin/advertisements")}
        />
    );
}