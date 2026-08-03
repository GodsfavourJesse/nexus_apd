"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Copy } from "lucide-react";
import { DepositStatusBadge } from "./DepositStatusBadge";
import { DepositReceiptPreview } from "./DepositReceiptPreview";
import { AdminDeposit } from "@/app/types/adminTypes/adminDeposit.types";
import DepositActions from "./DepositActions";

export const depositTableColumns: ColumnDef<AdminDeposit>[] = [

    {
        accessorKey: "paymentReceipt",

        header: "Receipt",

        cell: ({ row }) => (
            <DepositReceiptPreview
                receipt={
                    row.original.paymentReceipt
                }
            />
        ),
    },

    {
        accessorKey: "reference",

        header: "Reference",

        cell: ({ row }) => {

            const reference =
                row.original.reference;

            return (
                <div className="flex items-center gap-2">

                    <span className="font-medium">
                        {reference}
                    </span>

                    <button
                        type="button"
                        onClick={() =>
                            navigator.clipboard.writeText(
                                reference,
                            )
                        }
                        className="
                            flex h-7 w-7 items-center justify-center
                            rounded-md transition
                            hover:bg-slate-100
                            active:scale-95
                        "
                        aria-label="Copy reference"
                        title="Copy reference"
                    >
                        <Copy className="h-4 w-4" />
                    </button>

                </div>
            );

        },
    },

    {
        id: "user",

        header: "User",

        cell: ({ row }) => {

            const user =
                row.original.user;

            return (
                <div>

                    <p className="font-medium">
                        {user.email ??
                            "No Email"}
                    </p>

                    <p className="text-xs text-muted-foreground">
                        {user.phone}
                    </p>

                </div>
            );

        },
    },

    {
        id: "membership",

        header: "Membership",

        cell: ({ row }) =>
            row.original.user
                .membership?.name ??
            "-",
    },

    {
        accessorKey: "amount",

        header: "Amount",

        cell: ({ row }) => {

            const amount =
                Number(
                    row.original.amount,
                );

            return (
                <span className="font-semibold">
                    ₦
                    {amount.toLocaleString(
                        "en-NG",
                        {
                            minimumFractionDigits: 2,
                        },
                    )}
                </span>
            );

        },
    },

    {
        accessorKey: "status",

        header: "Status",

        cell: ({ row }) => (
            <DepositStatusBadge
                status={
                    row.original.status
                }
            />
        ),
    },

    {
        accessorKey: "createdAt",

        header: "Submitted",

        cell: ({ row }) =>
            format(
                new Date(
                    row.original.createdAt,
                ),
                "PPP p",
            ),
    },

    {
        id: "actions",

        header: "",

        enableSorting: false,

        cell: ({ row }) => (
            <DepositActions
                deposit={
                    row.original
                }
            />
        ),
    },

];