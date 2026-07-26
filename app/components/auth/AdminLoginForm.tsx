"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import {
    AdminLoginFormData,
    adminLoginSchema,
} from "@/app/schema/auth.schema";

import { authService } from "@/app/services/auth.service";
import { useAuthStore } from "@/app/store/auth.store";
import { ROUTES } from "@/app/constants/routes";

export default function AdminLoginForm() {
    const router = useRouter();

    const login = useAuthStore((state) => state.login);

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AdminLoginFormData>({
        resolver: zodResolver(adminLoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (
        values: AdminLoginFormData,
    ) => {
        try {
            setLoading(true);

            const response =
                await authService.adminLogin(
                    values,
                );

            /**
             * Save tokens.
             */
            login(
                response.data.accessToken,
                response.data.refreshToken,
            );

            /**
             * Load latest authenticated user.
             */
            const me =
                await authService.me();

            useAuthStore
                .getState()
                .setUser(
                    me.data,
                );

            toast.success(
                "Welcome Admin",
            );

            router.push(
                ROUTES.ADMIN_DASHBOARD,
            );
        } catch (error: any) {
            toast.error(
                error?.response?.data?.message ??
                "Login failed.",
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
        >
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Admin Email
                </label>

                <input
                    type="email"
                    {...register("email")}
                    className="w-full rounded-lg border px-4 py-3"
                    placeholder="admin@nexus.com"
                />

                {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Password
                </label>

                <input
                    type="password"
                    {...register("password")}
                    className="w-full rounded-lg border px-4 py-3"
                />

                {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.password.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-black py-3 font-medium text-white"
            >
                {loading
                    ? "Signing in..."
                    : "Admin Login"}
            </button>

            <p className="text-center text-sm">
                <Link
                    href="/login"
                    className="text-blue-600"
                >
                    User Login
                </Link>
            </p>
        </form>
    );
}