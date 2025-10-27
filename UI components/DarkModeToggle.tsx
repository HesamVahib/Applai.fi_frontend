'use client'

import { SunIcon} from '@heroicons/react/24/solid';
import { MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react';

const toggleClass = {
    div: "flex items-center",
    label: "inline-flex items-center cursor-pointer",
    input: "sr-only peer",
    body: "relative w-8 h-8 peer-focus:outline-none rounded-lg bg-[var(--color-background2)] dark:bg-[var(--color-background2)] peer-checked:bg-[var(--color-background2)] dark:peer-checked:bg-[var(--color-dark-gray)] transition-all flex items-center justify-center",
    text: "ms-3 text-sm font-medium text-gray-900 dark:text-gray-300",
    sunIconClass: "absolute w-3.5 h-3.5 text-yellow-400 transition-all",
    moonIconClass: "absolute w-3.5 h-3.5 transition-all",
};

export default function Toggle() {

    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <div className={toggleClass.div}>
            <label className={toggleClass.label}>
                <input 
                    type=""
                    value=""
                    checked={resolvedTheme === 'dark'}
                    onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                    className={toggleClass.input} />
                    <div className={toggleClass.body}>
                        <SunIcon className={toggleClass.sunIconClass} />
                        <MoonIcon className={toggleClass.moonIconClass} />
                    </div>
            </label>
        </div>
        )
    }

    // console.log("Current theme:", resolvedTheme);

    return (
        <div className={toggleClass.div}>
            <label className={toggleClass.label}>
                <input 
                    type="checkbox"
                    value=""
                    checked={resolvedTheme === 'dark'}
                    onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                    className={toggleClass.input} />
                    <div className={toggleClass.body}>
                        <SunIcon className={`${toggleClass.sunIconClass} ${resolvedTheme === 'dark' ? "opacity-100" : "opacity-10"}`} />
                        <MoonIcon className={`${toggleClass.moonIconClass} ${resolvedTheme === 'light' ? "opacity-100" : "opacity-10"}`} />
                    </div>
            </label>
        </div>
    );
}
