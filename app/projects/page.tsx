"use client";

import { projects } from "../../data/projects";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="projects-page bg-gray-50 dark:bg-gray-900 px-6 py-28">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-20">
        Featured Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-x-24 gap-y-24 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="w-full md:w-[45%] bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transition-transform hover:scale-105 duration-300"
          >
            <div className="w-full h-64 relative">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-6">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 "
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  View Project →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
