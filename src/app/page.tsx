'use client'

import Image from "next/image";
import {motion} from "framer-motion";
import {Button} from "@/components/button";

export default function Home() {
  return (
      <div className="min-h-screen flex items-center justify-center">
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
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.1}}
              className="mt-8 text-6xl md:text-8xl font-bold text-[var(--foreground)] tracking-tighter
             transition-colors duration-300 ease-in-out"
          >
            Nikolaos Tsaridis
          </motion.h1>

          <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.2}}
              className="mt-6 text-xl md:text-2xl text-[var(--foreground)]/70 max-w-2xl
             transition-colors duration-300 ease-in-out"
          >
            Recently graduated Computer Science student passionate about software, frontend
            development and AI applications, based in Thessaloniki. Excited to start my
            professional journey.
          </motion.p>

          <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.3}}
              className="mt-12 flex items-center space-x-6"
          >
            <Button
                href="/projects"
                variant="primary"
            >
              See my work
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

