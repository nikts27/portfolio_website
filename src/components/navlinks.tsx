// navlinks.tsx
'use client'

import {
    HomeIcon,
    BriefcaseIcon,
    UserIcon,
    EnvelopeIcon,
} from '@heroicons/react/24/outline';
import {
    HomeIcon as HomeIconSolid,
    BriefcaseIcon as BriefcaseIconSolid,
    UserIcon as UserIconSolid,
    EnvelopeIcon as EnvelopeIconSolid,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
    { name: 'Home', href: '/', icon: HomeIcon, solidIcon: HomeIconSolid },
    { name: 'About', href: '/about', icon: UserIcon, solidIcon: UserIconSolid },
    { name: 'Projects', href: '/projects', icon: BriefcaseIcon, solidIcon: BriefcaseIconSolid },
    { name: 'Contact', href: '/contact', icon: EnvelopeIcon, solidIcon: EnvelopeIconSolid }
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                const isActive = pathname === link.href;
                const LinkIcon = isActive ? link.solidIcon : link.icon;

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            `flex items-center gap-2 px-4 py-2 rounded-lg font-medium
               transition-all duration-300 ease-in-out
               hover:scale-105 active:scale-95
               focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2
               group relative overflow-hidden`,
                            {
                                // Active state
                                'bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/25': isActive,
                                // Inactive state
                                'text-[var(--foreground)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)]': !isActive,
                            }
                        )}
                    >
                        {/* Background gradient effect για active state */}
                        {isActive && (
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-blue-400
                            opacity-100 transition-opacity duration-300" />
                        )}

                        {/* Hover effect background */}
                        <div className="absolute inset-0 bg-[var(--secondary)] opacity-0
                          group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Content */}
                        <div className="relative z-10 flex items-center gap-2">
                            <LinkIcon
                                className={clsx(
                                    "h-5 w-5 transition-all duration-300",
                                    {
                                        "text-white": isActive,
                                        "text-[var(--foreground)] group-hover:text-[var(--primary)]": !isActive,
                                    }
                                )}
                            />
                            <span className={clsx(
                                "transition-all duration-300 font-medium",
                                {
                                    "text-white": isActive,
                                    "text-[var(--foreground)]": !isActive,
                                }
                            )}>
                {link.name}
              </span>
                        </div>

                        {/* Active indicator */}
                        {isActive && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5
                            bg-white/50 transition-all duration-300" />
                        )}
                    </Link>
                );
            })}
        </>
    );
}
