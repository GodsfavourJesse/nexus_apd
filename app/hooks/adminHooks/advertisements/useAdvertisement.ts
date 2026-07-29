import { useQuery } from "@tanstack/react-query";
import { advertisementKeys } from "./advertisement.keys";
import { advertisementService } from "@/app/services/adminServices/advertisement.service";

export function useAdvertisement(id: string) {
    return useQuery({
        queryKey: advertisementKeys.detail(id),

        queryFn: () =>
            advertisementService.getAdvertisement(id),

        enabled: !!id,
    });
}