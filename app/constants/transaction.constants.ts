export enum TransactionType {
    DEPOSIT = "deposit",
    WITHDRAWAL = "withdrawal",
    ORDER_REWARD = "order_reward",
    REFERRAL_COMMISSION = "referral_commission",
    UPGRADE_BONUS = "upgrade_bonus",
    MEMBERSHIP_PURCHASE = "membership_purchase",
    MEMBERSHIP_UPGRADE = "membership_upgrade",
}

export enum TransactionStatus {
    PENDING = "pending",
    PROCESSING = "processing",
    COMPLETED = "completed",
    FAILED = "failed",
    REJECTED = "rejected",
    CANCELLED = "cancelled",
}