"use client";

import { UseFormReturn } from "react-hook-form";
import { AlignLeft } from "lucide-react";

import { CreateAdvertisementFormValues } from "@/app/schema/advertisement.schema";
import AdminSectionCard from "../AdvertisementSettings/AdminSectionCard";
import { AdminTextarea } from "../../fields/AdminField";

interface Props {
    form: UseFormReturn<CreateAdvertisementFormValues>;
}

export default function AdvertisementDescriptions({ form }: Props) {
    const {
        register,
        watch,
        formState: { errors },
    } = form;

    const shortDescription = watch("shortDescription") ?? "";

    return (
        <AdminSectionCard
            icon={AlignLeft}
            title="Descriptions"
            description="What members see in the task list, and the full details behind it."
        >
            <AdminTextarea
                id="shortDescription"
                label="Short Description"
                rows={3}
                placeholder="Displayed inside the task list..."
                error={errors.shortDescription?.message}
                trailing={
                    <span className="text-xs text-slate-400">
                        {shortDescription.length}/500
                    </span>
                }
                {...register("shortDescription")}
            />

            <AdminTextarea
                id="fullDescription"
                label="Full Description"
                rows={7}
                placeholder="Describe the advertisement in detail..."
                error={errors.fullDescription?.message}
                {...register("fullDescription")}
            />
        </AdminSectionCard>
    );
}