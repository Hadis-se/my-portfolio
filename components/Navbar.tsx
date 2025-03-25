"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        <div className="flex items-center space-x-6">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/skills", label: "Skills" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${
                pathname === href
                  ? "text-blue-600 font-semibold" // Active page color
                  : "text-gray-800 dark:text-gray-300"
              } hover:text-blue-500 transition-colors`}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="mailto:sedaghat.hadis@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            title="Email Me"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
          </a>

          <a
            href="https://github.com/Hadis-se?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            title="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/hadis-sedaghat/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
