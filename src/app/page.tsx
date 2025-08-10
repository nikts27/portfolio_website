import {Metadata} from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl text-left p-8">
          
          <Image
              src="/personalpic.jpg"
              alt="My personal photo"
              width={200}
              height={200}
          />

          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter">
            Nikolaos Tsaridis
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-2xl">
            Final-year Computer Science student passionate about software, frontend
            development and AI applications, based in Thessaloniki. Excited to start my
            professional journey.
          </p>

          <div className="mt-10 flex items-center space-x-6">
            <a
                href="https://www.linkedin.com/in/ntsaridis/"
                className="bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Connect with me in LinkedIn →
            </a>
            <a
                href="/CV-NIKOLAOS-TSARIDIS.pdf" // Η διαδρομή προς το αρχείο στο public folder
                download="CV-Nikolaos-Tsaridis.pdf" // Αυτό λέει στον browser να κατεβάσει το αρχείο
                className="border border-gray-900 text-gray-900 dark:border-white dark:text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center justify-between">
                Download my CV
                <Image
                    src="/downloadbutton.webp"
                    alt="Download button"
                    height={20}
                    width={20}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
  );
}
