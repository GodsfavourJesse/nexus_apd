import axiosInstance from "@/app/lib/axios";

import {
    ApiResponse,
    Product,
    ProductDashboard,
} from "@/app/types/product.types";

class ProductService {

    async getDashboard(): Promise<ProductDashboard> {
        const response =
            await axiosInstance.get<
                ApiResponse<ProductDashboard>
            >(
                "/products/dashboard",
            );

        return response.data.data;

    }

    /**
     * Get available products.
     */
    async getProducts(): Promise<Product[]> {

        const response =
            await axiosInstance.get<
                ApiResponse<Product[]>
            >(
                "/products",
            );

        return response.data.data;
    }

    /**
     * Get one product.
     */
    async getProduct(
        id: string,
    ): Promise<Product> {

        const response =
            await axiosInstance.get<
                ApiResponse<Product>
            >(
                `/products/${id}`,
            );

        return response.data.data;
    }

    /**
     * Complete product.
     */
    async completeProduct(
        id: string,
    ) {

        const response =
            await axiosInstance.post(
                `/products/${id}/complete`,
            );

        return response.data;
    }

    /**
     * Determine whether the authenticated
     * user has completed a product.
     */
    async hasCompleted(
        advertisementId: string,
    ): Promise<boolean> {

        const response =
            await axiosInstance.get(
                `/completed-advertisements/${advertisementId}`,
            );

        return response.data.data.completed;

    }

}

export const productService =
    new ProductService();