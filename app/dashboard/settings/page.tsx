"use client";

import LogoutCard from "@/app/components/logout/LogoutCard";
import SettingsHeader from "@/app/components/settings/SettingsHeader";


export default function SettingsPage() {
    return (
        <div className="w-full h-full bg-slate-50 absolute z-100">

            <SettingsHeader />

            <main className="mx-auto max-w-lg px-4 py-6">

                <LogoutCard />

            </main>

        </div>
    );
}