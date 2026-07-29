"use client";

import {
    forwardRef,
    InputHTMLAttributes,
    ReactNode,
    SelectHTMLAttributes,
    TextareaHTMLAttributes,
} from "react";

interface FieldWrapperProps {
    label: string;
    htmlFor: string;
    hint?: string;
    error?: string;
    trailing?: ReactNode;
    optional?: boolean;
}

function FieldWrapper({
    label,
    htmlFor,
    hint,
    error,
    trailing,
    optional,
    children,
}: FieldWrapperProps & { children: ReactNode }) {
    return (
        <div>
            <div className="mb-1.5 flex items-center justify-between">
                <label
                    htmlFor={htmlFor}
                    className="text-sm font-medium text-slate-700"
                >
                    {label}
                    {optional && (
                        <span className="ml-1 font-normal text-slate-400">
                            (optional)
                        </span>
                    )}
                </label>

                {trailing}
            </div>

            {children}

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

const fieldClass = (error?: string) => `
    h-11 w-full rounded-xl border bg-white px-3.5 text-sm text-slate-900
    outline-none transition
    placeholder:text-slate-400
    focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
    ${error ? "border-red-300 focus:border-red-500 focus:ring-red-500/10" : "border-slate-300"}
`;

interface AdminInputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        Omit<FieldWrapperProps, "htmlFor"> {}

export const AdminInput = forwardRef<HTMLInputElement, AdminInputProps>(
    ({ label, hint, error, trailing, optional, id, className, ...rest }, ref) => (
        <FieldWrapper
            label={label}
            htmlFor={id!}
            hint={hint}
            error={error}
            trailing={trailing}
            optional={optional}
        >
            <input
                ref={ref}
                id={id}
                className={`${fieldClass(error)} ${className ?? ""}`}
                {...rest}
            />
        </FieldWrapper>
    ),
);
AdminInput.displayName = "AdminInput";

interface AdminTextareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement>,
        Omit<FieldWrapperProps, "htmlFor"> {}

export const AdminTextarea = forwardRef<
    HTMLTextAreaElement,
    AdminTextareaProps
>(
    (
        {
            label,
            hint,
            error,
            trailing,
            optional,
            id,
            className,
            ...rest
        },
        ref,
    ) => (
        <FieldWrapper
            label={label}
            htmlFor={id ?? ""}
            hint={hint}
            error={error}
            trailing={trailing}
            optional={optional}
        >
            <textarea
                ref={ref}
                id={id}
                className={`
                    w-full
                    min-w-0
                    resize-y
                    rounded-xl
                    border
                    bg-white
                    px-4
                    py-3
                    text-sm
                    text-slate-900
                    placeholder:text-slate-400
                    outline-none
                    transition

                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-600/10

                    ${
                        error
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                            : "border-slate-300"
                    }

                    ${className ?? ""}
                `}
                {...rest}
            />
        </FieldWrapper>
    ),
);

AdminTextarea.displayName = "AdminTextarea";

interface AdminSelectProps
    extends SelectHTMLAttributes<HTMLSelectElement>,
        Omit<FieldWrapperProps, "htmlFor"> {}

export const AdminSelect = forwardRef<HTMLSelectElement, AdminSelectProps>(
    ({ label, hint, error, optional, id, className, children, ...rest }, ref) => (
        <FieldWrapper
            label={label}
            htmlFor={id!}
            hint={hint}
            error={error}
            optional={optional}
        >
            <select
                ref={ref}
                id={id}
                className={`${fieldClass(error)} appearance-none ${className ?? ""}`}
                {...rest}
            >
                {children}
            </select>
        </FieldWrapper>
    ),
);
AdminSelect.displayName = "AdminSelect";