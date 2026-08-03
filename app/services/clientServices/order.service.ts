import axiosInstance from "@/app/lib/axios";

import {
    ApiResponse,
    CompleteOrderResponse,
    Order,
    OrderItem,
    TodayOrder,
} from "@/app/types/clientTypes/order.types";

class OrderService {

    // Get today's daily order.
    async getTodayOrder(): Promise<TodayOrder> {

        const response =
            await axiosInstance.get<
                ApiResponse<TodayOrder>
            >(
                "/orders/today",
            );

        return response.data.data;
    }

    // Get one order.
    async getOrder(
        orderId: string,
    ): Promise<Order> {

        const response =
            await axiosInstance.get<
                ApiResponse<Order>
            >(
                `/orders/${orderId}`,
            );

        return response.data.data;
    }

    /**
     * Get one order item
     * together with its advertisement.
     */
    async getOrderItem(
        itemId: string,
    ): Promise<OrderItem> {

        const response =
            await axiosInstance.get<
                ApiResponse<OrderItem>
            >(
                `/orders/items/${itemId}`,
            );

        return response.data.data;
    }

    /**
     * Get today's order items.
     */
    async getOrderItems(): Promise<OrderItem[]> {

        const response =
            await axiosInstance.get<
                ApiResponse<OrderItem[]>
            >(
                "/orders/items",
            );

        return response.data.data;
    }

    /**
     * Complete one task.
     */
    async completeOrderItem(
        itemId: string,
    ): Promise<CompleteOrderResponse> {

        const response =
            await axiosInstance.post<
                CompleteOrderResponse
            >(
                `/orders/items/${itemId}/complete`,
            );

        return response.data;
    }
}

export const orderService =
    new OrderService();