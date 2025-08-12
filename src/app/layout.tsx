import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import {ThemeProvider} from "@/components/ThemeProvider";
import {Footer} from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: '%s | Nikolaos Tsaridis',
        default: 'Nikolaos Tsaridis - Software Developer',
    },
    description: 'Personal portfolio of Nikolaos Tsaridis...',
    keywords: ['Software Developer', 'Full-Stack', 'React', 'Next.js', 'Spring Boot', 'Java', 'Python', 'Thessaloniki'],
    openGraph: {
        title: 'Nikolaos Tsaridis - Software Developer',
        description: 'Explore the projects and skills of Nikolaos Tsaridis.',
        images: [
            {
                url: '/projects/website.png',
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Navbar/>
            <main className="flex-grow">{children}</main>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );

}