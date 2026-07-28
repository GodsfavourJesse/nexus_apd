"use client";

import { Users } from "lucide-react";

import { Referral } from "@/app/types/adminTypes/user.types";

interface UserReferralCardProps {
    referrals: Referral[];
}

export default function UserReferralCard({
    referrals,
}: UserReferralCardProps) {

    if (!referrals.length) {
        return (
            <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="mb-3 text-lg font-semibold">
                    Referrals
                </h2>

                <p className="text-sm text-slate-500">
                    No referrals.
                </p>
            </section>
        );
    }

    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
                        <Users size={20} />
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-slate-900">
                            Referrals
                        </h2>

                        <p className="text-xs text-slate-500">
                            {referrals.length} total
                        </p>
                    </div>
                </div>
            </div>

            {referrals.length === 0 ? (
                <div className="py-10 text-center text-sm text-slate-500">
                    No referrals found.
                </div>
            ) : (
                <div className="divide-y divide-slate-100">
                    {referrals.map(
                        (referral) => (
                            <div
                                key={referral.id}
                                className="space-y-2 px-5 py-4"
                            >
                                <div>
                                    <p className="text-xs text-slate-500">
                                        Email
                                    </p>

                                    <p className="font-medium text-slate-900">
                                        {referral.email ??
                                            "No email"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-slate-500">
                                        Phone
                                    </p>

                                    <p className="font-medium text-slate-900">
                                        {referral.phone}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-slate-500">
                                        Referral Code
                                    </p>

                                    <p className="font-medium text-slate-900">
                                        {
                                            referral.referralCode
                                        }
                                    </p>
                                </div>
                            </div>
                        ),
                    )}
                </div>
            )}
        </section>
    );
}