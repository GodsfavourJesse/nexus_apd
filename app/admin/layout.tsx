"use client";

import { useState } from "react";

import AdminGuard from "@/app/guards/AdminGuard";
import AdminHeader from "./adminComponents/AdminHeader";
import AdminBottomNav from "./adminComponents/AdminBottomNav";
import AdminMenuSheet from "./adminComponents/AdminMenuSheet";


interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({
    children,
}: AdminLayoutProps) {

    const [menuOpen, setMenuOpen] =
        useState(false);

    return (
        <AdminGuard>
            <div className="relative flex min-h-screen flex-col bg-gray-50">

                {/* Header */}
                <AdminHeader
                    onMenuClick={() =>
                        setMenuOpen(true)
                    }
                />

                {/* Page */}
                <main
                    className="
                        flex-1
                        overflow-y-auto
                        px-4
                        pt-20
                        pb-24
                    "
                >
                    {children}
                </main>

                {/* Bottom Navigation */}
                <AdminBottomNav
                    onMoreClick={() =>
                        setMenuOpen(true)
                    }
                />

                {/* Menu Sheet */}
                <AdminMenuSheet
                    open={menuOpen}
                    onClose={() =>
                        setMenuOpen(false)
                    }
                />

            </div>
        </AdminGuard>
    );
}