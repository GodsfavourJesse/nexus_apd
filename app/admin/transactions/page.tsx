"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import AdminWalletTransactions from "../adminComponents/wallet/AdminWalletTransactions";


export default function WalletTransactionsPage(){

    const router = useRouter();


    return (

        <div className="space-y-6 p-6">

            <div className="flex items-start justify-between">

                <div>

                    <h1 className="text-3xl font-bold text-slate-900">
                        Wallet Transactions
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Complete admin wallet transaction history.
                    </p>

                </div>


                <button
                    onClick={() => router.back()}
                    className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-slate-700
                    shadow-sm
                    transition
                    hover:bg-slate-50
                    "
                >

                    <ArrowLeft size={16}/>

                    Back

                </button>


            </div>


            <AdminWalletTransactions />

        </div>

    );

}