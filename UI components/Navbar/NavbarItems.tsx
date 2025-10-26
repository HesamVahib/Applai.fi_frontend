'use client'

import Link from "next/link";
import Toggle from "../DarkModeToggle";
import LoginButton from "@/functions/LoginButton";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { usePathname } from "next/navigation";


export default function NavbarItems() {
  const [ isOpen, setIsOpen ] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Statistics", href: "/statistics" },
    { label: "Contact us", href: "/contact" },
    { label: "About us", href: "/about" },
  ];

  const pathname = usePathname();

  return (
    <>
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-white" />
          )}
        </button>
      </div>
      <ul className="flex space-x-4">
        <div className="hidden md:flex md:space-x-4">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item">
                <Link href={item.href} className={`text-[var(--color-gray)] dark:text-[var(--color-dark-gray)] hover:text-blue-300 ${pathname === item.href ? "font-bold opacity-100" : "opacity-70"} font-[var(--font-athiti)]`}>
                  {item.label}
                </Link>
                <div className={pathname === item.href ? "w-1.5 h-1.5 bg-[var(--color-gray)] rounded-full mx-auto mt-0.5" : ""}></div>
            </li>
            ))}
        </div>
        <div>
          <Toggle />
        </div>
        <div>
          <li>
            <LoginButton />
          </li>
        </div>
      </ul>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 md:hidden z-50 text-center">
          <ul className="flex flex-col py-2">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item">
                <Link 
                  href={item.href} 
                  className="block px-4 py-2 text-white hover:text-blue-300 hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
