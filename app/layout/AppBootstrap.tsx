"use client";

import { useWallet } from "@/app/hooks/clientHooks/walletHooks/useWallet";
import { useCurrentUser } from "../hooks/clientHooks/userHooks/useCurrentUser";
import { useTodayOrder } from "../hooks/clientHooks/ordersHooks/useTodayOrder";

export default function AppBootstrap() {
    useCurrentUser();
    useWallet();
    useTodayOrder();

    return null;
}