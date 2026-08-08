import { z } from "zod";

// User Login
export const loginSchema = z.object({
    phone: z
        .string()
        .trim()
        .min(10, "Please enter a valid phone number.")
        .max(20, "Phone number is too long."),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters."),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// User Registration
export const registerSchema = z
    .object({
        phone: z
            .string()
            .trim()
            .min(10)
            .max(20),

        referral: z
            .string()
            .trim()
            .optional()
            .or(z.literal("")),

        password: z
            .string()
            .min(8)
            .regex(/[A-Z]/)
            .regex(/[a-z]/)
            .regex(/[0-9]/),

        confirmPassword: z.string(),

        country: z
            .string()
            .trim()
            .optional()
            .or(z.literal("")),
            })

    .refine(
        (data) => data.password === data.confirmPassword,
        {
            path: ["confirmPassword"],
            message: "Passwords do not match.",
        }
    );

export type RegisterFormData = z.infer<
    typeof registerSchema
>;

// Admin Login
export const adminLoginSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Please enter a valid email address."),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters."),
});

export type AdminLoginFormData = z.infer<
    typeof adminLoginSchema
>;