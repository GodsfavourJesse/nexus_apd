"use client";

import {
    ReactNode,
    TouchEvent,
    useRef,
    useState,
} from "react";

import PullToRefreshSpinner from "./PullToRefreshSpinner";

interface Props {
    children: ReactNode;
    onRefresh: () => Promise<void>;
}

const MAX_PULL = 110;
const TRIGGER = 80;

export default function PullToRefresh({
    children,
    onRefresh,
}: Props) {
    const startY = useRef(0);

    const [pull, setPull] = useState(0);

    const [refreshing, setRefreshing] =
        useState(false);

    function handleTouchStart(
        e: TouchEvent<HTMLDivElement>,
    ) {
        if (window.scrollY > 0 || refreshing) return;

        startY.current = e.touches[0].clientY;
    }

    function handleTouchMove(
        e: TouchEvent<HTMLDivElement>,
    ) {
        if (window.scrollY > 0 || refreshing) return;

        const distance =
            e.touches[0].clientY -
            startY.current;

        if (distance <= 0) return;

        setPull(
            Math.min(
                distance * 0.5,
                MAX_PULL,
            ),
        );
    }

    async function handleTouchEnd() {
        if (refreshing) return;

        if (pull >= TRIGGER) {
            setRefreshing(true);
            setPull(60);

            try {
                await onRefresh();
            } finally {
                setRefreshing(false);
                setPull(0);
            }
        } else {
            setPull(0);
        }
    }

    return (
        <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <PullToRefreshSpinner
                progress={Math.min(
                    pull / TRIGGER,
                    1,
                )}
                refreshing={refreshing}
            />

            <div
                style={{
                    transform: `translateY(${pull}px)`,
                    transition: refreshing
                        ? "transform .25s ease"
                        : pull === 0
                        ? "transform .25s ease"
                        : "none",
                }}
            >
                {children}
            </div>
        </div>
    );
}