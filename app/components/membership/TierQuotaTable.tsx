import {
    CalendarDays,
    CircleDollarSign,
    ShoppingBag,
    Wallet,
} from "lucide-react";

interface TierQuotaTableProps {
    tasksPerDay: number | string | null | undefined;
    rewardPerTask: number | string | null | undefined;
    dailyRewardLimit: number | string | null | undefined;
}

export default function TierQuotaTable({
    tasksPerDay,
    rewardPerTask,
    dailyRewardLimit,
}: TierQuotaTableProps) {

    const orders = Number(tasksPerDay);
    const reward = Number(rewardPerTask);
    const revenue = Number(dailyRewardLimit);

    const safeOrders =
        Number.isFinite(orders)
            ? orders
            : 0;

    const safeReward =
        Number.isFinite(reward)
            ? reward
            : 0;

    const safeRevenue =
        Number.isFinite(revenue)
            ? revenue
            : 0;

    const formatCurrency = (
        value: number,
    ) =>
        value.toLocaleString(
            "en-NG",
            {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
            },
        );

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
                    Daily Order Capacity
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                    Your daily task quota and expected reward based
                    on your membership plan.
                </p>
            </div>

            {/* Table Header */}
            <div
                className="
                    grid
                    grid-cols-3
                    border-y
                    border-slate-100
                    bg-slate-50
                    px-5
                    py-3
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-slate-500
                "
            >
                <span className="flex items-center gap-2">
                    <CalendarDays size={14} />
                    Period
                </span>

                <span className="flex items-center justify-center gap-2">
                    <ShoppingBag size={14} />
                    Tasks
                </span>

                <span className="flex items-center justify-end gap-2">
                    <Wallet size={14} />
                    Daily Reward
                </span>
            </div>

            {/* Main Row */}
            <div
                className="
                    grid
                    grid-cols-3
                    items-center
                    px-5
                    py-5
                "
            >
                {/* Period */}
                <div>
                    <p className="text-sm font-medium text-slate-900">
                        Per Day
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                        Daily quota
                    </p>
                </div>

                {/* Tasks */}
                <div className="text-center">
                    <span
                        className="
                            inline-flex
                            h-10
                            min-w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-50
                            px-3
                            text-base
                            font-bold
                            text-[#2B84E0]
                        "
                    >
                        {safeOrders}
                    </span>

                    <p className="mt-1 text-[11px] text-slate-500">
                        tasks
                    </p>
                </div>

                {/* Daily Reward */}
                <div className="text-right">
                    <p className="text-lg font-bold text-[#2B84E0]">
                        ₦{formatCurrency(safeRevenue)}
                    </p>

                    <p className="text-xs text-slate-500">
                        Total per day
                    </p>
                </div>
            </div>

            {/* Reward Per Task */}
            <div
                className="
                    flex
                    items-center
                    justify-between
                    border-t
                    border-slate-100
                    bg-slate-50/70
                    px-5
                    py-3
                "
            >
                <div className="flex items-center gap-2">
                    <CircleDollarSign
                        size={15}
                        className="text-[#2B84E0]"
                    />

                    <span className="text-xs font-medium text-slate-600">
                        Reward per task
                    </span>
                </div>

                <span className="text-sm font-bold text-slate-900">
                    ₦{formatCurrency(safeReward)}
                </span>
            </div>
        </section>
    );
}