import Image from "next/image";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section className="skills-page flex flex-col items-center justify-center min-h-screen px-6 pt-32">
      {/* Section Heading */}
      <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
        My Skills
      </h1>
      <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
        Here are some of the technologies I specialize in:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white/70 dark:bg-gray-800/70 shadow-md hover:shadow-lg transition-all backdrop-blur-lg border border-gray-300 dark:border-gray-600 rounded-lg transform hover:scale-105 duration-300"
          >
            {/* Skill Icon */}
            <Image
              src={skill.icon}
              alt={`${skill.name} icon`}
              width={64}
              height={64}
              className="object-contain"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}



  
