"use client";

import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "@/app/services/dashboard.service";
import { DashboardData } from "../types/dashboard.types";

export function useDashboard() {
    return useQuery<DashboardData>({
        queryKey: ["admin-dashboard"],
        queryFn: () =>
            dashboardService.getDashboard(),
    });
}