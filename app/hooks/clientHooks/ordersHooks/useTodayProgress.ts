"use client";

import { useMemo } from "react";
import { useTodayMission } from "./useTodayMission";

export function useTodayProgress() {

    const {
        mission,
        ...query
    } = useTodayMission();

    const progress =
        useMemo(() => {
            if (!mission) {
                return {
                    completedTasks: 0,
                    totalTasks: 0,
                    remainingTasks: 0,
                    progress: 0,
                    todayEarnings: 0,
                    totalReward: 0,
                    percentage: 0,
                    isCompleted: false,
                };
            }

            const totalTasks = mission.requiredTasks;
            const completedTasks = mission.completedTasks;

            const remainingTasks = Math.max(
                totalTasks -
                completedTasks,
                0,
            );

            const percentage = totalTasks > 0
            ? (
                completedTasks /
                totalTasks
            ) * 100
            : 0;

            return {
                completedTasks,
                totalTasks,
                remainingTasks,
                progress: percentage,
                percentage,

                todayEarnings: Number(
                    mission.rewardEarned,
                ),

                totalReward: Number(
                    mission.totalReward,
                ),

                isCompleted: completedTasks >= totalTasks,
            };
        }, [
            mission,
        ]);

    return {
        ...query,
        mission,
        ...progress,
    };

}