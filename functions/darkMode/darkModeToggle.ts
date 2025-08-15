'use client'

// import { createContext, useContext, useState, ReactNode } from "react";

// type ThemeContextType = {
//     isDarkMode: boolean;
//     toggleDarkMode: () => void;
// };

// const ThemeContext = createContext<ThemeContextType>({
//     isDarkMode: false,
//     toggleDarkMode: () => {}
// });

export default function darkModeToggle({ check }: { check: boolean }) {
    console.log("Dark mode toggle clicked");
}
