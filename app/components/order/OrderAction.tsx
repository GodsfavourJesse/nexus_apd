"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Loader2,
    Check,
} from "lucide-react";

import { OrderItem } from "@/app/types/clientTypes/order.types";
import { useCompleteOrderItem } from "@/app/hooks/clientHooks/ordersHooks/useCompleteOrder";


interface Props {
    item: OrderItem;
}

export default function OrderAction({
    item,
}: Props) {

    const router =
        useRouter();

    const completeOrderItem =
        useCompleteOrderItem();

    const [
        completionSuccess,
        setCompletionSuccess,
    ] = useState(false);

    const isCompleted =
        item.status === "completed";

    const loading =
        completeOrderItem.isPending;

    const handleComplete = () => {

        if (
            loading ||
            isCompleted
        ) {
            return;
        }

        completeOrderItem.mutate(
            item.id,
            {
                onSuccess: () => {
                    setCompletionSuccess(true);

                    setTimeout(() => {
                        router.replace(
                            "/dashboard/order",
                        );
                    }, 1000);

                },
            },
        );

    };

    if (completionSuccess) {

        return (

            <div
                className="
                    sticky
                    bottom-0
                    z-20
                    border-t
                    border-slate-200
                    bg-white
                    px-5
                    py-5
                "
            >

                <div
                    className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        rounded-3xl
                        bg-emerald-50
                        py-6
                    "
                >

                    <div
                        className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-full
                            bg-emerald-600
                            text-white
                        "
                    >
                        <Check size={32} />
                    </div>

                    <h2
                        className="
                            mt-4
                            text-xl
                            font-bold
                            text-emerald-700
                        "
                    >
                        Task Completed
                    </h2>

                    <p
                        className="
                            mt-2
                            text-sm
                            text-slate-500
                        "
                    >
                        Your reward has been credited successfully.
                    </p>

                </div>

            </div>

        );

    }

    return (

        <div
    className="
        shrink-0
        border-t
        border-slate-200/70
        bg-white/90
        px-4
        pt-3
        pb-[max(12px,env(safe-area-inset-bottom))]
        backdrop-blur-xl
    "
>

            <button
                type="button"
                onClick={handleComplete}
                disabled={
                    loading ||
                    isCompleted
                }
                className={`
                    flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    text-[16px]
                    font-semibold
                    text-white
                    transition
                    active:scale-[0.98]

                    ${
                        isCompleted
                            ? "cursor-not-allowed bg-emerald-600"
                            : loading
                                ? "cursor-wait bg-slate-400"
                                : "bg-[#199FFF] hover:bg-[#0d8de7]"
                    }
                `}
            >

                {loading ? (

                    <>
                        <Loader2
                            size={18}
                            className="animate-spin"
                        />
                        Processing...
                    </>

                ) : isCompleted ? (

                    <>
                        <Check size={18} />
                        Completed
                    </>

                ) : (

                    item.advertisement.buttonText ||
                    "Complete Task"

                )}

            </button>

            <p
                className="
                    mt-2
                    text-center
                    text-[12px]
                    text-slate-400
                "
            >
                {isCompleted
                    ? "You have already completed this task."
                    : "Complete this advertisement to earn today's reward."}
            </p>

        </div>

    );

}