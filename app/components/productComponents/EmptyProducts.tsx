import { PackageSearch } from "lucide-react";

export default function EmptyProducts() {
    return (
        <div className="flex h-64 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
            <PackageSearch size={28} className="text-slate-300" />
            <p className="text-[15px] text-slate-500">
                No products are currently available.
            </p>
        </div>
    );
}