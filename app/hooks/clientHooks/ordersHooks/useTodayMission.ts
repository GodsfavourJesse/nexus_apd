"use client";

import { useMemo } from "react";

import { useTodayOrder } from "./useTodayOrder";

export function useTodayMission() {

    const query = useTodayOrder();

    const mission = useMemo(() => {

        if (!query.data) {
            return null;
        }

        return {
            ...query.data,

            hasTasks:
                query.data.items.length > 0,

            isCompleted:
                query.data.completedTasks >=
                query.data.requiredTasks,
        };

    }, [query.data]);

    return {

        ...query,

        mission,

    };

}