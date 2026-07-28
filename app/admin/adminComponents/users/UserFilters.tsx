"use client";

import { UserFilterOptions } from "@/app/hooks/adminHooks/users/useFiltersUsers";


interface UserFiltersProps {
    filters: UserFilterOptions;

    onChange: (
        filters: UserFilterOptions,
    ) => void;
}

export default function UserFilters({
    filters,
    onChange,
}: UserFiltersProps) {
    return (
        <div className="grid grid-cols-2 gap-3">

            <select
                value={
                    filters.isActive ===
                    undefined
                        ? ""
                        : String(
                              filters.isActive,
                          )
                }
                onChange={(e) =>
                    onChange({
                        ...filters,

                        isActive:
                            e.target.value ===
                            ""
                                ? undefined
                                : e.target
                                      .value ===
                                  "true",
                    })
                }
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
            >
                <option value="">
                    All Status
                </option>

                <option value="true">
                    Active
                </option>

                <option value="false">
                    Suspended
                </option>
            </select>

            <select
                value={
                    filters.isVerified ===
                    undefined
                        ? ""
                        : String(
                              filters.isVerified,
                          )
                }
                onChange={(e) =>
                    onChange({
                        ...filters,

                        isVerified:
                            e.target.value ===
                            ""
                                ? undefined
                                : e.target
                                      .value ===
                                  "true",
                    })
                }
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
            >
                <option value="">
                    All Verification
                </option>

                <option value="true">
                    Verified
                </option>

                <option value="false">
                    Unverified
                </option>
            </select>

        </div>
    );
}