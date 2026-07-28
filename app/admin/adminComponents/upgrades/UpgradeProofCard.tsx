"use client";

import Image from "next/image";

import { UpgradeRequest } from "@/app/types/adminTypes/upgrade-request.types";

interface Props {
    request: UpgradeRequest;
}

export default function UpgradeProofCard({
    request,
}: Props) {

    if (!request.paymentProof) {
        return (
            <section className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold">
                    Payment Proof
                </h2>

                <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
                    No payment proof uploaded.
                </div>
            </section>
        );
    }

    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-slate-900">
                    Payment Proof
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Uploaded payment receipt for this
                    membership upgrade request.
                </p>
            </div>

            {request.paymentProof ? (
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                    <Image
                        src={request.paymentProof}
                        alt="Payment proof"
                        width={1200}
                        height={1200}
                        className="h-auto w-full object-cover"
                        unoptimized
                    />
                </div>
            ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
                    No payment proof uploaded.
                </div>
            )}
        </section>
    );
}