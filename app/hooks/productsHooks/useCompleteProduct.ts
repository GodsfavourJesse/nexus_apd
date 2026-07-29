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

        onSuccess: (
            _,
            productId,
        ) => {

            toast.success(
                "✓ Task completed successfully.",
            );

            // Refresh the product list
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });

            // Refresh this product
            queryClient.invalidateQueries({
                queryKey: [
                    "product",
                    productId,
                ],
            });

            // Refresh completion status
            queryClient.invalidateQueries({
                queryKey: [
                    "completed-advertisement",
                    productId,
                ],
            });

        },

        onError: (
            error: any,
        ) => {

            toast.error(
                error?.response?.data?.message ??
                "Unable to complete product.",
            );

        },

    });

}