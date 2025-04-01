"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex items-center justify-center min-h-screen w-full px-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center space-y-6"
      >
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-4 border-primary shadow-lg overflow-hidden">
          <Image
            src="/profile2.jpg"
            alt="Hadis Profile Picture"
            width={224}
            height={224}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
        >
          Hi, I&apos;m Hadis
        </motion.h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl max-w-lg">
          A passionate web developer creating modern, responsive applications.
        </p>
      </motion.div>
    </section>
  );
}
