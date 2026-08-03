"use client";

import { Check } from "lucide-react";

interface DepositStepperProps {
    currentStep: 1 | 2;
}

export default function DepositStepper({
    currentStep,
}: DepositStepperProps) {
    const steps = [
        {
            number: 1,
            title: "Enter Amount",
        },
        {
            number: 2,
            title: "Payment",
        },
    ] as const;

    return (
        <div className="mb-8 flex items-center justify-center">
            {steps.map((step, index) => {
                const completed = currentStep > step.number;
                const active = currentStep === step.number;

                return (
                    <div
                        key={step.number}
                        className="flex items-center"
                    >
                        <div className="flex flex-col items-center">
                            <div
                                className={`
                                    flex h-12 w-12 items-center justify-center
                                    rounded-full border-2 text-sm font-bold transition
                                    ${
                                        completed
                                            ? "border-green-600 bg-green-600 text-white"
                                            : active
                                            ? "border-blue-600 bg-blue-600 text-white"
                                            : "border-gray-300 bg-white text-gray-500"
                                    }
                                `}
                            >
                                {completed ? (
                                    <Check size={18} />
                                ) : (
                                    step.number
                                )}
                            </div>

                            <span
                                className={`
                                    mt-3 text-sm font-medium
                                    ${
                                        active || completed
                                            ? "text-gray-900"
                                            : "text-gray-400"
                                    }
                                `}
                            >
                                {step.title}
                            </span>
                        </div>

                        {index < steps.length - 1 && (
                            <div
                                className={`
                                    mx-6 h-1 w-24 rounded-full transition
                                    ${
                                        completed
                                            ? "bg-green-600"
                                            : "bg-gray-300"
                                    }
                                `}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}