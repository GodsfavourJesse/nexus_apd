import api from "@/app/lib/axios";

import {
    MembershipPlanListResponse,
    MembershipPlanResponse,
} from "@/app/types/adminTypes/membershipPlan.types";

class MembershipPlanService {
    /**
     * Return every membership plan.
     */
    async getMembershipPlans() {
        const { data } =
            await api.get<MembershipPlanListResponse>(
                "/membership-plans",
            );

        return data;
    }

    /**
     * Return one membership plan.
     */
    async getMembershipPlan(
        id: string,
    ) {
        const { data } =
            await api.get<MembershipPlanResponse>(
                `/membership-plans/${id}`,
            );

        return data;
    }
}

export const membershipPlanService =
    new MembershipPlanService();