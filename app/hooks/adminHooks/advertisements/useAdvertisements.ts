import { useQuery } from "@tanstack/react-query";
import { advertisementKeys } from "./advertisement.keys";
import { advertisementService } from "@/app/services/adminServices/advertisement.service";

export function useAdvertisements() {
    return useQuery({
        queryKey: advertisementKeys.lists(),
        queryFn: () =>
            advertisementService.getAdvertisements(),
    });
}