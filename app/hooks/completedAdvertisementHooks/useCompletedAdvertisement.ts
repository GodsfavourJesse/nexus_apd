// "use client";

// import { useQuery } from "@tanstack/react-query";

// import { productService } from "@/app/services/clientServices/product.service";

// export function useCompletedAdvertisement(
//     advertisementId?: string,
// ) {
//     return useQuery({
//         queryKey: [
//             "completed-advertisement",
//             advertisementId,
//         ],
//         queryFn: () =>
//             productService.hasCompleted(
//                 advertisementId!,
//             ),
//         enabled: !!advertisementId,
//     });
// }