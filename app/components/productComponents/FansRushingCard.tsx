"use client";

import { useEffect, useMemo, useState } from "react";

interface PurchaseEntry {
    id: string;
    maskedPhone: string;
    ordinal: number;
    date: string;
    avatarSeed: number;
}

function randomPhone() {
    const prefix = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}...`;
}

function ordinalLabel(n: number) {
    const suffixes: Record<number, string> = { 1: "st", 2: "nd", 3: "rd" };
    const suffix = n % 100 >= 11 && n % 100 <= 13 ? "th" : suffixes[n % 10] ?? "th";
    return `The ${n}${suffix} purchase`;
}

function formatToday() {
    const now = new Date();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    return `${mm}-${dd}`;
}

function generateEntries(count: number): PurchaseEntry[] {
    const today = formatToday();

    return Array.from({ length: count }).map((_, i) => ({
        id: `${Date.now()}-${i}-${Math.random()}`,
        maskedPhone: randomPhone(),
        ordinal: Math.floor(Math.random() * 40) + 1,
        date: today,
        avatarSeed: Math.floor(Math.random() * 8) + 1,
    }));
}

const ROW_HEIGHT = 56; // px, height of one entry row
const VISIBLE_ROWS = 2;
const INTERVAL_MS = 2800;

export default function FansRushingCard() {
    // Generate a rotating pool of random entries once, then cycle
    // through them two-at-a-time, sliding vertically.
    const entries = useMemo(() => generateEntries(10), []);
    const [index, setIndex] = useState(0);

    const isWrapping = index >= entries.length;

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((i) => i + VISIBLE_ROWS);
        }, INTERVAL_MS);

        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        if (!isWrapping) return;

        const id = setTimeout(() => setIndex(0), 500);
        return () => clearTimeout(id);
    }, [isWrapping]);

    // Duplicate the first VISIBLE_ROWS entries at the end so the
    // slide-past-the-end transition has something to show before
    // snapping back invisibly.
    const track = [...entries, ...entries.slice(0, VISIBLE_ROWS)];

    return (
        <div className="mx-4 overflow-hidden rounded-2xl bg-[#E8F3FF] p-4">
            <h3 className="text-[15px] font-semibold text-slate-700">
                Fans are rushing to buy
            </h3>

            <div
                className="relative mt-2 overflow-hidden"
                style={{ height: ROW_HEIGHT * VISIBLE_ROWS }}
            >
                <div
                    style={{
                        transform: `translateY(-${index * ROW_HEIGHT}px)`,
                        transition: isWrapping ? "none" : "transform 500ms ease",
                    }}
                >
                    {track.map((entry, i) => (
                        <div
                            key={`${entry.id}-${i}`}
                            style={{ height: ROW_HEIGHT }}
                            className="flex items-center gap-3"
                        >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-200 text-xs font-semibold text-slate-500">
                                {entry.avatarSeed}
                            </div>

                            <span className="w-16 shrink-0 text-[14px] text-slate-800">
                                {entry.maskedPhone}
                            </span>

                            <span className="flex-1 text-[14px] text-slate-700">
                                {ordinalLabel(entry.ordinal)}
                            </span>

                            <span className="shrink-0 text-[13px] text-slate-400">
                                {entry.date}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}