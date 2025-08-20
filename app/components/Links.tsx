import { ReactNode } from "react";
import { useTranslations } from "next-intl";

interface Props {
  children: ReactNode;
}

export default function Links({ children }: Props) {
  const t = useTranslations("Project");
  
  return (
    <section className="links mt-4">
      <h4 className="font-bold">{t("links")}</h4>
      {children}
    </section>
  );
}
