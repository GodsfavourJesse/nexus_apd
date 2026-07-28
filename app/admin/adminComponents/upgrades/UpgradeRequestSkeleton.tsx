"use client";

export default function UpgradeRequestSkeleton() {
    return (
        <main className="min-h-screen bg-slate-50 p-4">
            <div className="mx-auto flex max-w-md flex-col gap-4">
                {Array.from({
                    length: 6,
                }).map((_, index) => (
                    <div
                        key={index}
                        className="
                            animate-pulse
                            rounded-3xl
                            border
                            border-slate-200
                            bg-white
                            p-5
                        "
                    >
                        <div className="h-5 w-40 rounded bg-slate-200" />

                        <div className="mt-4 h-4 w-28 rounded bg-slate-100" />

                        <div className="mt-3 h-4 w-36 rounded bg-slate-100" />

                        <div className="mt-3 h-4 w-32 rounded bg-slate-100" />

                        <div className="mt-3 h-4 w-24 rounded bg-slate-100" />
                    </div>
                ))}
            </div>
        </main>
    );
}