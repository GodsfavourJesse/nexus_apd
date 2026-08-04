"use client";


import {
    useAdminWalletTransactions,
} from "@/app/hooks/adminHooks/admin-wallet/useAdminWalletTransactions";
import { Wallet } from "lucide-react";



function formatMoney(
    value:string
){

    return Number(value)
        .toLocaleString(
            "en-NG",
            {
                style:"currency",
                currency:"NGN",
            }
        );

}



function formatDate(
    date:string
){

    return new Date(date)
        .toLocaleDateString(
            "en-NG",
            {
                year:"numeric",
                month:"short",
                day:"numeric",
            }
        );

}



export default function AdminWalletTransactions(){


    const {
        data,
        isLoading,
    } =
    useAdminWalletTransactions();



    if(isLoading){

        return (
            <div>
                Loading transactions...
            </div>
        );

    }



    const transactions =
        data?.data ?? [];



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
            border-b
            p-6
            "
            >

                <h2
                className="
                text-xl
                font-semibold
                "
                >
                    Wallet Transactions
                </h2>

                <p
                className="
                text-sm
                text-gray-500
                "
                >
                    Complete admin wallet activity history.
                </p>

            </div>




            <div
            className="
            overflow-x-auto
            "
            >


                <table
                className="
                w-full
                text-sm
                "
                >


                    <thead
                    className="
                    border-b
                    bg-gray-50
                    "
                    >

                        <tr>

                            <th className="p-4 text-left">
                                Type
                            </th>


                            <th className="p-4 text-left">
                                Amount
                            </th>


                            <th className="p-4 text-left">
                                Balance Before
                            </th>


                            <th className="p-4 text-left">
                                Balance After
                            </th>


                            <th className="p-4 text-left">
                                Date
                            </th>


                        </tr>

                    </thead>



                    <tbody>


                    {
                        transactions.map(
                            (transaction)=>(
                                
                            <tr
                            key={transaction.id}
                            className="
                            border-b
                            "
                            >

                                <td className="p-4">
                                    {transaction.type}
                                </td>


                                <td className="p-4 font-medium">
                                    {
                                        formatMoney(
                                            transaction.amount
                                        )
                                    }
                                </td>


                                <td className="p-4">
                                    {
                                        formatMoney(
                                            transaction.balanceBefore
                                        )
                                    }
                                </td>


                                <td className="p-4">
                                    {
                                        formatMoney(
                                            transaction.balanceAfter
                                        )
                                    }
                                </td>


                                <td className="p-4">
                                    {
                                        formatDate(
                                            transaction.createdAt
                                        )
                                    }
                                </td>


                            </tr>

                            )
                        )
                    }



                    {
    transactions.length === 0 && (

        <tr>

            <td
                colSpan={5}
            >

                <div
                    className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    py-16
                    text-center
                    "
                >

                    <div
                        className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        bg-gray-100
                        "
                    >

                        <Wallet
                            size={28}
                            className="text-gray-400"
                        />

                    </div>


                    <h3
                        className="
                        text-lg
                        font-semibold
                        text-gray-700
                        "
                    >
                        No Transactions Yet
                    </h3>


                    <p
                        className="
                        max-w-sm
                        text-sm
                        text-gray-500
                        "
                    >
                        Your admin wallet transactions will appear here
                        when deposits, payouts, withdrawals, or adjustments
                        are processed.
                    </p>


                </div>

            </td>

        </tr>

    )
}


                    </tbody>


                </table>


            </div>


        </div>

    );

}