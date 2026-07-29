export interface UploadedFile {
    publicId: string;
    url: string;
    originalName: string;
    mimeType: string;
    size: number;
    format: string;
    width?: number;
    height?: number;
    folder: string;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}