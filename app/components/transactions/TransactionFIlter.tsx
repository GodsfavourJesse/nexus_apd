"use client";

const filters = [
    "All",
    "Deposits",
    "Withdrawals",
    "Rewards",
    "Referral",
    "Membership",
];

interface Props {
    value: string;

    onChange: (
        value: string,
    ) => void;
}

export default function TransactionFilter({
    value,
    onChange,
}: Props) {

    return (

        <div className="flex flex-wrap gap-3">

            {filters.map((filter) => {

                const active =
                    filter === value;

                return (

                    <button
                        key={filter}
                        type="button"
                        onClick={() =>
                            onChange(filter)
                        }
                        className={`
                            rounded-xl
                            border
                            px-4
                            py-2.5
                            text-sm
                            font-medium
                            transition-all
                            duration-200
                            ${
                                active
                                    ? `
                                        border-slate-900
                                        bg-slate-900
                                        text-white
                                        shadow-sm
                                      `
                                    : `
                                        border-slate-200
                                        bg-white
                                        text-slate-600
                                        hover:border-slate-300
                                        hover:bg-slate-50
                                      `
                            }
                        `}
                    >
                        {filter}
                    </button>

                );

            })}

        </div>

    );

}