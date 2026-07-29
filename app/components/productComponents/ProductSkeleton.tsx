export default function ProductSkeleton() {
    return (
        <div className="flex flex-col gap-2.5">
            {Array.from({ length: 6 }).map((_, index) => (
                <div
                    key={index}
                    className="flex animate-pulse items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3"
                >
                    <div className="h-16 w-16 shrink-0 rounded-xl bg-slate-200" />

                    <div className="flex-1 space-y-2">
                        <div className="h-4 w-3/4 rounded bg-slate-200" />
                        <div className="h-3 w-1/2 rounded bg-slate-100" />
                    </div>
                </div>
            ))}
        </div>
    );
}