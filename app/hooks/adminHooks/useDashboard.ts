"use client";

import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "@/app/services/adminServices/dashboard.service";
import { DashboardData } from "../../types/adminTypes/dashboard.types";

export function useDashboard() {
    return useQuery<DashboardData>({
        queryKey: ["admin-dashboard"],
        queryFn: () =>
            dashboardService.getDashboard(),
    });
}