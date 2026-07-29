"use client";

import { Loader2, Check } from "lucide-react";

import { Product } from "@/app/types/product.types";

import { useCompleteProduct } from "@/app/hooks/productsHooks/useCompleteProduct";
import { useCompletedAdvertisement } from "@/app/hooks/completedAdvertisementHooks/useCompletedAdvertisement";

interface Props {
    product: Product;
}

export default function ProductAction({
    product,
}: Props) {

    const {
        data: completed = false,
        isLoading: checkingCompletion,
    } = useCompletedAdvertisement(
        product.id,
    );

    const completeProduct =
        useCompleteProduct();

    const handleComplete = () => {

        if (completed) return;

        completeProduct.mutate(
            product.id,
        );

    };

    const loading =
        checkingCompletion ||
        completeProduct.isPending;

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
                    completed ||
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
                        completed
                            ? "bg-emerald-600 cursor-not-allowed"
                            : loading
                            ? "bg-slate-400 cursor-wait"
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
                ) : completed ? (
                    <>
                        <Check size={18} />
                        Completed
                    </>
                ) : (
                    product.buttonText ||
                    "Complete"
                )}

            </button>

            <p className="mt-2 text-center text-[12px] text-slate-400">
                {completed
                    ? "You have already completed this task."
                    : "Complete this task once to qualify for rewards."}
            </p>

        </div>
    );

}