import { OrderCommission } from "@/app/types/memebership.types";

export default function TierOrderCommissionTable({
    rows,
}: {
    rows: OrderCommission[];
}) {
    return (
        <div className="mt-5">
            <h3 className="mb-2 text-sm font-bold text-slate-900">
                Order commission income ratio
            </h3>

            <div className="overflow-hidden rounded-2xl">
                <div className="grid grid-cols-3 gap-2 bg-[#E8F3FF] px-4 py-3 text-xs font-semibold text-[#2B84E0]">
                    <span>Order completion from</span>
                    <span className="text-center">
                        Order commission ratio
                    </span>
                    <span className="text-right">Income amount</span>
                </div>

                {rows.map((row, i) => (
                    <div
                        key={i}
                        className={`
                            grid grid-cols-3 gap-2 px-4 py-3 text-sm
                            text-slate-800
                            ${i % 2 === 0 ? "bg-[#F5FAFF]" : "bg-white"}
                        `}
                    >
                        <span>{row.completionFrom}</span>
                        <span className="text-center">{row.ratio}</span>
                        <span className="text-right">
                            {row.incomeAmount.toLocaleString()}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}