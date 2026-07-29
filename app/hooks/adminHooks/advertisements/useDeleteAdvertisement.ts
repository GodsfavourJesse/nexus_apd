import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";
import { advertisementKeys } from "./advertisement.keys";
import { advertisementService } from "@/app/services/adminServices/advertisement.service";

export function useDeleteAdvertisement() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) =>
            advertisementService.deleteAdvertisement(
                id,
            ),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey:
                    advertisementKeys.lists(),
            });
        },
    });
}