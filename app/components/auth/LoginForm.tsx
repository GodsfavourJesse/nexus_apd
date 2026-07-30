"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Phone } from "lucide-react";

import { useAuthStore } from "@/app/store/auth.store";
import {
    LoginFormData,
    loginSchema,
} from "@/app/schema/auth.schema";
import { authService } from "@/app/services/auth.service";
import { ROUTES } from "@/app/constants/routes";

import TextField from "../ui/TextField";
import PasswordField from "../ui/PasswordField";
import SubmitButton from "../ui/SubmitButton";
import LoginFormFooter from "../ui/LoginFooter";

import { walletService } from "@/app/services/wallet.service";
import { useWalletStore } from "@/app/store/wallet.store";

export default function LoginForm() {
    const router = useRouter();

    const login = useAuthStore(
        (state) => state.login,
    );

    const [loading, setLoading] =
        useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            phone: "",
            password: "",
        },
    });

    const onSubmit = async (
        values: LoginFormData,
    ) => {
        try {
            setLoading(true);

            const response =
                await authService.login(values);

            const {
                accessToken,
                refreshToken,
                user,
            } = response.data;

            /**
             * Save authenticated session
             */
            login(
                accessToken,
                refreshToken,
                user,
            );

            /**
             * Load wallet
             */
            const wallet =
                await walletService.getWallet();

            useWalletStore
                .getState()
                .setWallet(wallet.data);

            toast.success("Login successful.");

            router.push(
                user.role === "admin"
                    ? ROUTES.ADMIN_DASHBOARD
                    : ROUTES.DASHBOARD,
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
            className="space-y-5 p-6 flex flex-col gap-2"
        >
            <TextField
                label="Phone Number"
                type="tel"
                placeholder="08012345678"
                icon={<Phone className="h-4 w-4" />}
                error={errors.phone?.message}
                {...register("phone")}
            />

            <PasswordField
                label="Password"
                placeholder="Enter your password"
                error={errors.password?.message}
                {...register("password")}
            />

            <SubmitButton
                loading={loading}
                loadingText="Logging in..."
            >
                Log In
            </SubmitButton>

            <LoginFormFooter />
        </form>
    );
}