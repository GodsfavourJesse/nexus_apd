"use client";

import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { toast } from "sonner";

import { productService } from "@/app/services/product.service";

export function useCompleteProduct() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn: (
            productId: string,
        ) =>
            productService.completeProduct(
                productId,
            ),

        onSuccess: (_, productId) => {

            toast.success(
                "Task completed successfully.",
            );

            /**
             * Refresh available products.
             * The completed product will disappear.
             */
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });

            /**
             * Refresh product details.
             */
            queryClient.invalidateQueries({
                queryKey: [
                    "product",
                    productId,
                ],
            });

            /**
             * Refresh completion status.
             */
            queryClient.invalidateQueries({
                queryKey: [
                    "completed-advertisement",
                    productId,
                ],
            });

            /**
             * Refresh product statistics.
             */
            queryClient.invalidateQueries({
                queryKey: ["product-dashboard"],
            });

            /**
             * Refresh wallet.
             */
            queryClient.invalidateQueries({
                queryKey: ["wallet"],
            });

            /**
             * Refresh transaction history.
             */
            queryClient.invalidateQueries({
                queryKey: ["transactions"],
            });

        },

        onError: (
            error: any,
        ) => {

            toast.error(
                error?.response?.data?.message ??
                "Unable to complete task.",
            );

        },

    });

}