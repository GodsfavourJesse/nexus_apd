export enum AdvertisementStatus {
    DRAFT = "draft",
    ACTIVE = "active",
    INACTIVE = "inactive",
    SCHEDULED = "scheduled",
    EXPIRED = "expired",
}

export interface Advertisement {
    id: string;

    title: string;
    slug: string;

    shortDescription: string;
    fullDescription: string;

    thumbnailUrl: string;
    bannerUrl: string | null;

    buttonText: string;

    targetUrl: string;

    category: string;

    priority: number;

    status: AdvertisementStatus;

    startDate: string | null;
    endDate: string | null;

    viewCount: number;
    completionCount: number;

    createdBy: string;

    createdAt: string;
    updatedAt: string;
}

export interface CreateAdvertisementDto {
    title: string;

    slug: string;

    shortDescription: string;
    fullDescription: string;

    thumbnailUrl: string;
    bannerUrl?: string | null;

    buttonText?: string;

    targetUrl: string;

    category: string;

    priority?: number;

    status?: AdvertisementStatus;

    startDate?: string | null;
    endDate?: string | null;
}

export interface UpdateAdvertisementDto {
    title?: string;

    slug?: string;

    shortDescription?: string;
    fullDescription?: string;

    thumbnailUrl?: string;
    bannerUrl?: string | null;

    buttonText?: string;

    targetUrl?: string;

    category?: string;

    priority?: number;

    status?: AdvertisementStatus;

    startDate?: string | null;
    endDate?: string | null;
}