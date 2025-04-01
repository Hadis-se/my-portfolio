"use client";

import { projects } from "../../data/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="projects-page min-h-screen pt-24 pb-24 px-6 bg-gray-50 dark:bg-gray-900">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">
        Featured Projects
      </h1>

      {/* Project Grid - Responsive Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-transform transform hover:scale-105 duration-300"
          >
            {/* Project Image */}
            <div className="relative w-full h-64">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>

            {/* Project Content */}
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* View Project Button */}
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
          </div>
        ))}
      </div>
    </section>
  );
}
