"use client";

import { useState } from "react";
import {
    MoreHorizontal,
    Eye,
    CheckCircle2,
    XCircle,
} from "lucide-react";

import {
    AdminDeposit,
    DepositStatus,
} from "@/app/types/adminTypes/adminDeposit.types";
import { Dropdown, DropdownDivider, DropdownItem } from "../../adminComponents/ui/dropdown";
import ApproveDepositDialog from "../../adminComponents/deposits/detailsComponents/ApproveDepositDialog";
import RejectDepositDialog from "../../adminComponents/deposits/detailsComponents/RejectDepositDialog";


interface DepositActionsProps {
    deposit: AdminDeposit;

    /**
     * Hide "View Details" when already
     * inside the deposit details page.
     */
    hideView?: boolean;
}

export default function DepositActions({
    deposit,
    hideView = false,
}: DepositActionsProps) {
    const [approveOpen, setApproveOpen] =
        useState(false);

    const [rejectOpen, setRejectOpen] =
        useState(false);

    const canReview =
        deposit.status === DepositStatus.PENDING ||
        deposit.status === DepositStatus.UNDER_REVIEW;

    return (
        <>
            <Dropdown
                trigger={
                    <button
                        type="button"
                        aria-label="Deposit actions"
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            text-slate-600
                            shadow-sm
                            transition
                            hover:bg-slate-50
                            hover:text-slate-900
                            active:scale-95
                        "
                    >
                        <MoreHorizontal className="h-5 w-5" />
                    </button>
                }
            >
                {!hideView && (
                    <>
                        <DropdownItem
                            href={`/admin/deposits/${deposit.id}`}
                            icon={Eye}
                        >
                            View Details
                        </DropdownItem>

                        {canReview && (
                            <DropdownDivider />
                        )}
                    </>
                )}

                {canReview && (
                    <>
                        <DropdownItem
                            icon={CheckCircle2}
                            onClick={() =>
                                setApproveOpen(true)
                            }
                        >
                            Approve Deposit
                        </DropdownItem>

                        <DropdownItem
                            icon={XCircle}
                            danger
                            onClick={() =>
                                setRejectOpen(true)
                            }
                        >
                            Reject Deposit
                        </DropdownItem>
                    </>
                )}
            </Dropdown>

            <ApproveDepositDialog
                open={approveOpen}
                depositId={deposit.id}
                onClose={() =>
                    setApproveOpen(false)
                }
            />

            <RejectDepositDialog
                open={rejectOpen}
                depositId={deposit.id}
                onClose={() =>
                    setRejectOpen(false)
                }
            />
        </>
    );
}