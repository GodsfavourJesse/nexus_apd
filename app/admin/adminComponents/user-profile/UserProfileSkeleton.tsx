"use client";

export default function UserProfileSkeleton() {
    return (
        <main className="min-h-screen bg-slate-50 p-4 pb-24">
            <div className="mx-auto flex w-full max-w-md flex-col gap-4">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className="
                            animate-pulse
                            rounded-3xl
                            border
                            border-slate-200
                            bg-white
                            p-5
                            shadow-sm
                        "
                    >
                        <div className="h-6 w-40 rounded bg-slate-200" />

                        <div className="mt-5 space-y-3">
                            <div className="h-4 w-full rounded bg-slate-100" />

                            <div className="h-4 w-5/6 rounded bg-slate-100" />

                            <div className="h-4 w-2/3 rounded bg-slate-100" />

                            <div className="h-4 w-3/4 rounded bg-slate-100" />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}