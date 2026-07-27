"use client";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";
import { Users } from "lucide-react";

interface UserGrowthItem {
    date: string;
    users: number;
}

interface DashboardUserGrowthChartProps {
    data?: UserGrowthItem[];
    loading?: boolean;
}

export default function DashboardUserGrowthChart({
    data = [],
    loading = false,
}: DashboardUserGrowthChartProps) {
    const totalUsers = data.reduce(
        (sum, item) => sum + item.users,
        0,
    );

    const latestUsers =
        data.length > 0
            ? data[data.length - 1].users
            : 0;

    return (
        <section className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold text-slate-900">
                        User Growth
                    </h2>

                    <p className="text-sm text-slate-500">
                        New registrations (30 days)
                    </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Users size={22} />
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
                        No user growth data available.
                    </div>
                ) : (
                    <>
                        <div className="mb-6 flex items-end justify-between">
                            <div>
                                <p className="text-xs uppercase tracking-wide text-slate-500">
                                    New Users
                                </p>

                                <h3 className="mt-1 text-3xl font-bold text-slate-900">
                                    {totalUsers.toLocaleString()}
                                </h3>
                            </div>

                            <div className="rounded-xl bg-blue-50 px-3 py-2 text-right">
                                <p className="text-xs text-slate-500">
                                    Latest Day
                                </p>

                                <p className="font-semibold text-blue-600">
                                    +{latestUsers}
                                </p>
                            </div>
                        </div>

                        <div className="h-64">
                            <ResponsiveContainer
                                width="100%"
                                height="100%"
                            >
                                <LineChart
                                    data={data}
                                    margin={{
                                        top: 10,
                                        right: 5,
                                        left: -15,
                                        bottom: 0,
                                    }}
                                >
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        vertical={false}
                                    />

                                    <XAxis
                                        dataKey="date"
                                        tick={{
                                            fontSize: 11,
                                        }}
                                        tickLine={false}
                                        axisLine={false}
                                    />

                                    <Tooltip
                                        formatter={(
                                            value,
                                        ) => [
                                            Number(
                                                value,
                                            ).toLocaleString(),
                                            "Users",
                                        ]}
                                    />

                                    <Line
                                        type="monotone"
                                        dataKey="users"
                                        stroke="#2563eb"
                                        strokeWidth={3}
                                        dot={{
                                            r: 4,
                                        }}
                                        activeDot={{
                                            r: 6,
                                        }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}