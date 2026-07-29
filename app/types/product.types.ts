import { Advertisement } from "./adminTypes/advertisement.types";

export type Product = Advertisement;

export interface ProductCompletionResponse {
    success: boolean;
    message: string;
}

export interface ProductCompletedStatus {
    completed: boolean;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}