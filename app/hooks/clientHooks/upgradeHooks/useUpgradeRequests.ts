"use client";

import { useQuery } from "@tanstack/react-query";

import { upgradeService } from "@/app/services/clientServices/upgrade.service";

export function useUpgradeRequests() {
    return useQuery({
        queryKey: ["upgrade-requests"],

        queryFn: () =>
            upgradeService.getUpgradeRequests(),

        staleTime: 1000 * 60,

        // refetchOnWindowFocus: true,
    });
}

// export function useUpgradeRequests() {
//     return useQuery({
//         queryKey: ["upgrade-requests"],

//         queryFn: async () => {
//             const data =
//                 await upgradeService.getUpgradeRequests();

//             console.log(
//                 "UPGRADE REQUESTS FROM API:",
//                 data,
//             );

//             return data;
//         },

//         staleTime: 1000 * 60,
//     });
// }