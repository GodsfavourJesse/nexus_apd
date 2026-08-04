export const walletKeys = {
    all: ["wallet"] as const,

    detail: () =>
        [...walletKeys.all, "detail"] as const,

    balance: () =>
        [...walletKeys.all, "balance"] as const,
};