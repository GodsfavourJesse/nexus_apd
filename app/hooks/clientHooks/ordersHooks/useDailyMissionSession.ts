"use client";

import {
    useEffect,
    useState,
} from "react";

const STORAGE_KEY = "daily-mission-session";

interface MissionState {
    date: string;
    dismissed: boolean;
}

export function useDailyMissionSession() {

    const [open, setOpen] =
        useState(false);

    useEffect(() => {

        const today =
            new Date()
                .toISOString()
                .split("T")[0];

        const raw =
            sessionStorage.getItem(
                STORAGE_KEY,
            );

        if (!raw) {

            sessionStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({
                    date: today,
                    dismissed: false,
                }),
            );

            setOpen(true);

            return;
        }

        const session: MissionState =
            JSON.parse(raw);

        /**
         * New day
         */

        if (session.date !== today) {

            sessionStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({
                    date: today,
                    dismissed: false,
                }),
            );

            setOpen(true);

            return;
        }

        /**
         * Same day
         */

        setOpen(!session.dismissed);

    }, []);

    function closeMission() {

        const today =
            new Date()
                .toISOString()
                .split("T")[0];

        sessionStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                date: today,
                dismissed: true,
            }),
        );

        setOpen(false);

    }

    return {

        open,

        openMission: () =>
            setOpen(true),

        closeMission,

    };

}