"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { useUser } from "@/app/hooks/adminHooks/users/useUser";

import UserProfileSkeleton from "../../adminComponents/user-profile/UserProfileSkeleton";
import UserProfileCard from "../../adminComponents/user-profile/UserProfileCard";
import UserWalletCard from "../../adminComponents/user-profile/UserWalletCard";
import UserMembershipCard from "../../adminComponents/user-profile/UserMembershipCard";
import UserReferralCard from "../../adminComponents/user-profile/UserReferralCard";
import UserTransactionList from "../../adminComponents/user-profile/UserTransactions";
import UserActionsCard from "../../adminComponents/user-profile/UserActionsCard";

export default function AdminUserProfilePage() {
    const params = useParams();
    const router = useRouter();

    const id = params.id as string;

    const {
        data,
        isLoading,
        isError,
    } = useUser(id);

    if (isLoading) {
        return <UserProfileSkeleton />;
    }

    if (isError || !data?.data) {
        return (
            <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 p-6">
                <div className="w-full max-w-md rounded-3xl border border-red-200 bg-white p-8 text-center shadow-sm">
                    <h2 className="text-xl font-semibold text-red-600">
                        Unable to load this user.
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        Please refresh the page or try again later.
                    </p>

                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                        <ArrowLeft size={16} />
                        Go back
                    </button>
                </div>
            </main>
        );
    }

    const profile = data.data;

    return (
        <main className="space-y-6 bg-slate-50 p-4 pb-24">
            <button
                type="button"
                onClick={() => router.back()}
                className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full border border-slate-200 bg-white
                    text-slate-600 shadow-sm
                    transition hover:bg-slate-50 hover:text-slate-900
                "
                aria-label="Go back"
            >
                <ArrowLeft size={18} />
            </button>

            <UserProfileCard
                user={profile.user}
            />

            <UserActionsCard
                id={profile.user.id}
                isActive={profile.user.isActive}
                isVerified={profile.user.isVerified}
            />

            <UserWalletCard
                wallet={profile.wallet}
            />

            <UserMembershipCard
                membership={profile.membership}
            />

            <UserReferralCard
                referrals={profile.referrals}
            />

            <UserTransactionList
                transactions={profile.transactions}
            />
        </main>
    );
}