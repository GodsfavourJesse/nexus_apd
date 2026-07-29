import { forwardRef, InputHTMLAttributes } from "react";

interface AdminTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    hint?: string;
}

const AdminTextField = forwardRef<HTMLInputElement, AdminTextFieldProps>(
    ({ label, error, hint, className, ...rest }, ref) => {
        return (
            <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    {label}
                </label>

                <input
                    ref={ref}
                    className={`
                        w-full rounded-lg border bg-white px-3.5 py-2.5
                        text-sm text-slate-900
                        placeholder:text-slate-400
                        outline-none transition
                        focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
                        ${error ? "border-red-300 focus:border-red-500 focus:ring-red-500/10" : "border-slate-300"}
                        ${className ?? ""}
                    `}
                    {...rest}
                />

                {hint && !error && (
                    <p className="mt-1.5 text-xs text-slate-400">{hint}</p>
                )}

                {error && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

AdminTextField.displayName = "AdminTextField";

export default AdminTextField;