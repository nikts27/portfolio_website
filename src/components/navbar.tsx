"use client";

import Link from 'next/link';
import { useState } from 'react';
import NavLinks from "@/components/navlinks";
import Image from 'next/image';
import ThemeToggleButton from "@/components/ThemeToggleButton";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
                        >
                            <Image
                                src="/icons/logo.svg"
                                alt="Nikolaos Tsaridis Logo"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-2">
                        <NavLinks />
                        <ThemeToggleButton />
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div
                        className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                        onClick={() => setIsOpen(false)}
                    >
                        <NavLinks />
                    </div>
                </div>
            )}
        </nav>
    );
}
