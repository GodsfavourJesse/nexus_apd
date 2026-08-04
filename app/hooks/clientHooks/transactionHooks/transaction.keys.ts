"use client";

export const transactionKeys = {

    all: ["transactions"] as const,

    list: () =>
        [...transactionKeys.all, "list"] as const,

    detail: (
        id: string,
    ) =>
        [...transactionKeys.all, "detail", id] as const,

    reference: (
        reference: string,
    ) =>
        [
            ...transactionKeys.all,
            "reference",
            reference,
        ] as const,

};