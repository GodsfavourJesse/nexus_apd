"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { authService } from "@/app/services/clientServices/auth.service";
import { useAuthStore } from "@/app/store/auth.store";

import { currentUserKeys } from "./currentUser.keys";

export function useCurrentUser() {

    const {

        setUser,

        logout,

        isAuthenticated,

    } = useAuthStore();

    const query = useQuery({

        queryKey:
            currentUserKeys.me(),

        queryFn: async () => {

            const response =
                await authService.me();

            return response.data;

        },

        enabled:
            isAuthenticated,

        staleTime:
            60 * 1000,

        gcTime:
            5 * 60 * 1000,

        retry: false,

        refetchOnWindowFocus: true,

        refetchOnReconnect: true,

        refetchOnMount: true,

    });

    useEffect(() => {

        if (query.data) {

            setUser(query.data);

        }

    }, [query.data, setUser]);

    useEffect(() => {

        if (query.isError) {

            logout();

        }

    }, [query.isError, logout]);

    return query;

}