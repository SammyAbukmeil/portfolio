import Image from "next/image";
import headshot from "@/app/images/headshot.jpg";
import { Github, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import JLPTBadge from "@/app/components/JLPTBadge";

export default function Hero() {
  const t = useTranslations("HomePage");

  return (
    <section className="m-auto max-w-3xs md:max-w-md">
      <Image
        className="m-auto mb-6 rounded-4xl"
        src={headshot}
        width={200}
        height={200}
        alt="A photo of Sammy"
      />
      <p className="text-center">
        {t('hero.intro')}{" "}
        <span className="underline underline-offset-2 decoration-primary">
          {t('hero.intro2')}
        </span>
        {t('hero.intro3')}{" "}
        <span className="underline underline-offset-2 decoration-primary">
          {t('hero.intro4')}
        </span>{" "}
        {t('hero.intro5')}{" "}
        <span className="underline underline-offset-2 decoration-primary">
          {t('hero.intro6')}
        </span>
      </p>
      <div className="flex justify-center mt-4">
        <JLPTBadge />
      </div>
      <div className="flex justify-center mt-6 gap-3">
        <a href="https://github.com/SammyAbukmeil" target="_blank">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/sammyabukmeil/" target="_blank">
          <Linkedin />
        </a>
      </div>
    </section>
  );
}
