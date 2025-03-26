"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="about-page flex flex-col items-center justify-center min-h-screen px-6"
    >
      <div className="w-[85%] max-w-lg text-center bg-white/20 dark:bg-gray-900/40 p-8 rounded-lg shadow-lg backdrop-blur-md border border-gray-300 dark:border-gray-700">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h1>
        <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
          Hi, I&apos;m<span className="font-semibold text-primary">Hadis</span>! I&apos;m a passionate web developer who loves
          creating elegant and user-friendly web applications. My journey
          started with frontend development, and over time, I’ve expanded my
          skills into full-stack development.
        </p>
      </div>
    </motion.section>
  );
}



