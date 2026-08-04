"use client";

import { Search } from "lucide-react";

interface Props {

    value: string;

    onChange: (
        value: string,
    ) => void;

}

export default function TransactionSearch({

    value,

    onChange,

}: Props) {

    return (

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">

            <Search
                size={20}
                className="text-slate-400"
            />

            <input

                value={value}

                onChange={(e) =>
                    onChange(
                        e.target.value,
                    )
                }

                placeholder="Search by reference, type or description..."

                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"

            />

        </div>

    );

}