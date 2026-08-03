"use client";

import { User as UserIcon, Phone, Mail, ShieldCheck } from "lucide-react";

interface DepositUserCardProps {
    user: {
        id: string;
        phone: string;
        email: string | null;
        membership?: { name: string } | null;
    };
}

export function DepositUserCard({ user }: DepositUserCardProps) {
    return (
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600">
                    <UserIcon size={20} />
                </div>

                <div className="min-w-0">
                    <p className="truncate text-[15px] font-semibold text-slate-900">
                        {user.email ?? "No email on file"}
                    </p>
                    <p className="text-[13px] text-slate-500">{user.phone}</p>
                </div>
            </div>

            <div className="mt-3.5 flex flex-col gap-2.5 border-t border-slate-50 pt-3.5">
                <Row icon={Phone} label="Phone" value={user.phone} />
                <Row icon={Mail} label="Email" value={user.email ?? "—"} />
                <Row
                    icon={ShieldCheck}
                    label="Membership"
                    value={user.membership?.name ?? "—"}
                />
            </div>
        </div>
    );
}

function Row({
    icon: Icon,
    label,
    value,
}: {
    icon: React.ElementType;
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[13px] text-slate-400">
                <Icon size={13} />
                {label}
            </span>
            <span className="max-w-[60%] truncate text-[13px] font-medium text-slate-700">
                {value}
            </span>
        </div>
    );
}