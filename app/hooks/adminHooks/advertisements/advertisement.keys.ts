import { QueryKey } from "@tanstack/react-query";

export const advertisementKeys = {
    all: ["admin-advertisements"] as QueryKey,

    lists: () =>
        [...advertisementKeys.all, "list"] as QueryKey,

    details: () =>
        [...advertisementKeys.all, "detail"] as QueryKey,

    detail: (id: string) =>
        [...advertisementKeys.details(), id] as QueryKey,
};