// 'use client'

// import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
// import { ThemeContextType, Theme } from '@/lib/types';

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const ThemeProvider = ({ children }: { children: ReactNode }) => {
//     const [theme, setTheme] = useState<Theme>('light');

//     useEffect (() => {
//         const savedTheme = localStorage.getItem('theme') as Theme;

//         if (savedTheme)
//             setTheme(savedTheme);
//     },[])

//     const toggleTheme = () => {
//         const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
//         setTheme(newTheme);
//         localStorage.setItem('theme', newTheme);
//     }

//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             <div>
//                 {children}
//             </div>
//         </ThemeContext.Provider>
//     );
// }

// export const useTheme = () => {
//     const context = useContext(ThemeContext);
//     if (!context) {
//         throw new Error("useTheme must be used within a ThemeProvider");
//     }
//     return context;
// }

// export const currentTheme = () => {
//     const { theme } = useTheme();
//     return theme;
// }