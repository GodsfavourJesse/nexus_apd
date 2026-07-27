"use client";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    Tooltip,
} from "recharts";
import { TrendingUp } from "lucide-react";

interface RevenueItem {
    date: string;
    revenue: number;
}

interface DashboardRevenueChartProps {
    data?: RevenueItem[];
    loading?: boolean;
}

function formatCurrency(value: number) {
    return `₦${value.toLocaleString()}`;
}

export default function DashboardRevenueChart({
    data = [],
    loading = false,
}: DashboardRevenueChartProps) {
    return (
        <section className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold text-slate-900">
                        Revenue
                    </h2>

                    <p className="text-sm text-slate-500">
                        Last 30 days
                    </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                    <TrendingUp size={22} />
                </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                {loading ? (
                    <div className="space-y-4 animate-pulse">
                        <div className="h-5 w-40 rounded bg-slate-200" />

                        <div className="h-60 rounded-2xl bg-slate-100" />
                    </div>
                ) : data.length === 0 ? (
                    <div className="flex h-60 items-center justify-center text-sm text-slate-500">
                        No revenue data available.
                    </div>
                ) : (
                    <>
                        <div className="mb-5">
                            <p className="text-xs uppercase tracking-wide text-slate-500">
                                Total Revenue
                            </p>

                            <h3 className="mt-1 text-3xl font-bold text-slate-900">
                                {formatCurrency(
                                    data.reduce(
                                        (sum, item) =>
                                            sum +
                                            item.revenue,
                                        0,
                                    ),
                                )}
                            </h3>
                        </div>

                        <div className="h-60">
                            <ResponsiveContainer
                                width="100%"
                                height="100%"
                            >
                                <AreaChart
                                    data={data}
                                >
                                    <defs>
                                        <linearGradient
                                            id="revenueGradient"
                                            x1="0"
                                            y1="0"
                                            x2="0"
                                            y2="1"
                                        >
                                            <stop
                                                offset="5%"
                                                stopColor="#10b981"
                                                stopOpacity={
                                                    0.35
                                                }
                                            />

                                            <stop
                                                offset="95%"
                                                stopColor="#10b981"
                                                stopOpacity={
                                                    0
                                                }
                                            />
                                        </linearGradient>
                                    </defs>

                                    <XAxis
                                        dataKey="date"
                                        tick={{
                                            fontSize: 11,
                                        }}
                                        tickLine={
                                            false
                                        }
                                        axisLine={
                                            false
                                        }
                                    />

                                    <Tooltip
                                        formatter={(
                                            value,
                                        ) => [
                                            formatCurrency(
                                                Number(
                                                    value,
                                                ),
                                            ),
                                            "Revenue",
                                        ]}
                                    />

                                    <Area
                                        type="monotone"
                                        dataKey="revenue"
                                        stroke="#10b981"
                                        strokeWidth={
                                            3
                                        }
                                        fill="url(#revenueGradient)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}