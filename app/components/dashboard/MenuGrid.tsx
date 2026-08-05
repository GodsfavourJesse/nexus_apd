import { ComponentType } from "react";
import MenuGridItem from "@/app/components/dashboard/MenuGridItem";

import CompanyIcon from "@/app/components/icons/menu/CompanyIcon";
import MemberBenefitsIcon from "@/app/components/icons/menu/MemberBenefitsIcon";
import TeamExpansionIcon from "@/app/components/icons/menu/TeamExpansionIcon";
import ManagementPositionsIcon from "@/app/components/icons/menu/ManagementPositionsIcon";
import FinancialProductsIcon from "@/app/components/icons/menu/FinancialProductsIcon";
import CompanyActivityIcon from "@/app/components/icons/menu/CompanyActivityIcon";
import LuckyCardsIcon from "@/app/components/icons/menu/LuckyCardsIcon";
import MembershipWelfareIcon from "@/app/components/icons/menu/MembershipWelfareIcon";
import { ROUTES } from "@/app/constants/routes";

interface MenuItem {
    icon: ComponentType;
    line1: string;
    line2?: string;
    href: string;
}

const MENU_ITEMS: MenuItem[] = [
    {
        icon: CompanyIcon,
        line1: "Company",
        href: ROUTES.ABOUT,
    },
    {
        icon: MemberBenefitsIcon,
        line1: "Member",
        line2: "benefits",
        href: ROUTES.MEMBERS,
    },
    {
        icon: TeamExpansionIcon,
        line1: "Team",
        line2: "expansion",
        href: "/team-expansion",
    },
    // {
    //     icon: ManagementPositionsIcon,
    //     line1: "Management",
    //     line2: "Positions",
    //     href: "/management-positions",
    // // },
    // {
    //     icon: FinancialProductsIcon,
    //     line1: "Financial",
    //     line2: "products",
    //     href: "/financial-products",
    // },
    // {
    //     icon: CompanyActivityIcon,
    //     line1: "Company",
    //     line2: "Activity",
    //     href: "/company-activity",
    // },
    // {
    //     icon: LuckyCardsIcon,
    //     line1: "Lucky",
    //     line2: "Cards",
    //     href: "/lucky-cards",
    // },
    {
        icon: MembershipWelfareIcon,
        line1: "Membership",
        line2: "Welfare",
        href: "/membership-welfare",
    },
];

export default function MenuGrid() {
    return (
        <div className="grid grid-cols-4 gap-x-3 gap-y-6">
            {MENU_ITEMS.map((item) => (
                <MenuGridItem
                    key={item.href}
                    icon={item.icon}
                    line1={item.line1}
                    line2={item.line2}
                    href={item.href}
                />
            ))}
        </div>
    );
}