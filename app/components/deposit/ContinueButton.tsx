"use client";

interface ContinueButtonProps {
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
}

export default function ContinueButton({
    onClick,
    disabled = false,
    loading = false,
}: ContinueButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled || loading}
            className="
                w-full
                rounded-xl
                bg-blue-600
                px-5
                py-3
                text-base
                font-semibold
                text-white
                transition
                hover:bg-blue-700
                disabled:cursor-not-allowed
                disabled:opacity-50
            "
        >
            {loading ? "Please wait..." : "Top Up"}
        </button>
    );
}