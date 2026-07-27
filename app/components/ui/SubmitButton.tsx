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
                rounded-xl bg-[#4DA8FE] py-4
                text-[15px] font-semibold text-white
                shadow-sm
                transition-all duration-150
                hover:bg-[#2B84E0] hover:shadow-md
                active:scale-[0.98] active:bg-[#2170C0]
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#4DA8FE] focus-visible:ring-offset-2
                disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100
                cursor-pointer
                ${className ?? ""}
            `}
            {...rest}
        >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {loading ? loadingText : children}
        </button>
    );
}