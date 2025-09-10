// navbar.tsx
"use client";

import Link from 'next/link';
import {useEffect, useState} from 'react';
import NavLinks from "@/components/navlinks";
import Image from 'next/image';
import ThemeToggleButton from "@/components/ThemeToggleButton";
import {useTheme} from "next-themes";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <div className="w-24 h-24" />;
    }

    return (
        <nav className="bg-[var(--background)]/95 border-b border-[var(--secondary)]
                    backdrop-blur-sm transition-all duration-300 ease-in-out
                    sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden
                          border border-[var(--secondary)] transition-all duration-300
                          group-hover:scale-105 group-hover:shadow-lg">
                            <Image
                                src={theme === "dark" ? "/icons/logo-dark-mode.svg" : "/icons/logo-light-mode.svg"}
                                alt="Logo"
                                fill
                                className="object-cover transition-all duration-300
                         group-hover:brightness-110"
                            />
                        </div>
                        <span className="font-bold text-lg text-[var(--foreground)]
                           transition-colors duration-300">
            </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <NavLinks />
                    </div>

                    {/* Theme Toggle + Mobile Menu Button */}
                    <div className="flex items-center space-x-2">
                        <ThemeToggleButton />

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden inline-flex items-center justify-center p-2
                       rounded-lg text-[var(--foreground)]
                       hover:bg-[var(--secondary)]
                       focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
                       transition-all duration-300 ease-in-out
                       active:scale-95"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6 transition-transform duration-300 rotate-90"
                                     fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6 transition-transform duration-300"
                                     fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${
                isOpen
                    ? 'max-h-96 opacity-100 visible'
                    : 'max-h-0 opacity-0 invisible overflow-hidden'
            }`}>
                <div className="px-4 pt-2 pb-4 space-y-1 bg-[var(--background)]/98
                      border-t border-[var(--secondary)] backdrop-blur-sm">
                    <div onClick={() => setIsOpen(false)}>
                        <NavLinks />
                    </div>
                </div>
            </div>
        </nav>
    );
}
