"use client";

import { useQuery } from "@tanstack/react-query";

import { productService } from "@/app/services/product.service";

export function useProductDashboard() {

    return useQuery({

        queryKey: [
            "product-dashboard",
        ],

        queryFn: () =>
            productService.getDashboard(),

    });

}