import { LayoutGrid, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import {
    Advertisement,
    AdvertisementStatus,
} from "@/app/types/adminTypes/advertisement.types";

interface Props {
    advertisements: Advertisement[];
    loading?: boolean;
}

export default function AdvertisementStatistics({
    advertisements,
    loading = false,
}: Props) {
    const total = advertisements.length;
    const active = advertisements.filter(
        (a) => a.status === AdvertisementStatus.ACTIVE,
    ).length;
    const scheduled = advertisements.filter(
        (a) => a.status === AdvertisementStatus.SCHEDULED,
    ).length;
    const expired = advertisements.filter(
        (a) => a.status === AdvertisementStatus.EXPIRED,
    ).length;

    const cards = [
        { label: "Total", value: total, icon: LayoutGrid, color: "bg-blue-500/10 text-blue-600" },
        { label: "Active", value: active, icon: CheckCircle2, color: "bg-green-500/10 text-green-600" },
        { label: "Scheduled", value: scheduled, icon: Clock, color: "bg-amber-500/10 text-amber-600" },
        { label: "Expired", value: expired, icon: AlertCircle, color: "bg-red-500/10 text-red-600" },
    ];

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {cards.map((card) => {
                const Icon = card.icon;

                return (
                    <div
                        key={card.label}
                        className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                        {loading ? (
                            <div className="animate-pulse space-y-3">
                                <div className="h-10 w-10 rounded-xl bg-slate-200" />
                                <div className="h-6 w-12 rounded bg-slate-200" />
                            </div>
                        ) : (
                            <>
                                <div
                                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${card.color}`}
                                >
                                    <Icon size={20} />
                                </div>
                                <p className="text-2xl font-bold text-slate-900">
                                    {card.value}
                                </p>
                                <p className="text-sm text-slate-500">
                                    {card.label}
                                </p>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
}