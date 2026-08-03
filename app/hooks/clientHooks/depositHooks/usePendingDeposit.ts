import { useQuery } from "@tanstack/react-query";

import { depositService } from "@/app/services/clientServices/deposit.service";

export function usePendingDeposit() {
    return useQuery({
        queryKey: ["pending-deposit"],

        queryFn: () =>
            depositService.getPendingDeposit(),
    });
}