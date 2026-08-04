import axios, {
    AxiosHeaders,
    InternalAxiosRequestConfig,
} from "axios";

import { useAuthStore } from "../store/auth.store";
import { ROUTES } from "../constants/routes";

interface RetryRequestConfig
    extends InternalAxiosRequestConfig {
    _retry?: boolean;
}

const axiosInstance = axios.create({
    baseURL:
        process.env.NEXT_PUBLIC_API_URL ??
        "http://localhost:5000/api/v1",

    headers: {
        "Content-Type": "application/json",
    },

    withCredentials: true,
});

/**
 * Dedicated client for refreshing tokens.
 * This client has NO interceptors attached,
 * preventing infinite refresh loops.
 */
const refreshClient = axios.create({
    baseURL:
        process.env.NEXT_PUBLIC_API_URL ??
        "http://localhost:5000/api/v1",

    headers: {
        "Content-Type": "application/json",
    },

    withCredentials: true,
});

/**
 * Ensures only ONE refresh request
 * happens at a time.
 */
let refreshPromise: Promise<{
    accessToken: string;
    refreshToken: string;
}> | null = null;

/**
 * =====================================
 * Request Interceptor
 * =====================================
 */
axiosInstance.interceptors.request.use(
    (config) => {
        const token =
            useAuthStore.getState().accessToken;

        if (token) {
            config.headers.Authorization =
                `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error),
);

/**
 * =====================================
 * Response Interceptor
 * =====================================
 */
axiosInstance.interceptors.response.use(
    (response) => response,

    async (error) => {

        const originalRequest =
            error.config as
                | RetryRequestConfig
                | undefined;

        if (!originalRequest) {
            return Promise.reject(error);
        }

        /**
         * Never refresh the refresh endpoint.
         */
        if (
            originalRequest.url?.includes(
                "/auth/refresh",
            )
        ) {
            return Promise.reject(error);
        }

        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {

            originalRequest._retry = true;

            try {

                const auth =
                    useAuthStore.getState();

                if (!auth.refreshToken) {
                    throw new Error(
                        "Missing refresh token.",
                    );
                }

                /**
                 * If another request is already
                 * refreshing, wait for it.
                 */
                if (!refreshPromise) {

                    refreshPromise =
                        refreshClient
                            .post(
                                "/auth/refresh",
                                {
                                    refreshToken:
                                        auth.refreshToken,
                                },
                            )
                            .then((response) => {

                                const {
                                    accessToken,
                                    refreshToken,
                                } =
                                    response.data.data;

                                if (!auth.user) {
                                    throw new Error("Missing authenticated user.");
                                }

                                auth.login(
                                    accessToken,
                                    refreshToken,                                );

                                return {
                                    accessToken,
                                    refreshToken,
                                };

                            })
                            .finally(() => {

                                refreshPromise =
                                    null;

                            });

                }

                const {
                    accessToken,
                } =
                    await refreshPromise;

                originalRequest.headers =
                    originalRequest.headers ??
                    new AxiosHeaders();

                originalRequest.headers.set(
                    "Authorization",
                    `Bearer ${accessToken}`,
                );

                return axiosInstance(
                    originalRequest,
                );

            } catch {

                useAuthStore
                    .getState()
                    .logout();

                if (
                    typeof window !==
                    "undefined"
                ) {

                    window.location.href =
                        ROUTES.LOGIN;

                }

                return Promise.reject(error);

            }

        }

        return Promise.reject(error);

    },
);

export default axiosInstance;