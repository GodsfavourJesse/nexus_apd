"use client";

import { UseFormReturn } from "react-hook-form";
import { ImageIcon } from "lucide-react";

import { CreateAdvertisementFormValues } from "@/app/schema/advertisement.schema";
import AdminSectionCard from "../AdvertisementSettings/AdminSectionCard";
import { AdminInput } from "../../fields/AdminField";
import ImageUpload from "../../image-upload/ImageUpload";
import { UploadFolders } from "@/app/constants/uploadFolders";

interface Props {
    form: UseFormReturn<CreateAdvertisementFormValues>;
}

export default function AdvertisementMedia({ form }: Props) {
    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = form;

    return (
        <AdminSectionCard
            icon={ImageIcon}
            title="Media"
            description="Images and call-to-action shown on the advertisement."
        >
            {/* Stacks on mobile, side-by-side from sm: up — no cramped squeeze */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <ImageUpload
                    label="Thumbnail"
                    value={watch("thumbnailUrl")}
                    folder={UploadFolders.ADVERTISEMENTS}
                    onChange={(url) =>
                        setValue("thumbnailUrl", url, {
                            shouldValidate: true,
                        })
                    }
                    error={errors.thumbnailUrl?.message}
                />

                <ImageUpload
                    label="Banner"
                    value={watch("bannerUrl")}
                    folder={UploadFolders.ADVERTISEMENTS}
                    onChange={(url) =>
                        setValue("bannerUrl", url, {
                            shouldValidate: true,
                        })
                    }
                    error={errors.bannerUrl?.message}
                    optional
                />
            </div>

            <AdminInput
                id="buttonText"
                label="Button Text"
                placeholder="Learn More"
                error={errors.buttonText?.message}
                {...register("buttonText")}
            />
        </AdminSectionCard>
    );
}