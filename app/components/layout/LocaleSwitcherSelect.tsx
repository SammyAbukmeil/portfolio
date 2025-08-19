"use client";

import { useParams } from "next/navigation";
import { Locale, useTranslations } from "next-intl";
import { ReactNode, useTransition, useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { ChevronDown, Languages } from "lucide-react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const t = useTranslations('LocaleSwitcher');
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const dropdownRef = useRef<HTMLDivElement>(null);

  function onLocaleSelect(locale: Locale) {
    setIsOpen(false);
    
    // Preserve theme during navigation to prevent flash
    const currentTheme = localStorage.getItem('theme');
    const isDark = document.documentElement.classList.contains('dark');
    
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale }
      );
      
      // Reapply theme immediately after navigation starts
      setTimeout(() => {
        if (currentTheme) {
          localStorage.setItem('theme', currentTheme);
        }
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, 0);
    });
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div 
      ref={dropdownRef}
      className="relative mr-2 hover:cursor-pointer"
    >
      <span className="sr-only">{label}</span>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex hover:cursor-pointer items-center gap-1 hover:text-[#6EAA8B] transition-colors duration-200 focus:outline-none focus:text-[#6EAA8B]"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={label}
      >
        <Languages />
        <span className="font-medium min-w-[53px]">{t('locale', { locale: defaultValue })}</span>
        <ChevronDown 
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`} 
        />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full mt-1 right-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg min-w-[120px] z-50 transform transition-all duration-200 ease-out"
          role="listbox"
        >
          <div className="py-1">
            {Array.isArray(children) 
              ? children.map((child: any) => {
                  if (child?.props?.value) {
                    return (
                      <button
                        key={child.props.value}
                        onClick={() => onLocaleSelect(child.props.value)}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-[#6EAA8B] hover:text-white transition-colors duration-150 focus:outline-none"
                        role="option"
                        aria-selected={child.props.value === defaultValue}
                      >
                        {child.props.children}
                      </button>
                    );
                  }
                  return null;
                })
              : children}
          </div>
        </div>
      )}
    </div>
  );
}
