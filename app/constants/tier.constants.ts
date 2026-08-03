import { MembershipTier } from "../types/clientTypes/memebership.types";

export const TIERS: MembershipTier[] = [
    {
        id: "internship",
        tierIndex: 0,
        name: "Internship Member",
        isCurrent: true,
        isLocked: false,
        description:
            "The internship period for intern members is 4 days. Complete four orders every day. Reward: You will receive NGN150 for each completed order, totaling NGN600 per day.",
        orderQuota: {
            timeUnit: "Daily",
            orderQuota: 4,
            totalOrderRevenue: 600,
        },
    },
    {
        id: "1-star",
        tierIndex: 1,
        name: "1-star member",
        isCurrent: false,
        isLocked: true,
        price: 21600,
        currency: "NGN",
        description:
            "Number of promotion orders and commission income per day",
        orderQuota: {
            timeUnit: "Daily",
            orderQuota: 4,
            totalOrderRevenue: 720,
        },
        invitationCommissions: [
            { method: "Invite A to become a 1-star member", rate: "10.00%", incomeAmount: 2160 },
            { method: "A invite subordinate B to become a 1-star member", rate: "3.00%", incomeAmount: 648 },
            { method: "B invite subordinate C to become a 1-star member", rate: "1.00%", incomeAmount: 216 },
        ],
        orderCommissions: [
            { completionFrom: "Subordinate A completes the order", ratio: "3.00%", incomeAmount: 21.6 },
            { completionFrom: "Subordinate B completes the order", ratio: "2.00%", incomeAmount: 14.4 },
            { completionFrom: "Subordinate C completes the order", ratio: "1.00%", incomeAmount: 7.2 },
        ],
    },
    {
        id: "2-star",
        tierIndex: 2,
        name: "2-star member",
        isCurrent: false,
        isLocked: true,
        price: 64800,
        currency: "NGN",
        description:
            "Number of promotion orders and commission income per day",
        orderQuota: {
            timeUnit: "Daily",
            orderQuota: 8,
            totalOrderRevenue: 2160,
        },
        invitationCommissions: [
            { method: "Invite A to become a 2-star member", rate: "10.00%", incomeAmount: 6480 },
            { method: "A invite subordinate B to become a 2-star member", rate: "3.00%", incomeAmount: 1944 },
            { method: "B invite subordinate C to become a 2-star member", rate: "1.00%", incomeAmount: 648 },
        ],
        orderCommissions: [
            { completionFrom: "Subordinate A completes the order", ratio: "3.00%", incomeAmount: 64.8 },
            { completionFrom: "Subordinate B completes the order", ratio: "2.00%", incomeAmount: 43.2 },
            { completionFrom: "Subordinate C completes the order", ratio: "1.00%", incomeAmount: 21.6 },
        ],
    },
    {
        id: "3-star",
        tierIndex: 3,
        name: "3-star members",
        isCurrent: false,
        isLocked: true,
        price: 207000,
        currency: "NGN",
        description:
            "Number of promotion orders and commission income per day",
        orderQuota: {
            timeUnit: "Daily",
            orderQuota: 15,
            totalOrderRevenue: 6900,
        },
        invitationCommissions: [
            { method: "Invite A to become a 3-star members", rate: "10.00%", incomeAmount: 20700 },
            { method: "A invite subordinate B to become a 3-star members", rate: "3.00%", incomeAmount: 6210 },
            { method: "B invite subordinate C to become a 3-star members", rate: "1.00%", incomeAmount: 2070 },
        ],
        orderCommissions: [
            { completionFrom: "Subordinate A completes the order", ratio: "3.00%", incomeAmount: 207 },
            { completionFrom: "Subordinate B completes the order", ratio: "2.00%", incomeAmount: 138 },
            { completionFrom: "Subordinate C completes the order", ratio: "1.00%", incomeAmount: 69 },
        ],
    },
    {
        id: "4-star",
        tierIndex: 4,
        name: "4-star members",
        isCurrent: false,
        isLocked: true,
        price: 612500,
        currency: "NGN",
        description:
            "Number of promotion orders and commission income per day",
        orderQuota: {
            timeUnit: "Daily",
            orderQuota: 25,
            totalOrderRevenue: 21875,
        },
        invitationCommissions: [
            { method: "Invite A to become a 4-star members", rate: "10.00%", incomeAmount: 61250 },
            { method: "A invite subordinate B to become a 4-star members", rate: "3.00%", incomeAmount: 18375 },
            { method: "B invite subordinate C to become a 4-star members", rate: "1.00%", incomeAmount: 6125 },
        ],
        orderCommissions: [
            { completionFrom: "Subordinate A completes the order", ratio: "3.00%", incomeAmount: 656.25 },
            { completionFrom: "Subordinate B completes the order", ratio: "2.00%", incomeAmount: 437.5 },
            { completionFrom: "Subordinate C completes the order", ratio: "1.00%", incomeAmount: 218.75 },
        ],
    },
];