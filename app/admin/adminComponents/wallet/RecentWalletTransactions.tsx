"use client";

import Link from "next/link";
import { ArrowRight, Wallet } from "lucide-react";

import {
    useAdminWalletTransactions,
} from "@/app/hooks/adminHooks/admin-wallet/useAdminWalletTransactions";


function money(value:string){

    return Number(value).toLocaleString(
        "en-NG",
        {
            style:"currency",
            currency:"NGN",
        }
    );

}


function date(value:string){

    return new Date(value).toLocaleDateString(
        "en-NG",
        {
            month:"short",
            day:"numeric",
            year:"numeric",
        }
    );

}



export default function RecentWalletTransactions(){

    const {
        data,
        isLoading,
    } = useAdminWalletTransactions();


    if(isLoading){

        return (
            <div className="rounded-2xl border bg-white p-6">
                Loading transactions...
            </div>
        );

    }


    const transactions =
        data?.data?.slice(0,3) ?? [];



    return (

        <div
            className="
            rounded-2xl
            border
            bg-white
            shadow-sm
            "
        >

            <div
                className="
                flex
                items-center
                justify-between
                border-b
                p-6
                "
            >

                <div>

                    <h2 className="text-xl font-semibold">
                        Recent Transactions
                    </h2>

                    <p className="text-sm text-gray-500">
                        Latest wallet activity
                    </p>

                </div>


                <Link
                    href="/admin/transactions"
                    className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-blue-600
                    hover:text-blue-700
                    "
                >

                    View All

                    <ArrowRight size={16}/>

                </Link>


            </div>




            {
                transactions.length === 0 ? (

                    <div
                        className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        py-12
                        text-center
                        "
                    >

                        <Wallet
                            size={32}
                            className="text-gray-400"
                        />

                        <p className="mt-3 font-medium">
                            No transactions yet
                        </p>

                        <p className="text-sm text-gray-500">
                            Wallet activities will appear here.
                        </p>

                    </div>


                ) : (


                    <div className="divide-y">


                        {
                            transactions.map(
                                (transaction)=>(
                                    
                                    <div
                                        key={transaction.id}
                                        className="
                                        flex
                                        items-center
                                        justify-between
                                        p-5
                                        "
                                    >

                                        <div>

                                            <p className="font-medium">
                                                {transaction.type}
                                            </p>

                                            <p className="text-xs text-gray-500">
                                                {date(transaction.createdAt)}
                                            </p>

                                        </div>


                                        <div className="text-right">

                                            <p className="font-semibold">
                                                {money(transaction.amount)}
                                            </p>


                                            <p className="text-xs text-gray-500">
                                                Balance:
                                                {" "}
                                                {money(transaction.balanceAfter)}
                                            </p>

                                        </div>


                                    </div>

                                )
                            )
                        }


                    </div>

                )
            }


        </div>

    );

}