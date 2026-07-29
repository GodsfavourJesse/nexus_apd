"use client";

import { UseFormReturn } from "react-hook-form";
import { Target } from "lucide-react";

import { CreateAdvertisementFormValues } from "@/app/schema/advertisement.schema";
import { AdvertisementStatus } from "@/app/types/adminTypes/advertisement.types";
import AdminSectionCard from "../AdvertisementSettings/AdminSectionCard";
import { AdminInput, AdminSelect } from "../../fields/AdminField";

interface Props {
    form: UseFormReturn<CreateAdvertisementFormValues>;
}

const STATUS_OPTIONS: { value: AdvertisementStatus; label: string }[] = [
    { value: AdvertisementStatus.DRAFT, label: "Draft" },
    { value: AdvertisementStatus.ACTIVE, label: "Active" },
    { value: AdvertisementStatus.INACTIVE, label: "Inactive" },
    { value: AdvertisementStatus.SCHEDULED, label: "Scheduled" },
    { value: AdvertisementStatus.EXPIRED, label: "Expired" },
];

export default function AdvertisementCampaign({ form }: Props) {
    const {
        register,
        formState: { errors },
    } = form;

    return (
        <AdminSectionCard
            icon={Target}
            title="Campaign Settings"
            description="Targeting, ranking, status and scheduling."
        >
            <AdminInput
                id="targetUrl"
                label="Target URL"
                placeholder="https://example.com/product"
                error={errors.targetUrl?.message}
                {...register("targetUrl")}
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <AdminInput
                    id="category"
                    label="Category"
                    placeholder="Electronics"
                    error={errors.category?.message}
                    {...register("category")}
                />

                <AdminInput
                    id="priority"
                    label="Priority"
                    type="number"
                    min={0}
                    max={100}
                    placeholder="0"
                    hint="Higher priority shows first (0–100)."
                    error={errors.priority?.message}
                    {...register("priority", { valueAsNumber: true })}
                />
            </div>

            <AdminSelect
                id="status"
                label="Status"
                error={errors.status?.message}
                {...register("status")}
            >
                {STATUS_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </AdminSelect>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <AdminInput
                    id="startDate"
                    label="Start Date"
                    type="date"
                    optional
                    error={errors.startDate?.message}
                    {...register("startDate")}
                />

                <AdminInput
                    id="endDate"
                    label="End Date"
                    type="date"
                    optional
                    error={errors.endDate?.message}
                    {...register("endDate")}
                />
            </div>
        </AdminSectionCard>
    );
}