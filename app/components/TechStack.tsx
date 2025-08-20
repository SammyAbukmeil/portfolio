import { ReactNode } from "react";
import { useTranslations } from "next-intl";

interface Props {
  children: ReactNode;
}

export default function TechStack({ children }: Props) {
  const t = useTranslations("Project");
  
  return (
    <section className="tech-stack my-4">
      <h4 className="font-bold mb-2">{t("techStack")}</h4>
      {children}
    </section>
  );
}
