// src/components/Button.tsx
import clsx from 'clsx';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    href?: string;
}

export function Button({ children, className, variant = 'primary', href, ...rest }: ButtonProps) {
    const baseClasses = 'flex items-center justify-center font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg disabled:opacity-50';

    const variantClasses = {
        primary: 'bg-gray-900 text-white hover:bg-gray-700',
        secondary: 'border border-gray-900 text-gray-900 dark:border-white dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800',
    };

    const combinedClasses = clsx(
        baseClasses,
        variantClasses[variant],
        className
    );

    if (href) {
        return (
            <Link href={href} className={combinedClasses} {...(rest as any)}>
                {children}
            </Link>
        );
    }

    return (
        <button
            {...rest}
            className={combinedClasses}
        >
            {children}
        </button>
    );
}