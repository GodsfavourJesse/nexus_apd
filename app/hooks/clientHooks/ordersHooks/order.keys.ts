import { QueryKey } from "@tanstack/react-query";

export const orderKeys = {
    all: ["orders"] as QueryKey,

    lists: () =>
        [...orderKeys.all, "list"] as QueryKey,

    today: () =>
        [...orderKeys.all, "today"] as QueryKey,

    items: () =>
        [...orderKeys.all, "items"] as QueryKey,

    item: (itemId: string) =>
        [...orderKeys.items(), itemId] as QueryKey,
};