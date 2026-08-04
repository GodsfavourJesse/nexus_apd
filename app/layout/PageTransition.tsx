"use client";

import {
    ReactNode,
    useEffect,
    useState,
} from "react";

import { usePathname } from "next/navigation";

import AppLoader from "./AppLoader";

interface Props {
    children: ReactNode;
}

export default function PageTransition({
    children,
}: Props) {

    const pathname = usePathname();

    const [loading, setLoading] =
        useState(false);

    useEffect(() => {

        setLoading(true);

        const timer = setTimeout(() => {

            setLoading(false);

        }, 350); // smooth minimum duration

        return () => clearTimeout(timer);

    }, [pathname]);

    return (
        <>
            {loading && <AppLoader />}

            <div
                className={`
                    transition-opacity
                    duration-300
                    ${
                        loading
                            ? "opacity-0"
                            : "opacity-100"
                    }
                `}
            >
                {children}
            </div>
        </>
    );
}