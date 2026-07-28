"use client";

import {
    BadgeCheck,
    BadgeX,
    ShieldCheck,
    ShieldX,
    User,
} from "lucide-react";

import { User as UserType } from "@/app/types/adminTypes/user.types";

interface UserProfileCardProps {
    user: UserType;
}

export default function UserProfileCard({
    user,
}: UserProfileCardProps) {
    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4">
                <h2 className="text-lg font-bold text-slate-900">
                    Profile
                </h2>
            </div>

            <div className="p-5">
                <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                        <User size={30} />
                    </div>

                    <div className="min-w-0">
                        <h3 className="truncate text-lg font-semibold text-slate-900">
                            {user.email ?? "No Email"}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                            {user.phone}
                        </p>
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    <InfoRow
                        label="Role"
                        value={user.role}
                    />

                    <InfoRow
                        label="Referral Code"
                        value={user.referralCode}
                    />

                    <InfoRow
                        label="Joined"
                        value={new Date(
                            user.createdAt,
                        ).toLocaleDateString()}
                    />

                    <div className="flex flex-wrap gap-2 pt-2">
                        <span
                            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                                user.isVerified
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                            }`}
                        >
                            {user.isVerified ? (
                                <BadgeCheck size={14} />
                            ) : (
                                <BadgeX size={14} />
                            )}

                            {user.isVerified
                                ? "Verified"
                                : "Unverified"}
                        </span>

                        <span
                            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                                user.isActive
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-slate-200 text-slate-600"
                            }`}
                        >
                            {user.isActive ? (
                                <ShieldCheck size={14} />
                            ) : (
                                <ShieldX size={14} />
                            )}

                            {user.isActive
                                ? "Active"
                                : "Suspended"}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

interface InfoRowProps {
    label: string;
    value: React.ReactNode;
}

function InfoRow({
    label,
    value,
}: InfoRowProps) {
    return (
        <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
            <span className="text-sm text-slate-500">
                {label}
            </span>

            <span className="text-right text-sm font-medium text-slate-900">
                {value}
            </span>
        </div>
    );
}