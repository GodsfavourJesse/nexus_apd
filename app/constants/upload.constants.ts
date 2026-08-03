import { DepositStatus } from "../types/clientTypes/deposit.types";

export const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const ALLOWED_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "application/pdf",
];

type Filter = "all" | DepositStatus;

export const FILTERS: {
    label: string;
    value: Filter;
}[] = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Pending",
        value: "pending",
    },
    {
        label: "Under Review",
        value: "under_review",
    },
    {
        label: "Approved",
        value: "approved",
    },
    {
        label: "Declined",
        value: "declined",
    },
    {
        label: "Cancelled",
        value: "cancelled",
    },
];