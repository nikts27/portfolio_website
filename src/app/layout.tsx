import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import {ThemeProvider} from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
    description: 'Personal portfolio of Nikolaos Tsaridis, a software developer specializing in full-stack applications with React, Next.js, Spring Boot, and Python.'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
            <Navbar/>
            <main>{children}</main>
        </ThemeProvider>
        </body>
        </html>
    );
}