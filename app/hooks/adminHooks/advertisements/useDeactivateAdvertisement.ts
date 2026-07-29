import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";
import { advertisementKeys } from "./advertisement.keys";
import { advertisementService } from "@/app/services/adminServices/advertisement.service";

export function useDeactivateAdvertisement() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) =>
            advertisementService.deactivateAdvertisement(
                id,
            ),

        onSuccess: (_, id) => {
            queryClient.invalidateQueries({
                queryKey:
                    advertisementKeys.lists(),
            });

            queryClient.invalidateQueries({
                queryKey:
                    advertisementKeys.detail(id),
            });
        },
    });
}