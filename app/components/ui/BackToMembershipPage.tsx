import { ROUTES } from "@/app/constants/routes";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BackToMembershipPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-6">
            <div className="w-full max-w-md rounded-[32px] border border-slate-200 bg-white p-8 text-center shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
                {/* Icon */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                        <ArrowLeft className="h-7 w-7 text-red-500" />
                    </div>
                </div>

                {/* Title */}
                <h1 className="mt-6 text-2xl font-bold text-slate-900">
                    Invalid Membership
                </h1>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-slate-500">
                    We couldn't determine which membership you want to
                    upgrade. This usually happens if the upgrade link is
                    invalid or has expired.
                </p>

                {/* Divider */}
                <div className="my-8 h-px w-full bg-slate-100" />

                {/* Actions */}
                <div className="space-y-3">
                    <Link
                        href={ROUTES.MEMBERS}
                        className="
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-2xl
                            bg-[#1592FF]
                            px-5
                            py-4
                            text-sm
                            font-semibold
                            text-white
                            shadow-lg
                            shadow-blue-300/30
                            transition-all
                            duration-300
                            hover:bg-[#0D86EE]
                            hover:shadow-xl
                            active:scale-[0.98]
                        "
                    >
                        <ArrowLeft size={18} />
                        Back to Memberships
                    </Link>

                    {/* <button
                        type="button"
                        onClick={() => window.location.reload()}
                        className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            px-5
                            py-4
                            text-sm
                            font-semibold
                            text-slate-700
                            transition-all
                            duration-300
                            hover:bg-slate-50
                            active:scale-[0.98]
                        "
                    >
                        Try Again
                    </button> */}
                </div>
            </div>
        </main>
    );
}