import axiosInstance from "@/app/lib/axios";

import {
    UploadFolder,
} from "@/app/constants/uploadFolders";
import { ApiResponse, UploadedFile } from "@/app/types/adminTypes/file.types";

class FileService {

    /**
     * Upload a file.
     */
    async uploadFile(
        file: File,
        folder: UploadFolder,
    ): Promise<UploadedFile> {

        const formData = new FormData();

        formData.append(
            "file",
            file,
        );

        formData.append(
            "folder",
            folder,
        );

        const response =
            await axiosInstance.post<
                ApiResponse<UploadedFile>
            >(
                "/files/upload",
                formData,
                {
                    headers: {
                        "Content-Type":
                            "multipart/form-data",
                    },
                },
            );

        return response.data.data;
    }

    /**
     * Delete an uploaded file.
     */
    async deleteFile(
        publicId: string,
        resourceType:
            | "image"
            | "raw" = "image",
    ) {

        await axiosInstance.delete(
            "/files",
            {
                data: {
                    publicId,
                    resourceType,
                },
            },
        );
    }
}

export const fileService =
    new FileService();