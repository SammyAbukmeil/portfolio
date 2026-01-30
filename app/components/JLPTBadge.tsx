"use client";

import React from "react";
import { useTranslations } from "next-intl";

type Props = {
  level?: string;
  className?: string;
  showTooltip?: boolean;
};

export default function JLPTBadge({ level = "N5", className = "", showTooltip = true }: Props) {
  const t = useTranslations("Badges.JLPTN5");
  const tooltipId = "jlpt-tooltip";

  const tooltipText = t("tooltip");
  const lines = tooltipText ? tooltipText.split(/\r?\n/) : [];

  return (
    <div className={`relative inline-block group ${className}`}>
      <button
        type="button"
        className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-md bg-primary/10 text-primary focus:outline-none focus:ring-2 focus:ring-primary"
        aria-describedby={showTooltip ? tooltipId : undefined}
      >
        <span className="font-semibold">JLPT {level}</span>
      </button>

      {showTooltip && (
        <div
          id={tooltipId}
          role="tooltip"
          className="pointer-events-none absolute left-1/2 z-50 w-64 -translate-x-1/2 rounded-md bg-neutral-900 px-3 py-2 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
        >
          {lines.length > 0
            ? lines.map((line, i) => (
                <p key={i} className={i === 0 ? "" : "mt-1"}>
                  {line}
                </p>
              ))
            : tooltipText}
        </div>
      )}
    </div>
  );
}
