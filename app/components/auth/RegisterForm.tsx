"use client";

import { useEffect, useState } from "react";
import {
    useRouter,
    useSearchParams,
} from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
    Phone,
    Gift,
} from "lucide-react";

import { useAuthStore } from "@/app/store/auth.store";
import {
    RegisterFormData,
    registerSchema,
} from "@/app/schema/auth.schema";
import { authService } from "@/app/services/clientServices/auth.service";
import { ROUTES } from "@/app/constants/routes";

import TextField from "../ui/TextField";
import PasswordField from "../ui/PasswordField";
import SubmitButton from "../ui/SubmitButton";
import RegisterFormFooter from "../ui/RegisterFormFooter";

import { walletService } from "@/app/services/clientServices/wallet.service";
import { useWalletStore } from "@/app/store/wallet.store";

export default function RegisterForm() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const login = useAuthStore(
        (state) => state.login,
    );

    const [loading, setLoading] =
        useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),

        defaultValues: {
            phone: "",
            password: "",
            confirmPassword: "",
            referral: "",
            country: "",
        },
    });

    /**
     * Auto-fill referral code.
     * Example:
     * /register?ref=NX-4K8P2A
     */
    useEffect(() => {
        const referral =
            searchParams.get("ref");

        if (referral) {
            setValue(
                "referral",
                referral.toUpperCase(),
                {
                    shouldValidate: true,
                },
            );
        }
    }, [searchParams, setValue]);

    const onSubmit = async (
        values: RegisterFormData,
    ) => {
        try {
            setLoading(true);

            const response =
                await authService.register({
                    phone: values.phone,
                    password: values.password,
                    confirmPassword:
                        values.confirmPassword,
                    referral: values.referral,
                    country:
                        values.country?.trim() ||
                        "Nigeria",
                });

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

            toast.success(
                "Registration successful.",
            );

            router.push(
                ROUTES.DASHBOARD,
            );
        } catch (error: any) {
            toast.error(
                error?.response?.data?.message ??
                    "Registration failed.",
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
                icon={
                    <Phone className="h-4 w-4" />
                }
                error={errors.phone?.message}
                {...register("phone")}
            />

            <PasswordField
                label="Password"
                placeholder="Create a password"
                error={errors.password?.message}
                {...register("password")}
            />

            <PasswordField
                label="Confirm Password"
                placeholder="Confirm password"
                error={
                    errors.confirmPassword
                        ?.message
                }
                {...register(
                    "confirmPassword",
                )}
            />

            <TextField
                label="Country"
                placeholder="Nigeria"
                hint="Leave blank if you're in Nigeria."
                error={errors.country?.message}
                {...register("country")}
            />

            <TextField
                label="Invitation"
                placeholder="Example: NX-4K8P2A"
                icon={
                    <Gift className="h-4 w-4" />
                }
                className="uppercase"
                error={
                    errors.referral?.message
                }
                {...register("referral")}
            />

            <SubmitButton
                loading={loading}
                loadingText="Creating account..."
            >
                Create Account
            </SubmitButton>

            <RegisterFormFooter />
        </form>
    );
}