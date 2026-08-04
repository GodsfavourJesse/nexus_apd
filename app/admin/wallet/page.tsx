"use client";

import {
    Wallet,
    TrendingUp,
    ArrowDownCircle,
    PiggyBank,
    Lock,
    AlertTriangle,
} from "lucide-react";

import { useAdminWallet } from "@/app/hooks/adminHooks/admin-wallet/useAdminWallet";
import RecentWalletTransactions from "../adminComponents/wallet/RecentWalletTransactions";


function formatMoney(value: string) {
    return Number(value).toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
    });
}


export default function AdminWalletPage() {

    const {
        data,
        isLoading,
        isError,
    } = useAdminWallet();



    if (isLoading) {
        return <WalletSkeleton />;
    }



    const wallet = data?.data.wallet;



    if (isError || !wallet) {

        return (
            <div className="flex min-h-[60vh] items-center justify-center p-6">

                <div
                    className="
                    flex
                    w-full
                    max-w-sm
                    flex-col
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-red-100
                    bg-red-50
                    p-8
                    text-center
                    "
                >

                    <div
                        className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-red-100
                        text-red-600
                        "
                    >
                        <AlertTriangle size={20} />
                    </div>


                    <p className="text-sm font-semibold text-red-700">
                        Wallet unavailable
                    </p>


                    <p className="text-xs text-red-500">
                        We couldn&apos;t load the platform wallet. Try
                        refreshing the page.
                    </p>


                </div>

            </div>
        );
    }




    const stats = [

        {
            title: "Total Deposited",
            value: wallet.totalDeposited,
            icon: TrendingUp,
            tint: "bg-blue-50 text-blue-600",
        },


        {
            title: "Total Earned",
            value: wallet.totalEarned,
            icon: PiggyBank,
            tint: "bg-emerald-50 text-emerald-600",
        },


        {
            title: "Total Withdrawn",
            value: wallet.totalWithdrawn,
            icon: ArrowDownCircle,
            tint: "bg-violet-50 text-violet-600",
        },

    ];




    return (

        <div className="space-y-8 p-6">


            {/* Header */}

            <div>

                <h1 className="text-3xl font-bold text-slate-900">
                    Admin Wallet
                </h1>


                <p className="mt-1 text-sm text-slate-500">
                    Manage and monitor platform funds.
                </p>

            </div>




            {/* Hero balance card */}

            <div
                className="
                relative
                overflow-hidden
                rounded-3xl
                bg-gradient-to-br
                from-slate-900
                via-slate-800
                to-slate-900
                p-8
                shadow-lg
                "
            >


                <div
                    className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-56
                    w-56
                    rounded-full
                    bg-blue-500/20
                    blur-3xl
                    "
                />


                <div
                    className="
                    pointer-events-none
                    absolute
                    -bottom-10
                    -left-10
                    h-40
                    w-40
                    rounded-full
                    bg-emerald-500/10
                    blur-3xl
                    "
                />



                <div
                    className="
                    relative
                    flex
                    flex-col
                    gap-6
                    sm:flex-row
                    sm:items-end
                    sm:justify-between
                    "
                >

                    <div>

                        <div
                            className="
                            flex
                            items-center
                            gap-2
                            text-slate-400
                            "
                        >

                            <Wallet size={16}/>

                            <span className="text-sm font-medium">
                                Available Balance
                            </span>

                        </div>



                        <p
                            className="
                            mt-3
                            text-4xl
                            font-bold
                            tracking-tight
                            text-white
                            sm:text-5xl
                            "
                        >

                            {formatMoney(wallet.availableBalance)}

                        </p>



                        <p className="mt-2 text-xs text-slate-400">

                            Funds ready for withdrawal or platform operations.

                        </p>


                    </div>





                    {/* Held Balance */}

                    <div
                        className="
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        px-4
                        py-3
                        backdrop-blur-sm
                        "
                    >

                        <div
                            className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            bg-amber-400/15
                            text-amber-400
                            "
                        >

                            <Lock size={16}/>

                        </div>



                        <div>

                            <p className="text-xs text-slate-400">
                                Held Balance
                            </p>


                            <p className="text-base font-semibold text-white">

                                {formatMoney(wallet.heldBalance)}

                            </p>

                        </div>


                    </div>


                </div>


            </div>





            {/* Secondary stats */}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                {
                    stats.map((stat)=>{

                        const Icon = stat.icon;


                        return (

                            <div
                                key={stat.title}
                                className="
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-6
                                shadow-sm
                                transition
                                hover:shadow-md
                                "
                            >

                                <div className="flex items-center justify-between">

                                    <p className="text-sm font-medium text-slate-500">
                                        {stat.title}
                                    </p>


                                    <div
                                        className={`
                                        flex
                                        h-9
                                        w-9
                                        items-center
                                        justify-center
                                        rounded-xl
                                        ${stat.tint}
                                        `}
                                    >

                                        <Icon size={18}/>

                                    </div>


                                </div>



                                <h2
                                    className="
                                    mt-4
                                    text-2xl
                                    font-bold
                                    tracking-tight
                                    text-slate-900
                                    "
                                >

                                    {formatMoney(stat.value)}

                                </h2>


                            </div>

                        );

                    })
                }

            </div>





            {/* Wallet Transactions */}

            <div className="mt-8">

                <RecentWalletTransactions />

            </div>



        </div>

    );

}




function WalletSkeleton() {


    return (

        <div className="space-y-8 p-6">


            <div className="space-y-2">

                <div
                    className="
                    h-8
                    w-48
                    animate-pulse
                    rounded-lg
                    bg-slate-200
                    "
                />


                <div
                    className="
                    h-4
                    w-64
                    animate-pulse
                    rounded
                    bg-slate-100
                    "
                />

            </div>




            <div
                className="
                h-44
                animate-pulse
                rounded-3xl
                bg-slate-200
                "
            />





            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                {
                    Array.from({length:3})
                    .map((_,i)=>(

                        <div
                            key={i}
                            className="
                            animate-pulse
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-6
                            "
                        >

                            <div className="flex items-center justify-between">

                                <div
                                    className="
                                    h-4
                                    w-28
                                    rounded
                                    bg-slate-200
                                    "
                                />


                                <div
                                    className="
                                    h-9
                                    w-9
                                    rounded-xl
                                    bg-slate-100
                                    "
                                />

                            </div>


                            <div
                                className="
                                mt-4
                                h-7
                                w-32
                                rounded
                                bg-slate-200
                                "
                            />

                        </div>

                    ))
                }

            </div>



        </div>

    );

}