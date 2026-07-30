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
 * =====================================
 * Request Interceptor
 * =====================================
 * Attach access token to every request.
 */
axiosInstance.interceptors.request.use(
    (config) => {

        const token = useAuthStore
            .getState()
            .accessToken;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error),
);

/**
 * =====================================
 * Response Interceptor
 * =====================================
 * Automatically refresh expired access
 * tokens and retry the original request.
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

        // Never try to refresh the refresh endpoint.
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

                if (!auth.user) {
                    throw new Error(
                        "Missing authenticated user.",
                    );
                }

                const response =
                    await axios.post(
                        `${axiosInstance.defaults.baseURL}/auth/refresh`,
                        {
                            refreshToken:
                                auth.refreshToken,
                        },
                    );

                const {
                    accessToken,
                    refreshToken,
                    // user,
                } = response.data.data;

                // Update Zustand
                auth.login(
                    accessToken,
                    refreshToken,
                    // auth.user!,
                );

                // Retry original request
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