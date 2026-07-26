"use client";

import { useEffect, useState } from "react";
import AdminGuard from "@/app/guards/AdminGuard";
import { authService } from "@/app/services/auth.service";
import { getReferralLink } from "@/app/utils/referral";


export default function AdminDashboard(){

    const [referralCode, setReferralCode] = useState("");
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    useEffect(()=>{
        async function load(){
            try {
                const response = await authService.me();

                setReferralCode(
                    response.data.referralCode
                );
            }
            catch(error:any){
                setError(
                    error.message ??
                    "Failed to load referral token"
                );
            }
            finally {
                setLoading(false);
            }
        }

        load();

    },[]);

    const link = getReferralLink(referralCode);

    async function copyLink(){
        await navigator.clipboard.writeText(
            link
        );
    }

    async function copyReferralCode() {
        await navigator.clipboard.writeText(
            referralCode
        );
    }

    return (
        <AdminGuard>
            <main className="p-10">
                <h1 className="text-3xl font-bold">
                    Admin Dashboard
                </h1>

                <section className="mt-8 border rounded-lg p-6">
                    <h2 className="text-xl font-semibold">
                        Referral Information
                    </h2>

                    {loading && (
                        <p className="mt-3">
                            Loading...
                        </p>
                    )}

                    {error && (
                        <p className="mt-3 text-red-500">
                            {error}
                        </p>
                    )}

                    {!loading && !error && referralCode && (
                        <>
                            <div className="mt-5">
                                <p className="text-sm text-gray-500">
                                    Referral Code
                                </p>

                                <p className="mt-1 text-lg font-mono font-semibold">
                                    {referralCode}
                                </p>
                            </div>

                            <div className="mt-6">
                                <p className="text-sm text-gray-500">
                                    Referral Link
                                </p>

                                <p className="mt-1 break-all">
                                    {link}
                                </p>
                            </div>

                            <div className="mt-6 flex gap-3">
                                <button
                                    onClick={copyReferralCode}
                                    className="bg-gray-700 text-white px-4 py-2 rounded"
                                >
                                    Copy Code
                                </button>

                                <button
                                    onClick={copyLink}
                                    className="bg-black text-white px-4 py-2 rounded"
                                >
                                    Copy Link
                                </button>
                            </div>
                        </>
                    )}
                </section>
            </main>
        </AdminGuard>
    );
}