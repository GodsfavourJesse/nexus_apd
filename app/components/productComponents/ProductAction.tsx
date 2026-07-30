"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Loader2,
    Check,
} from "lucide-react";

import { Product } from "@/app/types/product.types";

import { useCompleteProduct } from "@/app/hooks/productsHooks/useCompleteProduct";
import { useCompletedAdvertisement } from "@/app/hooks/completedAdvertisementHooks/useCompletedAdvertisement";

interface Props {
    product: Product;
}

export default function ProductAction({
    product,
}: Props) {

    const router =
        useRouter();

    const {
        data: completed = false,
        isLoading: checkingCompletion,
    } = useCompletedAdvertisement(
        product.id,
    );

    const completeProduct =
        useCompleteProduct();

    /**
     * Local completion state.
     */
    const [
        isCompleted,
        setIsCompleted,
    ] = useState(false);

    /**
     * Success screen state.
     */
    const [
        completionSuccess,
        setCompletionSuccess,
    ] = useState(false);

    useEffect(() => {
        setIsCompleted(
            completed,
        );
    }, [completed]);

    /**
     * Complete advertisement.
     */
    const handleComplete = () => {

        if (
            isCompleted ||
            completeProduct.isPending
        ) {
            return;
        }

        completeProduct.mutate(
            product.id,
            {
                onSuccess: () => {

                    setIsCompleted(true);

                    setCompletionSuccess(true);

                    setTimeout(() => {

                        router.push(
                            "/dashboard/products",
                        );

                    }, 1200);

                },
            },
        );

    };

    const loading =
        checkingCompletion ||
        completeProduct.isPending;

    /**
     * Success screen.
     */
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
                        <Check
                            size={32}
                        />
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
                        Your reward has been credited
                        successfully.
                    </p>

                </div>

            </div>

        );

    }

    return (

        <div
            className="
                sticky
                bottom-0
                z-20
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
                    isCompleted ||
                    loading
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
                        <Check
                            size={18}
                        />
                        Completed
                    </>

                ) : (

                    product.buttonText ??
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
                    : "Complete this task once to qualify for rewards."}
            </p>

        </div>

    );

}