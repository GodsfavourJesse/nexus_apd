"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Wallet, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import ContinueButton from "@/app/components/deposit/ContinueButton";
import DepositStepper from "@/app/components/deposit/DepositStepper";

const MIN_AMOUNT = 1000;
const MAX_AMOUNT = 1_000_000;

export default function DepositPage() {
    const router = useRouter();

    const [amount, setAmount] = useState("");

    const value = Number(amount);

    const isValid =
        amount !== "" &&
        !Number.isNaN(value) &&
        value >= MIN_AMOUNT &&
        value <= MAX_AMOUNT;

    function handleContinue() {
        const value = Number(amount);

        if (!value || Number.isNaN(value)) {
            toast.error("Please enter a valid amount.");
            return;
        }

        if (value < MIN_AMOUNT) {
            toast.error(
                `Minimum deposit amount is ₦${MIN_AMOUNT.toLocaleString()}.`,
            );
            return;
        }

        if (value > MAX_AMOUNT) {
            toast.error(
                `Maximum deposit amount is ₦${MAX_AMOUNT.toLocaleString()}.`,
            );
            return;
        }

        router.push(`/dashboard/wallet/deposit/payment?amount=${value}`);
    }

    return (
        <div className="h-screen mx-auto max-w-xl p-6">

            <DepositStepper currentStep={1} />
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 p-8">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                        <Wallet size={30} />
                    </div>

                    <h1 className="text-2xl font-bold text-slate-900">
                        Wallet Deposit
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                        Enter the amount you want to recharge into your wallet.
                    </p>
                </div>

                <div className="space-y-6 p-8">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Recharge Amount
                        </label>

                        <input
                            type="number"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            onKeyDown={(e) => {
                                if (
                                    ["e", "E", "+", "-"].includes(e.key)
                                ) {
                                    e.preventDefault();
                                }
                            }}
                            placeholder="Enter amount"
                            min={MIN_AMOUNT}
                            max={MAX_AMOUNT}
                            className="
                                h-14
                                w-full
                                rounded-xl
                                border
                                border-slate-300
                                px-4
                                text-lg
                                outline-none
                                transition
                                focus:border-blue-500
                                focus:ring-4
                                focus:ring-blue-100
                            "
                        />

                        <p className="mt-2 text-xs text-slate-500">
                            Minimum: ₦1,000 • Maximum: ₦1,000,000
                        </p>
                    </div>

                    <ContinueButton
                        onClick={handleContinue}
                        disabled={!isValid}
                    />
                </div>
            </div>
        </div>
    );
}