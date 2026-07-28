"use client";

import { useState } from "react";

import { useUsers } from "@/app/hooks/adminHooks/users/useUsers";
import {
    useFilterUsers,
    UserFilterOptions,
} from "@/app/hooks/adminHooks/users/useFiltersUsers";
import { useSearchUsers } from "@/app/hooks/adminHooks/users/useSearchUsers";

import UserSearch from "../adminComponents/users/UserSearch";
import UserFilters from "../adminComponents/users/UserFilters";
import UserList from "../adminComponents/users/UserList";
import UserSkeleton from "../adminComponents/users/UseSkeleton";
import EmptyUsers from "../adminComponents/users/EmpryUsers";

export default function AdminUsersPage() {
    const [search, setSearch] = useState("");

    const [filters, setFilters] =
        useState<UserFilterOptions>({});

    const {
        data: usersData,
        isLoading,
    } = useUsers();

    const {
        data: searchData,
        isLoading: isSearching,
    } = useSearchUsers(search);

    const {
        data: filterData,
        isLoading: isFiltering,
    } = useFilterUsers(filters);

    const hasSearch =
        search.trim().length > 0;

    const hasFilters =
        Object.keys(filters).length > 0;

    const users = hasSearch
        ? searchData?.data.items ?? []
        : hasFilters
        ? filterData?.data.items ?? []
        : usersData?.data.items ?? [];

    const loading = hasSearch
        ? isSearching
        : hasFilters
        ? isFiltering
        : isLoading;

    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            <div
                className="
                    mx-auto
                    flex
                    w-full
                    max-w-md
                    flex-col
                    gap-5
                    px-4
                    py-5
                "
            >
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">
                        Users
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Manage all registered users.
                    </p>
                </div>

                <UserSearch
                    value={search}
                    onChange={setSearch}
                />

                <UserFilters
                    filters={filters}
                    onChange={setFilters}
                />

                {loading ? (
                    <UserSkeleton />
                ) : users.length === 0 ? (
                    <EmptyUsers />
                ) : (
                    <UserList users={users} />
                )}
            </div>
        </main>
    );
}