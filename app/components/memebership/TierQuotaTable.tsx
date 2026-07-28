import { OrderQuota } from "@/app/types/memebership.types";

export default function TierQuotaTable({
    quota,
}: {
    quota: OrderQuota;
}) {
    return (
        <div className="overflow-hidden rounded-2xl">
            <div className="grid grid-cols-3 bg-[#E8F3FF] px-4 py-3 text-xs font-semibold text-[#2B84E0]">
                <span>Time unit</span>
                <span className="text-center">Order Quota</span>
                <span className="text-right">
                    Total order revenue
                </span>
            </div>

            <div className="grid grid-cols-3 bg-[#F5FAFF] px-4 py-3 text-sm text-slate-800">
                <span>{quota.timeUnit}</span>
                <span className="text-center">{quota.orderQuota}</span>
                <span className="text-right">
                    {quota.totalOrderRevenue.toLocaleString()}
                </span>
            </div>
        </div>
    );
}