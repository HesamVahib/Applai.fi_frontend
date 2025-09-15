'use client'

import Link from "next/link";
import Toggle from "../DarkModeToggle";
import Button from "../Button";
import loginButton from "@/functions/loginButton";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function NavbarItems() {
  const [ isOpen, setIsOpen ] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    // { label: "Contact", href: "/contact" },
    { label: "Statistics", href: "/statistics" }
  ];

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
      <ul className="flex justify-end space-x-4">
        <div className="hidden md:flex md:space-x-4">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item">
                <Link href={item.href} className="text-white hover:text-blue-300">
                  {item.label}
                </Link>
            </li>
            ))}
        </div>
        <div>
          <Toggle />
        </div>
        {/* <div>
          <li>
            <Button className="h-full mr-2 " onClick={loginButton}>
              Login/Sign Up
            </Button>
          </li>
        </div> */}
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
