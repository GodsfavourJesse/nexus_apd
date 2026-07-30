import { optional, z } from "zod";
import { AdvertisementStatus } from "../types/adminTypes/advertisement.types";

const urlMessage = "Please enter a valid URL.";
const requiredMessage = "This field is required.";

const dateSchema = z
    .string()
    .nullable()
    .optional();

/**
 * Shared date validation.
 */
function validateDates(
    data: {
        startDate?: string | null;
        endDate?: string | null;
    },
    ctx: z.RefinementCtx,
) {
    if (!data.startDate || !data.endDate) {
        return;
    }

    const start = new Date(data.startDate);
    const end = new Date(data.endDate);

    if (start >= end) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["endDate"],
            message: "End date must be after the start date.",
        });
    }
}

/**
 * Base Advertisement Schema
 */
const advertisementBaseSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, requiredMessage)
        .max(
            255,
            "Title cannot exceed 255 characters.",
        ),

    slug: z
        .string()
        .trim()
        .min(1, requiredMessage)
        .max(
            255,
            "Slug cannot exceed 255 characters.",
        )
        .regex(
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
            "Slug may only contain lowercase letters, numbers, and hyphens.",
        ),

    shortDescription: z
        .string()
        .trim()
        .min(1, requiredMessage)
        .max(
            500,
            "Short description cannot exceed 500 characters.",
        ),

    fullDescription: z
        .string()
        .trim()
        .min(1, requiredMessage),

    thumbnailUrl: z
        .string()
        .trim()
        .min(1, "Thumbnail is required.")
        .url(urlMessage),

    bannerUrl: z
        .union([
            z.literal(""),
            z.string().trim().url(urlMessage),
        ])
        .optional(),

    buttonText: z
        .string()
        .trim()
        .max(
            80,
            "Button text cannot exceed 80 characters.",
        )
        .optional(),

    /**
     * Campaign fields.
     *
     * These are intentionally optional because
     * advertisements currently behave as Daily Order
     * tasks. Campaign functionality will be enabled
     * later without changing the database schema.
     */
    targetUrl: z
        .string()
        .optional(),

    // category: z
    //     .string()
    //     .trim()
    //     .min(1, requiredMessage)
    //     .max(120),

    // priority: z
    //     .number()
    //     .int("Priority must be a whole number.")
    //     .min(
    //         0,
    //         "Priority cannot be less than 0.",
    //     )
    //     .max(
    //         100,
    //         "Priority cannot exceed 100.",
    //     ),

    // status: z
    //     .nativeEnum(AdvertisementStatus)
    //     .optional(),

    startDate: dateSchema,

    endDate: dateSchema,
});

/**
 * Create Advertisement
 */
export const createAdvertisementSchema =
    advertisementBaseSchema.superRefine(
        validateDates,
    );

/**
 * Update Advertisement
 */
export const updateAdvertisementSchema =
    advertisementBaseSchema
        .partial()
        .superRefine(validateDates);

/**
 * Default schema used by forms.
 */
export const advertisementSchema =
    createAdvertisementSchema;

export type CreateAdvertisementFormValues =
    z.infer<
        typeof createAdvertisementSchema
    >;

export type UpdateAdvertisementFormValues =
    z.infer<
        typeof updateAdvertisementSchema
    >;