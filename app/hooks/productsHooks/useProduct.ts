"use client";

import { useQuery } from "@tanstack/react-query";

import { productService } from "@/app/services/product.service";

export function useProduct(
    productId?: string,
) {

    return useQuery({
        queryKey: [
            "product",
            productId,
        ],
        queryFn: () =>
            productService.getProduct(
                productId!,
            ),
        enabled: !!productId,
    });

}