"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="text-center py-6">
      <nav>
        <ul className="flex justify-end gap-4 mx-6 mb-4 md:mx-20 list-none">
          {/* <li>
            <a
              className="decoration-solid underline decoration-primary underline-offset-4 hover:underline-offset-6 transition-all decoration-2"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a href="">Blog</a>
          </li> */}
          <li
            className="hover:cursor-pointer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Moon className="dark:hidden" />
            <Sun className="hidden dark:block" />
          </li>
        </ul>
      </nav>
      <h1 className="font-bold text-2xl">Sammy Abukmeil</h1>
      <h2 className="pt-2 text-xl">Fullstack Software Engineer</h2>
    </header>
  );
}
