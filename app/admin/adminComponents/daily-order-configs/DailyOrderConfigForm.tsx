"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    CreateDailyOrderConfigDto,
    DailyOrderConfig,
} from "@/app/types/adminTypes/dailyOrderConfig.types";
import { MembershipPlan } from "@/app/types/adminTypes/membershipPlan.types";

const schema = z.object({
    membershipPlanId: z
        .string()
        .min(1, "Membership plan is required."),

    tasksPerDay: z
        .number({
            error: "Tasks per day is required.",
        })
        .min(1, "Tasks per day must be at least 1."),

    rewardPerTask: z
        .string()
        .min(1, "Reward per task is required."),

    dailyRewardLimit: z
        .string()
        .min(1, "Daily reward limit is required."),

    isActive: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

interface Props {
    defaultValues?: DailyOrderConfig;

    membershipPlans: MembershipPlan[];

    isSubmitting?: boolean;

    onSubmit: (
        values: CreateDailyOrderConfigDto,
    ) => Promise<void> | void;
}

export default function DailyOrderConfigForm({
    defaultValues,
    membershipPlans,
    isSubmitting = false,
    onSubmit,
}: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),

        defaultValues: {
            membershipPlanId:
                defaultValues?.membershipPlanId ?? "",

            tasksPerDay:
                defaultValues?.tasksPerDay ?? 1,

            rewardPerTask:
                defaultValues?.rewardPerTask ?? "",

            dailyRewardLimit:
                defaultValues?.dailyRewardLimit ?? "",

            isActive:
                defaultValues?.isActive ?? true,
        },
    });

    const submit = (values: FormValues) => {
        onSubmit(values);
    };

    return (
        <form
            onSubmit={handleSubmit(submit)}
            autoComplete="off"
            className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden space-y-8 px-8 py-7"
        >
            {/* Membership Plan */}

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Membership Plan
                </label>

                <select
                    {...register("membershipPlanId")}
                    className="w-full rounded-lg border p-3"
                >
                    <option value="">
                        Select Membership Plan
                    </option>

                    {membershipPlans.map((plan) => (
                        <option
                            key={plan.id}
                            value={plan.id}
                        >
                            {plan.name}
                        </option>
                    ))}
                </select>

                {errors.membershipPlanId && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.membershipPlanId.message}
                    </p>
                )}
            </div>

            {/* Tasks Per Day */}

            <div>
                <label className="mb-2 block">
                    <span className="text-sm font-semibold text-slate-800">
                        Tasks Per Day
                    </span>

                    <span className="mt-1 block text-xs text-slate-500">
                        Maximum number of daily tasks.
                    </span>
                </label>

                <input
                    type="number"
                    min={1}
                    {...register("tasksPerDay", {
                        valueAsNumber: true,
                    })}
                    className="w-full rounded-lg border p-3"
                />

                {errors.tasksPerDay && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.tasksPerDay.message}
                    </p>
                )}
            </div>

            {/* Reward */}

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Reward Per Task
                </label>

                <input
                    type="number"
                    min="0"
                    step="0.01"                    placeholder="e.g. 100.00"
                    {...register("rewardPerTask")}
                    className="w-full rounded-lg border p-3"
                />

                {errors.rewardPerTask && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.rewardPerTask.message}
                    </p>
                )}
            </div>

            {/* Daily Reward Limit */}

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Daily Reward Limit
                </label>

                <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="e.g .3000.00"
                    {...register("dailyRewardLimit")}
                    className="w-full rounded-lg border border-slate-300 p-3 outline-none transition-all duration-200focus:border-blue-500"
                />

                {errors.dailyRewardLimit && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.dailyRewardLimit.message}
                    </p>
                )}
            </div>

            {/* Active */}

            <label className="flex items-center gap-3 rounded-lg border border-slate-200 p-4">
                <input
                    type="checkbox"
                    {...register("isActive")}
                />

                <span>Activate Configuration</span>
            </label>

            {/* Submit */}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition-all duration-200 hover:bg-blue-700 disabled:cursor-not-allowed
                disabled:opacity-50"
            >
                {isSubmitting
                    ? "Saving..."
                    : defaultValues
                    ? "Update Configuration"
                    : "Create Configuration"
                }
            </button>
        </form>
    );
}