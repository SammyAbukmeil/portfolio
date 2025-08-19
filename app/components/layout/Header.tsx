"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";

interface Props {
  isBlog: boolean;
}

export default function Header({ isBlog }: Props) {
  const { theme, setTheme } = useTheme();
  const tNav = useTranslations("Navigation");
  const t = useTranslations("HomePage");

  const activeClasses =
    "decoration-solid underline decoration-primary underline-offset-6 hover:underline-offset-6 transition-all decoration-2";
  const hoverClasses =
    "hover:decoration-solid hover:underline hover:t decoration-primary underline-offset-4 transition-all decoration-2";

  return (
    <header className="text-center py-6">
      <nav className={`${!isBlog ? "mb-10" : ""}`}>
        <div className="flex justify-between items-center mx-6 mb-4 md:mx-20">
          <ul className="flex gap-4 list-none">
            <li>
              <Link href="/" className={isBlog ? hoverClasses : activeClasses}>
                {tNav('home')}
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={isBlog ? activeClasses : hoverClasses}
              >
                {tNav('blog')}
              </Link>
            </li>
          </ul>
          <ul className="flex gap-4 list-none">
            <li>
              <LocaleSwitcher />
            </li>
            <li
              className="hover:cursor-pointer hover:text-[#6EAA8B] transition-all duration-200 ease-out"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Moon className="dark:hidden" />
              <Sun className="hidden dark:block" />
            </li>
          </ul>
        </div>
      </nav>
      {!isBlog && (
        <>
          <h1 className="font-bold text-2xl">{t('hero.title')}</h1>
          <h2 className="pt-2 text-xl">{t('hero.subtitle')}</h2>
        </>
      )}
    </header>
  );
}
