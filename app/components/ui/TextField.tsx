import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    hint?: string;
    error?: string;
    icon?: ReactNode;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    ({ label, hint, error, icon, className, ...rest }, ref) => {
        return (
            <div>
                <label className="mb-3 block text-[18px] text-slate-700">
                    {label}
                </label>

                {hint && (
                    <p className="mb-2 text-xs text-slate-400">{hint}</p>
                )}

                <div className="relative">
                    {icon && (
                        <span className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-slate-400">
                            {icon}
                        </span>
                    )}

                    <input
                        ref={ref}
                        className={`
                            w-full rounded-xl border bg-slate-50/50 py-5
                            ${icon ? "pl-11" : "pl-4"} pr-4
                            text-[16px] text-slate-900
                            placeholder:text-slate-400
                            outline-none transition
                            focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10
                            ${error ? "border-red-300 focus:border-red-500 focus:ring-red-500/10" : "border-slate-200"}
                            ${className ?? ""}
                        `}
                        {...rest}
                    />
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

TextField.displayName = "TextField";

export default TextField;