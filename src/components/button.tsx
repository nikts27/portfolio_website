// src/components/Button.tsx
import clsx from 'clsx';
import Link from 'next/link';
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    href?: string;
    download?: string;
    target?: string;
}

export function Button({children, className, variant = 'primary',
                           href, download, target, ...rest}: ButtonProps) {

    const baseClasses = `
    flex items-center justify-center font-semibold py-3 px-6 rounded-lg
    transition-all duration-300 ease-in-out
    hover:scale-105 hover:shadow-lg
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    focus:outline-none focus:ring-2 focus:ring-offset-2
    active:scale-95
  `;

    const variantClasses: Record<'primary' | 'secondary', string> = {
        primary: `
      bg-[var(--primary)] text-white 
      hover:opacity-90
      shadow-md hover:shadow-xl
      focus:ring-blue-500
    `,
        secondary: `
      border-2 border-[var(--foreground)] text-[var(--foreground)] 
      bg-transparent
      hover:bg-[var(--secondary)]
      focus:ring-gray-500
    `,
    };

    const combinedClasses = clsx(
        baseClasses,
        variantClasses[variant],
        className
    );

    if (href) {
        return (
            <Link
                href={href}
                className={combinedClasses}
                download={download}
                target={target}
            >
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClasses} {...rest}>
            {children}
        </button>
    );
}
