"use client";

import Link from "next/link";
import { AlertTriangle, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/constants/routes";

interface Props {
    open: boolean;
    reference: string;
    status: string;
}

export default function PendingDepositDialog({
    open,
    reference,
    status,
}: Props) {
    if (!open) return null;

    const router = useRouter();

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4">
            
            <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-xl">

                <button
                    // href="/dashboard/wallet"
                    // onClick={router.back("/")}
                >
                    <ChevronLeft />
                </button>

                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                    <AlertTriangle className="text-amber-600" size={34} />
                </div>

                <h2 className="text-center text-2xl font-bold">
                    Deposit Already In Progress
                </h2>

                <p className="mt-4 text-center leading-7 text-slate-600">
                    You already have a deposit request that is currently awaiting review.
                </p>

                <p className="mt-3 text-center leading-7 text-slate-600">
                    For security reasons, only one deposit request can be active at a time.
                </p>

                <p className="mt-3 text-center leading-7 text-slate-600">
                    Please wait until your current deposit is approved or declined before creating another deposit request.
                </p>

                <div className="mt-8 rounded-2xl bg-slate-50 p-3 md:p-5">

                    <div className="flex flex-col items-center justify-between gap-2">
                        <span className="text-slate-500">
                            Reference:
                        </span>

                        <span className="text-[14px] md:text-1xl font-semibold">
                            {reference}
                        </span>
                    </div>

                    <div className="mt-4 flex justify-between">
                        <span className="text-slate-500">
                            Status
                        </span>

                        <span className="text-[12px] md:text-sm font-semibold capitalize">
                            {status.replace("_", " ")}
                        </span>
                    </div>

                </div>

                <Link
                    href={ROUTES.DEPOSIT_HISTORY}
                    className="mt-8 block rounded-xl bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700"
                >
                    View Deposit
                </Link>

            </div>
        </div>
    );
}