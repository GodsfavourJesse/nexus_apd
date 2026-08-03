"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail } from "lucide-react";

import {
    AdminLoginFormData,
    adminLoginSchema,
} from "@/app/schema/auth.schema";
import { authService } from "@/app/services/clientServices/auth.service";
import { useAuthStore } from "@/app/store/auth.store";
import { ROUTES } from "@/app/constants/routes";
import TextField from "../ui/TextField";
import PasswordField from "../ui/PasswordField";
import SubmitButton from "../ui/SubmitButton";

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
                await authService.adminLogin(values);

            /**
             * Save tokens + user
             */
            login(
                response.data.accessToken,
                response.data.refreshToken,
                response.data.user,
            );

            /**
             * Refresh latest user profile
             */
            const me =
                await authService.me();

            useAuthStore
                .getState()
                .setUser(me.data);

            toast.success(
                "Welcome back, Admin."
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
            <TextField
                label="Admin Email"
                type="email"
                placeholder="admin@nexus.com"
                icon={<Mail className="h-4 w-4" />}
                error={errors.email?.message}
                {...register("email")}
            />

            <PasswordField
                label="Password"
                placeholder="Enter your password"
                error={errors.password?.message}
                {...register("password")}
            />

            <SubmitButton
                loading={loading}
                loadingText="Verifying..."
                className="bg-slate-900 hover:bg-slate-800"
            >
                Sign In to Admin Panel
            </SubmitButton>

            <p className="text-center text-sm text-slate-400">
                Not an admin?{" "}
                <Link
                    href={ROUTES.LOGIN}
                    className="font-semibold text-slate-600 hover:text-slate-900"
                >
                    Go to user login
                </Link>
            </p>
        </form>
    );
}