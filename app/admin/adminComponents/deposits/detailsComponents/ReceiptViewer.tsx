"use client";

import { useEffect } from "react";
import { X, Download } from "lucide-react";

interface Props {
    open: boolean;
    src: string;
    onClose: () => void;
}

export default function ReceiptViewer({ open, src, onClose }: Props) {
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
        }

        if (open) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
            onClick={onClose}
        >
            <div className="absolute right-4 top-4 flex items-center gap-2">
                <a
                    href={src}
                    download
                    onClick={(e) => e.stopPropagation()}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                    aria-label="Download receipt"
                >
                    <Download size={18} />
                </a>

                <button
                    type="button"
                    onClick={onClose}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                    aria-label="Close"
                >
                    <X size={18} />
                </button>
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={src}
                alt="Payment receipt"
                onClick={(e) => e.stopPropagation()}
                className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
            />
        </div>
    );
}