export default function DailyOrderConfigSkeleton() {
    return (
        <main className="min-h-screen bg-slate-50 p-4">
            <div className="mx-auto flex max-w-md flex-col gap-4">

                {Array.from({
                    length: 5,
                }).map((_, index) => (
                    <div
                        key={index}
                        className="animate-pulse rounded-xl border border-slate-200 bg-white p-5"
                    >
                        <div className="mb-4 flex items-center justify-between">

                            <div className="h-5 w-40 rounded bg-slate-200" />

                            <div className="h-6 w-20 rounded-full bg-slate-200" />

                        </div>

                        <div className="space-y-4">

                            <div className="flex justify-between">
                                <div className="h-4 w-28 rounded bg-slate-200" />
                                <div className="h-4 w-12 rounded bg-slate-200" />
                            </div>

                            <div className="flex justify-between">
                                <div className="h-4 w-32 rounded bg-slate-200" />
                                <div className="h-4 w-16 rounded bg-slate-200" />
                            </div>

                            <div className="flex justify-between">
                                <div className="h-4 w-36 rounded bg-slate-200" />
                                <div className="h-4 w-20 rounded bg-slate-200" />
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </main>
    );
}