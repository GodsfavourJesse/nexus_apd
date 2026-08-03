"use client";

import axiosInstance from "@/app/lib/axios";

class UploadService {
    async uploadReceipt(
        file: File,
    ): Promise<string> {
        const formData = new FormData();

        formData.append("file", file);

        formData.append(
            "folder",
            "receipts",
        );

        const response =
            await axiosInstance.post(
                "/files/upload",
                formData,
                {
                    headers: {
                        "Content-Type":
                            "multipart/form-data",
                    },
                },
            );

        return response.data.data.url;
    }
}

export const uploadService =
    new UploadService();