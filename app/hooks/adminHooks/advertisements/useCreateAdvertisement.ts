import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";
import { advertisementKeys } from "./advertisement.keys";
import { CreateAdvertisementDto } from "@/app/types/adminTypes/advertisement.types";
import { advertisementService } from "@/app/services/adminServices/advertisement.service";

export function useCreateAdvertisement() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (
            data: CreateAdvertisementDto,
        ) =>
            advertisementService.createAdvertisement(
                data,
            ),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey:
                    advertisementKeys.lists(),
            });
        },
    });
}