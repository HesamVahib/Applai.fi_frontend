"use client";

import { useEffect, useState } from "react";
import FavoriteClickFilter from "@/functions/favorite/FavoriteClickFilter";
import { count } from "console";

const classes = {
        container: "w-full flex items-center justify-center",
        area: "h-7 border border-[var(--color-stroke)] text-[var(--color-gray)] text-[14px] font-medium rounded-full block w-full px-3 relative focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/50 bg-[var(--color-background2)] items-center flex font-athiti justify-between",
        areaClicked: "h-7 border border-[var(--color-secondary)] bg-[var(--color-background2)] text-[var(--color-gray)] text-[14px] font-semibold rounded-full block w-full px-3 relative focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/50 bg-[var(--color-background2)] items-center flex font-athiti justify-between",
        counts: "bg-[var(--color-gray)]/40 text-white text-xs ml-2 px-2 py-0.25 rounded-lg",
        countsClicked: "bg-[var(--color-secondary)] text-white text-xs ml-2 px-2 py-0.25 rounded-lg",
        icon: "h-5 w-5 text-[var(--color-gray)]",
    };

export default function FavoriteButton() {

    const [mounted, setMounted] = useState(false);
    const [savedJobsCount, setSavedJobsCount] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);
    

    const readFavorites = () => {
        try {
            const raw = localStorage.getItem('favoriteJobs');
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    };
    
    const { toggleFavoriteFilter, isFavoritedFiltered } = FavoriteClickFilter();

    useEffect(() => {
        const refresh = () => setSavedJobsCount(readFavorites().length);
        window.addEventListener('favorites:changed', refresh);

        const onStorage = (e: StorageEvent) => {
            if (e.key === 'favoriteJobs') refresh();
        };
        window.addEventListener('storage', onStorage);

        return () => {
            window.removeEventListener('favorites:changed', refresh);
            window.removeEventListener('storage', onStorage);
        };
    }, []);


    return (
    <div className={classes.container} title="View Saved Jobs">
        <button className="w-full flex focus:ring-[var(--color-secondary)]/50 hover:cursor-pointer"
            onClick={() => {
                toggleFavoriteFilter();
            }}
        >
            <div className={isFavoritedFiltered ? classes.areaClicked : classes.area}>
                Saved Jobs
            <div className={isFavoritedFiltered ? classes.countsClicked : classes.counts}>
                {mounted ? readFavorites().length : "-"}
            </div>
            </div>
        </button>
    </div>
    );
}