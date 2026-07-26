import Link from "next/link";
import { ComponentType } from "react";

interface MenuGridItemProps {
    icon: ComponentType;
    line1: string;
    line2?: string;
    href: string;
}

export default function MenuGridItem({
    icon: Icon,
    line1,
    line2,
    href,
}: MenuGridItemProps) {
    return (
        <Link
            href={href}
            className="group flex flex-col items-center gap-2 text-center"
        >
            <div
                className="
                    flex h-16 w-16 items-center justify-center
                    rounded-2xl bg-[#FFF3D9]
                    p-3
                    transition
                    group-hover:bg-[#FFE9B8]
                    group-active:scale-95
                "
            >
                <Icon />
            </div>

            <span className="flex h-8 flex-col justify-start text-[10px] font-medium leading-tight text-slate-700">
                <span>{line1}</span>
                <span>{line2 ?? "\u00A0"}</span>
            </span>
        </Link>
    );
}