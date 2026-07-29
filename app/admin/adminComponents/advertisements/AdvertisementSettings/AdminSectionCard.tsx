import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface Props {
    icon: LucideIcon;
    title: string;
    description: string;
    children: ReactNode;
}

export default function AdminSectionCard({
    icon: Icon,
    title,
    description,
    children,
}: Props) {
    return (
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/60 px-5 py-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon size={17} />
                </div>

                <div>
                    <h2 className="text-sm font-semibold text-slate-900">
                        {title}
                    </h2>
                    <p className="text-xs text-slate-500">{description}</p>
                </div>
            </div>

            <div className="space-y-5 px-5 py-5">{children}</div>
        </section>
    );
}