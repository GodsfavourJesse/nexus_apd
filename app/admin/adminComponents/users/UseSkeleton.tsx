export default function UserSkeleton() {
    return (
        <div className="space-y-4">
            {[...Array(6)].map((_, index) => (
                <div
                    key={index}
                    className="animate-pulse rounded-3xl border border-slate-200 bg-white p-5"
                >
                    <div className="h-5 w-40 rounded bg-slate-200" />

                    <div className="mt-3 h-4 w-32 rounded bg-slate-100" />

                    <div className="mt-4 flex gap-3">
                        <div className="h-6 w-20 rounded-full bg-slate-100" />

                        <div className="h-6 w-20 rounded-full bg-slate-100" />
                    </div>
                </div>
            ))}
        </div>
    );
}