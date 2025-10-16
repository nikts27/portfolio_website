import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Χρησιμοποιούμε τα CSS variables που ορίσαμε στο globals.css
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                border: "var(--border)",
            },
            // Προσθέτουμε custom animations
            keyframes: {
                // Ένα απαλό "fade-in & slide-up" animation
                "fade-in-up": {
                    'from': { opacity: '0', transform: 'translateY(10px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                // Ένα "glow" effect για τις κάρτες
                "glow": {
                    '0%': { boxShadow: '0 0 5px var(--primary)' },
                    '50%': { boxShadow: '0 0 20px 5px var(--primary)' },
                    '100%': { boxShadow: '0 0 5px var(--primary)' },
                },
            },
            animation: {
                // Δίνουμε ονόματα στα animations μας για να τα καλούμε εύκολα
                'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
                'glow': 'glow 2s ease-in-out infinite',
            },
            // Προσθέτουμε ένα gradient για τον τίτλο
            backgroundImage: {
                'primary-gradient': 'var(--primary-gradient)',
            }
        },
    },
    plugins: [],
};

export default config;