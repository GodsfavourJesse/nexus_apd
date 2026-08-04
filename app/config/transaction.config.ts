import {
    Gift,
    Megaphone,
    Users,
    Medal,
    ArrowDownLeft,
    ArrowUpRight,
    Rocket,
    Gem,
    Star,
    PartyPopper,
    Settings,
    Coins,
    Wallet,
    Receipt,
} from "lucide-react";

export const transactionTypeConfig = {

    ORDER_REWARD: {
        label: "Order Reward",
        icon: Gift,
        color: "text-emerald-600",
        bg: "bg-emerald-100",
    },

    ADVERTISEMENT_REWARD: {
        label: "Advertisement Reward",
        icon: Megaphone,
        color: "text-sky-600",
        bg: "bg-sky-100",
    },

    REFERRAL_COMMISSION: {
        label: "Referral Commission",
        icon: Users,
        color: "text-indigo-600",
        bg: "bg-indigo-100",
    },

    LEVEL_1_REFERRAL: {
        label: "Level 1 Referral",
        icon: Medal,
        color: "text-yellow-600",
        bg: "bg-yellow-100",
    },

    LEVEL_2_REFERRAL: {
        label: "Level 2 Referral",
        icon: Medal,
        color: "text-slate-500",
        bg: "bg-slate-100",
    },

    LEVEL_3_REFERRAL: {
        label: "Level 3 Referral",
        icon: Medal,
        color: "text-orange-600",
        bg: "bg-orange-100",
    },

    DEPOSIT: {
        label: "Deposit",
        icon: ArrowDownLeft,
        color: "text-green-600",
        bg: "bg-green-100",
    },

    WITHDRAWAL: {
        label: "Withdrawal",
        icon: ArrowUpRight,
        color: "text-red-600",
        bg: "bg-red-100",
    },

    UPGRADE_BONUS: {
        label: "Upgrade Bonus",
        icon: Rocket,
        color: "text-violet-600",
        bg: "bg-violet-100",
    },

    MEMBERSHIP_PURCHASE: {
        label: "Membership Purchase",
        icon: Gem,
        color: "text-blue-600",
        bg: "bg-blue-100",
    },

    MEMBERSHIP_UPGRADE: {
        label: "Membership Upgrade",
        icon: Star,
        color: "text-amber-600",
        bg: "bg-amber-100",
    },

    SYSTEM_REWARD: {
        label: "System Reward",
        icon: PartyPopper,
        color: "text-pink-600",
        bg: "bg-pink-100",
    },

    BONUS: {
        label: "Bonus",
        icon: Coins,
        color: "text-emerald-600",
        bg: "bg-emerald-100",
    },

    ADJUSTMENT: {
        label: "Adjustment",
        icon: Settings,
        color: "text-cyan-600",
        bg: "bg-cyan-100",
    },

    WALLET_ADJUSTMENT: {
        label: "Wallet Adjustment",
        icon: Wallet,
        color: "text-cyan-600",
        bg: "bg-cyan-100",
    },

    DEFAULT: {
        label: "Transaction",
        icon: Receipt,
        color: "text-slate-600",
        bg: "bg-slate-100",
    },

} as const;

export const transactionStatusConfig = {

    COMPLETED: {
        label: "Completed",
        color: "text-emerald-700",
        bg: "bg-emerald-100",
    },

    PENDING: {
        label: "Pending",
        color: "text-amber-700",
        bg: "bg-amber-100",
    },

    PROCESSING: {
        label: "Processing",
        color: "text-blue-700",
        bg: "bg-blue-100",
    },

    FAILED: {
        label: "Failed",
        color: "text-red-700",
        bg: "bg-red-100",
    },

    REJECTED: {
        label: "Rejected",
        color: "text-red-700",
        bg: "bg-red-100",
    },

    CANCELLED: {
        label: "Cancelled",
        color: "text-slate-700",
        bg: "bg-slate-100",
    },

} as const;