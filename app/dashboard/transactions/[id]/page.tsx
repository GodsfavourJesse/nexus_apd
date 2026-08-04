"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";


import { useTransaction } from "@/app/hooks/clientHooks/transactionHooks/useTransaction";

import TransactionDetails from "@/app/components/transactions/TransactionDetails";


export default function TransactionDetailsPage() {

    const router = useRouter();

    const params = useParams();

    const id = params.id as string;



    const {
        data: transaction,
        isLoading,
    } =
        useTransaction(id);



    if (isLoading) {

        return (

            <div
                className="
                    min-h-screen
                    flex
                    items-center
                    justify-center
                "
            >

                Loading...

            </div>

        );

    }



    if (!transaction) {

        return (

            <div
                className="
                    min-h-screen
                    flex
                    items-center
                    justify-center
                "
            >

                Transaction not found

            </div>

        );

    }



    return (

        <main
            className="
                min-h-screen
                bg-slate-50
                px-4
                py-5
            "
        >

            <button

                onClick={() =>
                    router.back()
                }

                className="
                    mb-5
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-slate-600
                "

            >

                <ArrowLeft size={18}/>

                Back

            </button>



            <TransactionDetails
                transaction={transaction}
            />


        </main>

    );

}