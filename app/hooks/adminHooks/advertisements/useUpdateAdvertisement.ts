import { advertisementService } from "@/app/services/adminServices/advertisement.service";
import { UpdateAdvertisementDto } from "@/app/types/adminTypes/advertisement.types";
import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";
import { advertisementKeys } from "./advertisement.keys";


interface UpdateParams {
    id: string;
    data: UpdateAdvertisementDto;
}

export function useUpdateAdvertisement() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            id,
            data,
        }: UpdateParams) =>
            advertisementService.updateAdvertisement(
                id,
                data,
            ),

        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({
                queryKey:
                    advertisementKeys.lists(),
            });

            queryClient.invalidateQueries({
                queryKey:
                    advertisementKeys.detail(
                        variables.id,
                    ),
            });
        },
    });
}