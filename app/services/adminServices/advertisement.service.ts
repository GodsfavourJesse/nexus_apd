import axiosInstance from "@/app/lib/axios";
import { Advertisement, CreateAdvertisementDto, UpdateAdvertisementDto } from "@/app/types/adminTypes/advertisement.types";

interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

class AdvertisementService {

    /**
     * Get all advertisements.
     */
    async getAdvertisements(): Promise<Advertisement[]> {
        const response =
            await axiosInstance.get<ApiResponse<Advertisement[]>>(
                "/admin/advertisements",
            );

        return response.data.data;
    }

    /**
     * Get one advertisement.
     */
    async getAdvertisement(
        id: string,
    ): Promise<Advertisement> {
        const response =
            await axiosInstance.get<ApiResponse<Advertisement>>(
                `/admin/advertisements/${id}`,
            );

        return response.data.data;
    }

    /**
     * Create advertisement.
     */
    async createAdvertisement(
        data: CreateAdvertisementDto,
    ): Promise<Advertisement> {
        const response =
            await axiosInstance.post<ApiResponse<Advertisement>>(
                "/admin/advertisements",
                data,
            );

        return response.data.data;
    }

    /**
     * Update advertisement.
     */
    async updateAdvertisement(
        id: string,
        data: UpdateAdvertisementDto,
    ): Promise<Advertisement> {
        const response =
            await axiosInstance.put<ApiResponse<Advertisement>>(
                `/admin/advertisements/${id}`,
                data,
            );

        return response.data.data;
    }

    /**
     * Delete (archive) advertisement.
     */
    async deleteAdvertisement(
        id: string,
    ): Promise<Advertisement> {
        const response =
            await axiosInstance.delete<ApiResponse<Advertisement>>(
                `/admin/advertisements/${id}`,
            );

        return response.data.data;
    }

    /**
     * Activate advertisement.
     */
    async activateAdvertisement(
        id: string,
    ): Promise<Advertisement> {
        const response =
            await axiosInstance.patch<ApiResponse<Advertisement>>(
                `/admin/advertisements/${id}/activate`,
            );

        return response.data.data;
    }

    /**
     * Deactivate advertisement.
     */
    async deactivateAdvertisement(
        id: string,
    ): Promise<Advertisement> {
        const response =
            await axiosInstance.patch<ApiResponse<Advertisement>>(
                `/admin/advertisements/${id}/deactivate`,
            );

        return response.data.data;
    }

    /**
     * Publish advertisement.
     */
    async publishAdvertisement(
        id: string,
    ): Promise<Advertisement> {
        const response =
            await axiosInstance.patch<ApiResponse<Advertisement>>(
                `/admin/advertisements/${id}/publish`,
            );

        return response.data.data;
    }

    /**
     * Archive advertisement.
     */
    async archiveAdvertisement(
        id: string,
    ): Promise<Advertisement> {
        const response =
            await axiosInstance.patch<ApiResponse<Advertisement>>(
                `/admin/advertisements/${id}/archive`,
            );

        return response.data.data;
    }

}

export const advertisementService =
    new AdvertisementService();