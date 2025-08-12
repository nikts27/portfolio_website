'use client'

import Image from "next/image";
import {motion} from "framer-motion";
import {useEffect} from "react";
import {Button} from "@/components/button";

export default function Home() {
  useEffect(() => {
    document.title = 'Home | Nikolaos Tsaridis';
  }, []);

  return (
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl text-left p-8">

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
          >
            <Image
                src="/personalpic.jpg"
                alt="My personal photo"
                width={200}
                height={200}
                className="rounded-full"
            />
          </motion.div>

          <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter"
          >
            Nikolaos Tsaridis
          </motion.h1>

          <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl md:text-2xl text-gray-600 max-w-2xl"
          >
            Final-year Computer Science student passionate about software, frontend
            development and AI applications, based in Thessaloniki. Excited to start my
            professional journey.
          </motion.p>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 flex items-center space-x-6"
          >
            <Button
                href="https://www.linkedin.com/in/ntsaridis/"
                variant="primary"
            >
              Connect with me in
              <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn button"
                  height={20}
                  width={20}
              />
              →
            </Button>

            <Button
                href="/CV-NIKOLAOS-TSARIDIS.pdf"
                variant="secondary"
                download="CV-Nikolaos-Tsaridis.pdf"
            >
              <div className="flex items-center justify-between gap-2">
                Download my CV
                <Image
                    src="/downloadbutton.webp"
                    alt="Download button"
                    height={20}
                    width={20}
                />
              </div>
            </Button>
          </motion.div>
        </div>
      </div>
  );
}

