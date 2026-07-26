import { ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    loadingText?: string;
}

export default function SubmitButton({
    loading,
    loadingText = "Please wait...",
    children,
    className,
    ...rest
}: SubmitButtonProps) {
    return (
        <button
            type="submit"
            disabled={loading}
            className={`
                flex w-full items-center justify-center gap-2
                rounded-xl bg-yellow-400 py-5
                text-[16px] font-medium text-black/70
                transition
                hover:bg-yellow-500 cursor-pointer
                disabled:cursor-not-allowed disabled:opacity-60
                ${className ?? ""}
            `}
            {...rest}
        >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {loading ? loadingText : children}
        </button>
    );
}