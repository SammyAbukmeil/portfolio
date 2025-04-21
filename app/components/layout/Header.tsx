"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as motion from "motion/react-client";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="text-center py-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.4,
            duration: 2,
          },
        }}
      >
        <nav>
          <ul className="flex justify-end gap-4 mx-6 mb-4 md:mx-20 list-none">
            <li
              className="hover:cursor-pointer"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Moon className="dark:hidden" />
              <Sun className="hidden dark:block" />
            </li>
          </ul>
        </nav>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.1,
            duration: 2,
          },
        }}
      >
        <h1 className="font-bold text-2xl">Sammy Abukmeil</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 2,
          },
        }}
      >
        <h2 className="pt-2 text-xl">Fullstack Software Engineer</h2>
      </motion.div>
    </header>
  );
}
