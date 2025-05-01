"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

interface Props {
  isBlog: boolean;
}

export default function Header({ isBlog }: Props) {
  const { theme, setTheme } = useTheme();

  const activeClasses =
    "decoration-solid underline decoration-primary underline-offset-4 hover:underline-offset-6 transition-all decoration-2";
  const hoverClasses =
    "hover:decoration-solid hover:underline hover:t decoration-primary underline-offset-4 transition-all decoration-2";

  return (
    <header className="text-center py-6">
      <nav className="mb-10">
        <ul className="flex justify-end gap-4 mx-6 mb-4 md:mx-20 list-none">
          <li>
            <Link href="/" className={isBlog ? hoverClasses : activeClasses}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={isBlog ? activeClasses : hoverClasses}
            >
              Blog
            </Link>
          </li>
          <li
            className="hover:cursor-pointer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Moon className="dark:hidden" />
            <Sun className="hidden dark:block" />
          </li>
        </ul>
      </nav>
      {!isBlog && (
        <>
          <h1 className="font-bold text-2xl">Sammy Abukmeil</h1>
          <h2 className="pt-2 text-xl">Fullstack Software Engineer</h2>
        </>
      )}
    </header>
  );
}
