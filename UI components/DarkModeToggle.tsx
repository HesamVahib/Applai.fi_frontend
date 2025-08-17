'use client'

import { SunIcon, MoonIcon} from '@heroicons/react/24/solid';
import { useTheme } from '@/context/ThemeContext';

const toggleClass = {
    div: "flex items-center",
    label: "inline-flex items-center cursor-pointer",
    input: "sr-only peer",
    body: "relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600",
    text: "ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
};

export default function Toggle() {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={toggleClass.div}>
            <label className={toggleClass.label}>
                <input 
                    type="checkbox"
                    value=""
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                    className={toggleClass.input} />
                    <div className={toggleClass.body}>
                        <SunIcon className={`absolute left-1 top-1 w-4 h-4 text-yellow-400 transition-all ${theme === 'dark' ? "opacity-100" : "opacity-30"}`} />
                        <MoonIcon className={`absolute right-1 top-1 w-4 h-4 text-blue-300 transition-all ${theme === 'light' ? "opacity-100" : "opacity-30"}`} />
                    </div>
            </label>
        </div>
    );
}
