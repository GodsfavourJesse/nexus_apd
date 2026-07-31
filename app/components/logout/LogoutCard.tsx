"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";
import LogoutDialog from "./LogoutDialog";

export default function LogoutCard() {

    const [
        open,
        setOpen,
    ] = useState(false);

    return (
        <>

            <button
                onClick={() => setOpen(true)}
                className="
                    w-full
                    rounded-3xl
                    border
                    border-red-100
                    bg-white
                    p-5
                    text-left
                    shadow-sm
                    transition
                    hover:border-red-300
                    hover:shadow-md
                "
            >

                <div className="flex items-center gap-4">

                    <div
                        className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-red-50
                        "
                    >
                        <LogOut
                            size={22}
                            className="text-red-600"
                        />
                    </div>

                    <div>

                        <h2 className="text-lg font-semibold text-slate-900">
                            Logout Account
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Securely sign out from your account.
                        </p>

                    </div>

                </div>

            </button>

            <LogoutDialog
                open={open}
                onClose={() => setOpen(false)}
            />

        </>
    );
}