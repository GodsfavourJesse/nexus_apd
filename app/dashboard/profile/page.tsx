"use client";

import MembershipBanner from "@/app/components/profile/MembershipBanner";
import ProfileHeader from "@/app/components/profile/ProfileHeader";
import ProfileMenuGrid from "@/app/components/profile/ProfileMenuGrid";
import ProfileStatsCard from "@/app/components/profile/ProfileStatsCard";
import SettingsList from "@/app/components/profile/SettingsList";
import UpgradeBanner from "@/app/components/profile/UpgradeBanner";
import UserGuard from "@/app/guards/UserGuard";
import { useCurrentUser } from "@/app/hooks/useCurrentUser";
import { useAuthStore } from "@/app/store/auth.store";
import { getReferralLink } from "@/app/utils/referral";
import { useEffect, useState } from "react";

export default function Profile() {
    useCurrentUser();

    const [mounted, setMounted] = useState(false);

    // const phone = user?.phone ?? "";

    useEffect(() => {
        setMounted(true);
    }, []);

    const user = useAuthStore((state) => state.user);

    if (!mounted) {
        return null;
    }

    const referralLink = user
        ? getReferralLink(user.referralCode)
        : "";

    async function copyCode() {
        await navigator.clipboard.writeText(
            user?.referralCode ?? ""
        );
    }

    async function copyLink() {
        await navigator.clipboard.writeText(
            referralLink
        );
    }


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
                        from-[#FFCB3D]
                        via-[#FDDA02]
                        to-[#FDDA02]
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
                <ProfileMenuGrid />
                <SettingsList />
            </div>


                <h1 className="text-3xl font-bold">
                    User Dashboard
                </h1>


                <div className="mt-8 rounded-lg border p-6 space-y-5">


                    <div>

                        <p className="text-sm text-gray-500">
                            Referral Code
                        </p>


                        <p className="text-2xl font-bold">
                            {user?.referralCode}
                        </p>


                        <button
                            onClick={copyCode}
                            className="mt-3 rounded bg-blue-600 px-4 py-2 text-white"
                        >
                            Copy Code
                        </button>

                    </div>



                    <div>

                        <p className="text-sm text-gray-500">
                            Referral Link
                        </p>


                        <p className="break-all">
                            {referralLink}
                        </p>


                        <button
                            onClick={copyLink}
                            className="mt-3 rounded bg-green-600 px-4 py-2 text-white"
                        >
                            Copy Link
                        </button>

                    </div>


                </div>
            </main>

        </UserGuard>
    )
}