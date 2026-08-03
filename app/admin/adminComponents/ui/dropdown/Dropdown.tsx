"use client";

import {
    ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";

interface DropdownProps {
    trigger: ReactNode;
    children: ReactNode;
    width?: string;
}

export function Dropdown({
    trigger,
    children,
    width = "w-52",
}: DropdownProps) {

    const [open, setOpen] =
        useState(false);

    const ref =
        useRef<HTMLDivElement>(null);

    useEffect(() => {

        function handleClickOutside(
            event: MouseEvent,
        ) {

            if (
                ref.current &&
                !ref.current.contains(
                    event.target as Node,
                )
            ) {
                setOpen(false);
            }

        }

        document.addEventListener(
            "mousedown",
            handleClickOutside,
        );

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside,
            );

    }, []);

    return (
        <div
            ref={ref}
            className="relative inline-block"
        >

            <div
                onClick={() =>
                    setOpen(
                        (value) => !value,
                    )
                }
            >
                {trigger}
            </div>

            {open && (
                <div
                    className={`absolute right-0 z-50 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl ${width}`}
                >
                    {children}
                </div>
            )}

        </div>
    );

}