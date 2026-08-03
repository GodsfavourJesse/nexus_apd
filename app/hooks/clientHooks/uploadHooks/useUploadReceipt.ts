"use client";

import { uploadService } from "@/app/services/clientServices/upoad.service";
import { useMutation } from "@tanstack/react-query";

export function useUploadReceipt() {
    return useMutation({
        mutationFn: (file: File) =>
            uploadService.uploadReceipt(file),
    });
}