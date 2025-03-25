"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative flex items-center justify-center min-h-screen w-full">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
      >
        <Image
          src="/profile2.jpg"
          alt="Hadis Profile Picture"
          width={350}
          height={400}
          className="rounded-full border-4 border-primary shadow-lg object-cover"
        />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
          className="text-5xl font-bold"
        >
          Hi, I'm Hadis
        </motion.h1>
      </motion.div>
    </section>
  );
}
