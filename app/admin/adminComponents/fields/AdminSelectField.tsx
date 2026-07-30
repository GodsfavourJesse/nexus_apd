import { forwardRef, SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface AdminSelectFieldProps
    extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    error?: string;
}

const AdminSelectField = forwardRef<
    HTMLSelectElement,
    AdminSelectFieldProps
>(({ label, error, className, children, ...rest }, ref) => {
    return (
        <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
                {label}
            </label>

            <div className="relative">
                <select
                    ref={ref}
                    className={`
                        w-full appearance-none rounded-lg border bg-white
                        px-3.5 py-2.5 pr-9 text-sm text-slate-900
                        outline-none transition
                        focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
                        ${error ? "border-red-300 focus:border-red-500 focus:ring-red-500/10" : "border-slate-300"}
                        ${className ?? ""}
                    `}
                    {...rest}
                >
                    {children}
                </select>

                <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
            </div>

            {error && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
});

AdminSelectField.displayName = "AdminSelectField";

export default AdminSelectField;