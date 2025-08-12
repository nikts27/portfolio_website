// src/components/Footer.tsx
export function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">
                    © {new Date().getFullYear()} Nikolaos Tsaridis. All Rights Reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a href="https://www.linkedin.com/in/ntsaridis/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                        Connect with me
                    </a>
                </div>
            </div>
        </footer>
    );
}