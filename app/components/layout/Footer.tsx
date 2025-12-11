"use client";

import { Github, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  
  return (
    <footer className="text-center my-10">
      <div className="flex justify-center gap-4 mb-4">
        <a
          href="https://github.com/SammyAbukmeil"
          target="_blank"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/sammyabukmeil/"
          target="_blank"
        >
          <Linkedin />
        </a>
      </div>
      <p className="text-sm text-gray-400">© {new Date().getFullYear()} {t('copyright')}</p>
    </footer>
  );
}
