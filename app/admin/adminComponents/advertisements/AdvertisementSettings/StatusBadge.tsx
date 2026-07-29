import { AdvertisementStatus } from "@/app/types/adminTypes/advertisement.types";

const STYLES: Record<AdvertisementStatus, string> = {
    [AdvertisementStatus.DRAFT]: "bg-slate-100 text-slate-600",
    [AdvertisementStatus.ACTIVE]: "bg-green-100 text-green-700",
    [AdvertisementStatus.INACTIVE]: "bg-amber-100 text-amber-700",
    [AdvertisementStatus.SCHEDULED]: "bg-blue-100 text-blue-700",
    [AdvertisementStatus.EXPIRED]: "bg-red-100 text-red-700",
};

const LABELS: Record<AdvertisementStatus, string> = {
    [AdvertisementStatus.DRAFT]: "Draft",
    [AdvertisementStatus.ACTIVE]: "Active",
    [AdvertisementStatus.INACTIVE]: "Inactive",
    [AdvertisementStatus.SCHEDULED]: "Scheduled",
    [AdvertisementStatus.EXPIRED]: "Expired",
};

export default function StatusBadge({
    status,
}: {
    status: AdvertisementStatus;
}) {
    return (
        <span
            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${STYLES[status]}`}
        >
            {LABELS[status]}
        </span>
    );
}