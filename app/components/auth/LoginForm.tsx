"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Link, Phone } from "lucide-react";

import { useAuthStore } from "@/app/store/auth.store";
import { LoginFormData, loginSchema } from "@/app/schema/auth.schema";
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
    const login = useAuthStore((state) => state.login);

    const [loading, setLoading] = useState(false);

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
        data: LoginFormData,
    ) => {
        try {
            setLoading(true);

            const response =
                await authService.login(data);

            /**
             * Save tokens
             */
            login(
                response.data.accessToken,
                response.data.refreshToken,
            );

            /**
             * Load latest user
             */
            const me =
                await authService.me();

            useAuthStore
                .getState()
                .setUser(me.data);

            /**
             * Load wallet
             */
            const wallet =
                await walletService.getWallet();

            useWalletStore
                .getState()
                .setWallet(wallet.data);

            toast.success(
                "Login successful."
            );

            if (me.data.role === "admin") {
                router.push(
                    ROUTES.ADMIN_DASHBOARD
                );
            } else {
                router.push(
                    ROUTES.DASHBOARD
                );
            }
        } catch (error: any) {
            toast.error(
                error?.response?.data?.message ??
                    "Login failed."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-6 flex flex-col gap-2">
            <TextField
                label="Phone Number"
                type="tel"
                placeholder="08012345678"
                icon={<Phone className="h-4 w-4" />}
                error={errors.phone?.message}
                {...register("phone")}
            />

            <div className="mb-4">
                <PasswordField
                    label="Password"
                    placeholder="Enter your password"
                    error={errors.password?.message}
                    {...register("password")}
                />
            </div>

            {/* <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        {...register("rememberMe")}
                        className="h-4 w-4 rounded border-slate-300 text-yellow-600"
                    />

                    <span className="text-[12px] text-slate-600">
                        Remember me
                    </span>

                </label>
            </div> */}

            <SubmitButton loading={loading} loadingText="Logging in...">
                Log In
            </SubmitButton>

            <LoginFormFooter />
        </form>
    );
}