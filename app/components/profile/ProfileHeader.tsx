"use client";

import { useRouter } from "next/navigation";
import { Settings, Pencil } from "lucide-react";
import Image from "next/image";

interface ProfileHeaderProps {
    // name: string;
    phone: string;
    avatarUrl?: string;
    country: string;
}

export default function ProfileHeader({
    // name,
    phone,
    avatarUrl,
    country,
}: ProfileHeaderProps) {
    const router = useRouter();

    return (
        <div className="px-6 pb-10 pt-6 mb-2">
            <button
                type="button"
                onClick={() => router.push("/settings")}
                className="text-white/90 transition hover:text-white"
            >
                <Settings size={26} strokeWidth={1.8} />
            </button>

            <div className="mt-8 flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0">
                    <div className="h-full w-full overflow-hidden rounded-full border-2 border-white/60 bg-white">
                        {avatarUrl ? (
                            <Image
                                src={avatarUrl}
                                alt={phone}
                                fill
                                className="object-cover"
                                sizes="64px"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center bg-slate-100 text-lg font-semibold text-slate-400">
                                {phone.charAt(0).toUpperCase()}
                            </div>
                        )}
                    </div>

                    <button
                        type="button"
                        aria-label="Edit profile"
                        className="
                            absolute bottom-0 right-0 flex h-6 w-6
                            items-center justify-center rounded-full
                            border-2 border-white bg-slate-800
                        "
                    >
                        <Pencil size={11} className="text-white" />
                    </button>
                </div>

                <div>
                    <p className="text-xl font-semibold text-slate-900">
                        {phone}
                    </p>
                    {/* <p className="text-sm text-white/90">{phone}</p> */}
                    <p className="text-sm text-white/90">{country}</p>
                </div>
            </div>
        </div>
    );
}