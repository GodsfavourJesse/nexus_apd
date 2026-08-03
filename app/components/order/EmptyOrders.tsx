"use client";

import { TodayOrderState } from "@/app/types/clientTypes/order.types";
import {
    CheckCircle2,
    Inbox,
} from "lucide-react";

interface EmptyOrdersProps {
    state: TodayOrderState;
}

export default function EmptyOrders({
    state,
}: EmptyOrdersProps) {

    const isCompleted =
        state === "COMPLETED";

    return (

        <div
            className="
                flex
                min-h-[360px]
                flex-col
                items-center
                justify-center
                rounded-3xl
                bg-white
                px-8
                text-center
                shadow-sm
            "
        >

            <div
                className={`
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    ${
                        isCompleted
                            ? "bg-emerald-100"
                            : "bg-slate-100"
                    }
                `}
            >

                {isCompleted ? (

                    <CheckCircle2
                        size={40}
                        className="text-emerald-600"
                    />

                ) : (

                    <Inbox
                        size={40}
                        className="text-slate-500"
                    />

                )}

            </div>

            <h2
                className="
                    mt-6
                    text-xl
                    font-bold
                    text-slate-900
                "
            >
                {isCompleted
                    ? "All Daily Tasks Completed 🎉"
                    : "No Tasks Available"}
            </h2>

            <p
                className="
                    mt-3
                    max-w-xs
                    text-sm
                    leading-6
                    text-slate-500
                "
            >
                {isCompleted
                    ? "You've completed every advertisement assigned for today. Your reward has been credited successfully. Come back tomorrow for a new batch of daily tasks."
                    : "There are currently no advertisements available for your account. Please check back later when new tasks become available."}
            </p>

            <div
                className={`
                    mt-6
                    rounded-full
                    px-5
                    py-2
                    text-sm
                    font-medium
                    ${
                        isCompleted
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-slate-100 text-slate-700"
                    }
                `}
            >
                {isCompleted
                    ? "Daily quota completed"
                    : "No advertisements available"}
            </div>

        </div>

    );
}