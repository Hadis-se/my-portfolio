"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="about-page flex flex-col items-center justify-center min-h-screen px-6 py-16"
    >
      <div className="w-full max-w-2xl text-center bg-white/30 dark:bg-gray-900/50 p-8 rounded-lg shadow-xl backdrop-blur-md border border-gray-300 dark:border-gray-700">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 leading-relaxed">
          Hi, I&apos;m <span className="font-semibold text-primary">Hadis</span>
          , a passionate **full-stack web developer** with a deep love for
          crafting elegant and high-performance web applications. My journey
          began with frontend development, where I mastered technologies like
          **React, Next.js, and Tailwind CSS**. Over time, I expanded my
          expertise into **backend development**, working with **Node.js,
          Nest.js, Prisma, and MySQL** to build scalable and secure
          applications.
          <br />
          <br />
          I thrive on solving complex problems and bringing ideas to life
          through **clean code, thoughtful design, and a seamless user
          experience**. Whether it&apos;s building **dynamic dashboards, mobile
          applications, or AI-powered tools**, I enjoy learning and adapting to
          new technologies to improve my craft.
          <br />
          <br />
          When I&apos;m not coding, I love **exploring new tech trends, writing
          technical blogs, and contributing to open-source projects**. My goal
          is to create impactful software solutions that **enhance people&apos;s
          lives and businesses**.
        </p>
      </div>
    </motion.section>
  );
}
