"use client";

import { useEffect, useRef, useState } from "react";
import { Download, ImageOff, X } from "lucide-react";

interface DepositReceiptPreviewProps {
    receipt: string | null;
}

export function DepositReceiptPreview({
    receipt,
}: DepositReceiptPreviewProps) {
    const [open, setOpen] = useState(false);
    const [dragY, setDragY] = useState(0);
    const dragStartY = useRef<number | null>(null);
    const [dragging, setDragging] = useState(false);
    const [failed, setFailed] = useState(false);

    /**
     * Hooks MUST always execute.
     */
    useEffect(() => {
        if (!open) return;

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setOpen(false);
            }
        }

        document.addEventListener(
            "keydown",
            handleKeyDown,
        );

        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown,
            );

            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        if (!open) {
            setDragY(0);
        }
    }, [open]);

    function onTouchStart(
        e: React.TouchEvent,
    ) {
        dragStartY.current =
            e.touches[0].clientY;

        setDragging(true);
    }

    function onTouchMove(
        e: React.TouchEvent,
    ) {
        if (dragStartY.current === null) {
            return;
        }

        const delta =
            e.touches[0].clientY -
            dragStartY.current;

        if (delta > 0) {
            setDragY(delta);
        }
    }

    function onTouchEnd() {
        setDragging(false);

        if (dragY > 120) {
            setOpen(false);
        } else {
            setDragY(0);
        }

        dragStartY.current = null;
    }

    /**
     * Only determine what to render AFTER
     * every hook has already run.
     */
    const showPlaceholder =
        !receipt || failed;

    return (
        <>
            {showPlaceholder ? (
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50">
                    <ImageOff
                        size={18}
                        className="text-slate-300"
                    />
                </div>
            ) : (
                <>
                    <button
                        type="button"
                        onClick={() =>
                            setOpen(true)
                        }
                        className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-slate-100 transition active:scale-95"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={receipt}
                            alt="Deposit receipt"
                            onError={() =>
                                setFailed(true)
                            }
                            className="h-full w-full object-cover"
                        />
                    </button>

                    {open && (
                        <div className="fixed inset-0 z-[70] bg-black">
                            <div
                                className="flex h-full flex-col"
                                style={{
                                    transform: `translateY(${dragY}px)`,
                                    opacity:
                                        1 -
                                        dragY /
                                            400,
                                    transition:
                                        dragging
                                            ? "none"
                                            : "transform 250ms ease, opacity 250ms ease",
                                }}
                            >
                                <div className="flex items-center justify-between px-4 pb-2 pt-[max(16px,env(safe-area-inset-top))]">
                                    <span className="text-[15px] font-semibold text-white">
                                        Receipt
                                    </span>

                                    <div className="flex items-center gap-2">
                                        <a
                                            href={
                                                receipt
                                            }
                                            download
                                            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white active:scale-90"
                                        >
                                            <Download
                                                size={
                                                    16
                                                }
                                            />
                                        </a>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpen(
                                                    false,
                                                )
                                            }
                                            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white active:scale-90"
                                        >
                                            <X
                                                size={
                                                    16
                                                }
                                            />
                                        </button>
                                    </div>
                                </div>

                                <div
                                    className="flex flex-1 items-center justify-center overflow-auto px-4"
                                    onTouchStart={
                                        onTouchStart
                                    }
                                    onTouchMove={
                                        onTouchMove
                                    }
                                    onTouchEnd={
                                        onTouchEnd
                                    }
                                    style={{
                                        touchAction:
                                            "pinch-zoom",
                                    }}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={
                                            receipt
                                        }
                                        alt="Deposit receipt"
                                        className="max-h-full max-w-full rounded-xl object-contain"
                                        draggable={
                                            false
                                        }
                                    />
                                </div>

                                <div className="pb-[max(20px,env(safe-area-inset-bottom))] text-center">
                                    <p className="text-[11px] text-white/40">
                                        Swipe down
                                        to close
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
}