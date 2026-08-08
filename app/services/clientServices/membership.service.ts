import api from "@/app/lib/axios";

import { MembershipTier } from "@/app/types/clientTypes/membership.types";

class MembershipService {
    /**
     * Membership catalog.
     */
    async getMemberships(): Promise<MembershipTier[]> {
        const { data } = await api.get(
            "/membership-plans",
        );

        return data.data;
    }

    /**
     * Membership details.
     */
    async getMembershipBySlug(
        slug: string,
    ): Promise<MembershipTier> {
        const { data } = await api.get(
            `/membership-plans/${slug}`,
        );

        return data.data;
    }

    /**
     * Current membership.
     */
    async getCurrentMembership(): Promise<MembershipTier> {
        const { data } = await api.get(
            "/membership-plans/current",
        );

        return data.data;
    }

    /**
     * Next upgrade.
     */
    async getNextMembership(): Promise<MembershipTier> {
        const { data } = await api.get(
            "/membership-plans/next",
        );

        return data.data;
    }
}

export const membershipService =
    new MembershipService();