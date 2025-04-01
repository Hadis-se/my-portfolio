"use client";

import Image from "next/image";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section className="skills-page flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 pt-32 bg-gradient-to-br from-green-100 to-blue-200 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        My Skills
      </h1>
      <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 text-center">
        Here are some of the technologies I specialize in.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-gray-900 shadow-md rounded-lg p-4 border border-gray-300 dark:border-gray-700 transition-transform hover:scale-110 duration-300"
          >
            <Image
              src={skill.icon}
              alt={`${skill.name} icon`}
              width={64}
              height={64}
              className="object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
