"use client";

import { useEffect, useState } from "react";

import MembershipBanner from "@/app/components/profile/MembershipBanner";
import ProfileHeader from "@/app/components/profile/ProfileHeader";
import ProfileMenuGrid from "@/app/components/profile/ProfileMenuGrid";
import ProfileStatsCard from "@/app/components/profile/ProfileStatsCard";
import ReferralCard from "@/app/components/profile/ReferralCard";
import SettingsList from "@/app/components/profile/SettingsList";
import UpgradeBanner from "@/app/components/profile/UpgradeBanner";
import UserGuard from "@/app/guards/UserGuard";
import { useCurrentUser } from "@/app/hooks/useCurrentUser";
import { useAuthStore } from "@/app/store/auth.store";
import { getReferralLink } from "@/app/utils/referral";

export default function Profile() {
    useCurrentUser();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const user = useAuthStore((state) => state.user);

    if (!mounted) {
        return null;
    }

    const referralLink = user ? getReferralLink(user.referralCode) : "";

    return (
        <UserGuard>
            <main className="flex min-h-full flex-col bg-slate-50 pb-10">
                {/* Hero */}
                <div className="relative overflow-hidden">
                    {/* Header Background */}
                    <div
                        className="
                            relative
                            bg-gradient-to-b
                            from-[#7CC0FF]
                            via-[#4DA8FE]
                            to-[#4DA8FE]
                        "
                    >
                        <ProfileHeader
                            name={user?.phone ?? ""}
                            phone={user?.phone ?? ""}
                        />
                    </div>

                    {/* Bottom Fade */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            bottom-0
                            left-0
                            right-0
                            h-16
                            bg-gradient-to-b
                            from-transparent
                            via-slate-50/60
                            to-slate-50
                        "
                    />
                </div>

                <div className="-mt-6 flex flex-col gap-8">
                    <UpgradeBanner />
                    <ProfileStatsCard />
                    <MembershipBanner />

                    {user && (
                        <ReferralCard
                            referralCode={user.referralCode}
                            referralLink={referralLink}
                        />
                    )}

                    <ProfileMenuGrid />
                    <SettingsList />
                </div>
            </main>
        </UserGuard>
    );
}