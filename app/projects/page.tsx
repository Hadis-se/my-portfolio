"use client";

import { projects } from "../../data/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="projects-page min-h-screen pt-24 pb-24 px-6 bg-white">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
        Featured Projects
      </h1>

      {/* Project Grid - Two Columns on Large Screens, One on Small */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Project Image */}
            <div className="relative w-full h-64">
              <Image
                src={project.image}
                alt={project.title}
                // layout="fill"
                width={600}
                height={400}
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* View Project Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:text-blue-800 transition no-underline"
                style={{ textDecoration: "none", color: "#000" }}
              >
                See More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
