import { OrderQuota } from "@/app/types/memebership.types";
import { CalendarDays, ShoppingBag, Wallet } from "lucide-react";

export default function TierQuotaTable({
    quota,
}: {
    quota: OrderQuota;
}) {
    return (
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* Header */}
            <div
                className="
                    bg-gradient-to-r
                    from-[#EEF7FF]
                    via-[#E5F2FF]
                    to-[#D9ECFF]
                    px-5
                    py-4
                "
            >
                <h3 className="text-sm font-semibold text-[#2B84E0]">
                    Daily Order Quota
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                    Complete your assigned orders to earn commissions.
                </p>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-3 border-y border-slate-100 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <span className="flex items-center gap-2">
                    <CalendarDays size={14} />
                    Time
                </span>

                <span className="flex items-center justify-center gap-2">
                    <ShoppingBag size={14} />
                    Orders
                </span>

                <span className="flex items-center justify-end gap-2">
                    <Wallet size={14} />
                    Revenue
                </span>
            </div>

            {/* Data */}
            <div className="grid grid-cols-3 items-center px-5 py-5">
                <div>
                    <p className="text-sm font-medium text-slate-900">
                        {quota.timeUnit}
                    </p>
                </div>

                <div className="text-center">
                    <span
                        className="
                            inline-flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-50
                            text-base
                            font-bold
                            text-[#2B84E0]
                        "
                    >
                        {quota.orderQuota}
                    </span>
                </div>

                <div className="text-right">
                    <p className="text-lg font-bold text-[#2B84E0]">
                        ₦{quota.totalOrderRevenue.toLocaleString()}
                    </p>

                    <p className="text-xs text-slate-500">
                        Total earnings
                    </p>
                </div>
            </div>
        </section>
    );
}