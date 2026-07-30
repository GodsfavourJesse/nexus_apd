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
                "Task completed successfully.",
            );

            /**
             * Products
             */
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });

            queryClient.invalidateQueries({
                queryKey: [
                    "product",
                    productId,
                ],
            });

            /**
             * Completion status
             */
            queryClient.invalidateQueries({
                queryKey: [
                    "completed-advertisement",
                    productId,
                ],
            });

            /**
             * Wallet
             */
            queryClient.invalidateQueries({
                queryKey: ["wallet"],
            });

            /**
             * Dashboard summary
             */
            queryClient.invalidateQueries({
                queryKey: ["dashboard"],
            });

            /**
             * Transactions
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