"use client";

import { formatDistanceStrict } from "date-fns";
import { ja } from "date-fns/locale";
import { useLocale, useTranslations } from "next-intl";

interface Props {
  from: Date;
}

export default function DynamicTime({ from }: Props) {
  const locale = useLocale();
  const t = useTranslations("Experience");

  return (
    <p>
      <small>
        {t("andCounting", {
          duration: formatDistanceStrict(new Date(), from, {
            unit: "month",
            roundingMethod: "ceil",
            locale: locale === "jp" ? ja : undefined,
          }),
        })}
      </small>
    </p>
  );
}
