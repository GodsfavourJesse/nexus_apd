"use client";

import Link from "next/link";

import {
    ChevronRight,
    ShieldCheck,
    ShieldX,
    BadgeCheck,
    BadgeX,
} from "lucide-react";

import { User } from "@/app/types/adminTypes/user.types";

interface Props {
    user: User;
}

export default function UserCard({
    user,
}: Props) {
    return (
        <Link
            href={`/admin/users/${user.id}`}
            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                transition
                active:scale-[0.98]
            "
        >
            <div className="flex items-start justify-between">
                <div className="min-w-0 flex-1">
                    <h2 className="truncate font-semibold text-slate-900">
                        {user.email ??
                            "No email"}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        {user.phone}
                    </p>

                    <p className="mt-2 text-xs text-slate-400">
                        Membership ID
                    </p>

                    <p className="font-medium text-slate-700">
                        {user.membershipPlanId ??
                            "None"}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
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

                <ChevronRight
                    className="text-slate-400"
                    size={20}
                />
            </div>
        </Link>
    );
}