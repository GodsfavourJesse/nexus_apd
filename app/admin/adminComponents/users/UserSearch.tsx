"use client";

interface UserSearchProps {
    value: string;
    onChange: (
        value: string,
    ) => void;
}

export default function UserSearch({
    value,
    onChange,
}: UserSearchProps) {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) =>
                onChange(
                    e.target.value,
                )
            }
            placeholder="Search by email, phone or referral code..."
            className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-4
                py-3
                text-sm
                outline-none
                transition
                focus:border-blue-500
            "
        />
    );
}