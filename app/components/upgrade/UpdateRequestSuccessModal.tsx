"use client";

import { CheckCircle2 } from "lucide-react";

interface UpgradeRequestSuccessModalProps {
    onClose: () => void;
    onViewHistory: () => void;
}

export default function UpgradeRequestSuccessModal({
    onClose,
    onViewHistory,
}: UpgradeRequestSuccessModalProps) {
    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-[32px] bg-white p-7 text-center shadow-2xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2
                        size={42}
                        className="text-green-500"
                    />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                    Upgrade Request Sent
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                    Your upgrade request has been submitted
                    successfully and is now awaiting review.
                </p>

                <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-4">
                    <p className="text-sm font-semibold text-green-700">
                        What happens next?
                    </p>

                    <p className="mt-1 text-xs leading-5 text-green-600">
                        Your request will be reviewed by our team.
                        Once approved, your new membership benefits
                        will be activated.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={onViewHistory}
                    className="
                        mt-7
                        h-12
                        w-full
                        rounded-2xl
                        bg-[#1592FF]
                        text-sm
                        font-semibold
                        text-white
                        shadow-lg
                        shadow-blue-400/20
                        transition
                        hover:bg-[#0D86EE]
                        active:scale-[0.98]
                    "
                >
                    View Upgrade History
                </button>

                <button
                    type="button"
                    onClick={onClose}
                    className="
                        mt-3
                        h-11
                        w-full
                        rounded-2xl
                        text-sm
                        font-semibold
                        text-slate-500
                        transition
                        hover:bg-slate-50
                    "
                >
                    Close
                </button>
            </div>
        </div>
    );
}