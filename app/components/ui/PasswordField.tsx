import { forwardRef, InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

interface PasswordFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
    ({ label, error, className, ...rest }, ref) => {
        const [visible, setVisible] = useState(false);

        return (
            <div>
                <label className="mb-3 block text-[18px] text-slate-700">
                    {label}
                </label>

                <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-slate-400">
                        <Lock className="h-4 w-4" />
                    </span>

                    <input
                        ref={ref}
                        type={visible ? "text" : "password"}
                        className={`
                            w-full rounded-xl border bg-slate-50/50 py-5 pl-11 pr-11
                            text-[16px] text-slate-900
                            placeholder:text-slate-400
                            outline-none transition
                            focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10
                            ${error ? "border-red-300 focus:border-red-500 focus:ring-red-500/10" : "border-slate-200"}
                            ${className ?? ""}
                        `}
                        {...rest}
                    />

                    <button
                        type="button"
                        onClick={() => setVisible((v) => !v)}
                        tabIndex={-1}
                        className="absolute inset-y-0 right-3.5 flex items-center text-slate-400 transition cursor-pointer hover:text-slate-600"
                    >
                        {visible ? (
                            <EyeOff className="h-4 w-4" />
                        ) : (
                            <Eye className="h-4 w-4" />
                        )}
                    </button>
                </div>

                {error && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

PasswordField.displayName = "PasswordField";

export default PasswordField;