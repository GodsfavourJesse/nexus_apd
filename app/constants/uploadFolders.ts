export const UploadFolders = {
    PAYMENT_PROOFS: "payment-proofs",
    RECEIPTS: "receipts",
    AVATARS: "avatars",
    ADVERTISEMENTS: "advertisements",
    MEMBERSHIP: "membership",
    KYC: "kyc",
    DOCUMENTS: "documents",
} as const;

export type UploadFolder =
    (typeof UploadFolders)[keyof typeof UploadFolders];