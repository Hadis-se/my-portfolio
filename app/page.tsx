"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 w-full">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-primary shadow-lg overflow-hidden">
          <Image
            src="/profile2.jpg"
            alt="Hadis Profile Picture"
            width={200}
            height={200}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
        >
          Hi, I&apos;m Hadis
        </motion.h1>

        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg max-w-xl">
          A passionate full-stack developer creating modern, user-friendly web
          applications with Next.js, Tailwind, and more.
        </p>
      </motion.div>
    </section>
  );
}
