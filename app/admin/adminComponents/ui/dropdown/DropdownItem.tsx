"use client";

import Link from "next/link";
import {
    ComponentType,
    ReactNode,
} from "react";

interface DropdownItemProps {

    icon?: ComponentType<{
        className?: string;
    }>;

    children: ReactNode;

    href?: string;

    onClick?: () => void;

    danger?: boolean;

    disabled?: boolean;

}

export function DropdownItem({
    icon: Icon,
    children,
    href,
    onClick,
    danger = false,
    disabled = false,
}: DropdownItemProps) {

    const className = `
        flex w-full items-center gap-3 px-4 py-3 text-sm
        transition-colors
        ${
            disabled
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:bg-slate-100"
        }
        ${
            danger
                ? "text-red-600"
                : "text-slate-700"
        }
    `;

    if (href) {

        return (
            <Link
                href={href}
                className={className}
            >

                {Icon && (
                    <Icon className="h-4 w-4" />
                )}

                {children}

            </Link>
        );

    }

    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={className}
        >

            {Icon && (
                <Icon className="h-4 w-4" />
            )}

            {children}

        </button>
    );

}