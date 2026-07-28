"use client";

import { upgradeRequestService } from "@/app/services/adminServices/upgrade-request.service";
import { RejectUpgradeDto } from "@/app/types/adminTypes/upgrade-request.types";
import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";


interface Variables {
    id: string;

    data: RejectUpgradeDto;
}

export function useRejectUpgrade() {
    const queryClient =
        useQueryClient();

    return useMutation({
        mutationFn: ({
            id,
            data,
        }: Variables) =>
            upgradeRequestService.rejectRequest(
                id,
                data,
            ),

        onSuccess: (
            _,
            variables,
        ) => {
            queryClient.invalidateQueries({
                queryKey: [
                    "admin-upgrade-requests",
                ],
            });

            queryClient.invalidateQueries({
                queryKey: [
                    "admin-upgrade-request",
                    variables.id,
                ],
            });
        },
    });
}