"use client";

import Experience from "@/app/components/Experience";
import TechStack from "@/app/components/TechStack";
import totallyLogo from "@/app/images/totally-tech.jpeg";
import passionDigitalLogo from "@/app/images/passion-digital.jpeg";
import akaLogo from "@/app/images/aka-logo.jpeg";
import grazeLogo from "@/app/images/graze-logo.jpeg";
import promoveritasLogo from "@/app/images/promoveritas-logo.jpeg";
import brainstationLogo from "@/app/images/brainstation-logo.jpeg";
import konradLogo from "@/app/images/konrad-logo.jpeg";
import { useTranslations } from "next-intl";

export default function ExperienceSection() {
  const t = useTranslations("Experience");
  return (
    <section className="mt-12 px-4 md:px-0 m-auto container">
      <h3 className="font-bold text-2xl">{t('title')}</h3>
      <Experience
        title="Konrad Group"
        role="Senior Software Developer"
        link="https://www.konrad.com"
        date={`Apr '25 - ${t('present')}`}
        logo={konradLogo}
      >
        <p>{t('konrad')}</p>
        <TechStack>
          <ul className="pl-4">
            <li>React / Next.js</li>
            <li>TypeScript</li>
            <li>Node.js / Express</li>
            <li>PostgreSQL</li>
            <li>AWS</li>
          </ul>
        </TechStack>
      </Experience>
      <Experience
        title="BrainStation"
        role="Senior Educator"
        time={t("threeYears")}
        link="https://brainstation.io"
        date="Mar '22 - Apr '25"
        logo={brainstationLogo}
      >
        <p>
          {t('brainstation')}
        </p>
        <TechStack>
          <ul className="pl-4">
            <li>React</li>
            <li>Node.js / Express</li>
            <li>MySQL</li>
          </ul>
        </TechStack>
      </Experience>
      <Experience
        title="PromoVeritas"
        role="Senior Backend Developer"
        time={t("oneYear")}
        link="https://www.promoveritas.com"
        date="Feb '21 - Mar '22"
        logo={promoveritasLogo}
      >
        <p>{t('promoveritas')}</p>
        <TechStack>
          <ul className="pl-4">
            <li>PHP</li>
            <li>Laravel</li>
            <li>AWS</li>
          </ul>
        </TechStack>
      </Experience>
      <Experience
        title="Graze"
        role="Backend Engineer"
        time={t("nineMonths")}
        link="https://www.graze.com"
        date="Mar '20 - Dec '20"
        logo={grazeLogo}
      >
        <p>{t('graze')}</p>
        <TechStack>
          <ul className="pl-4">
            <li>PHP</li>
            <li>PHPUnit</li>
            <li>MySQL</li>
          </ul>
        </TechStack>
      </Experience>
      <Experience
        title="AKA UK"
        role="Full Stack Developer"
        time={t("twoPointFiveYears")}
        link="https://www.akauk.com"
        date="Feb '17 - Mar '20"
        logo={akaLogo}
      >
        <p>{t('akauk')}</p>
        <TechStack>
          <ul className="pl-4">
            <li>PHP</li>
            <li>WordPress</li>
            <li>MySQL</li>
          </ul>
        </TechStack>
      </Experience>
      <Experience
        title="Passion Digital"
        role="Full Stack Developer"
        time={t("sixMonths")}
        link="https://passion.digital"
        date="May '17 - Sept '17"
        logo={passionDigitalLogo}
      >
        <p>{t('passion')}</p>
        <TechStack>
          <ul className="pl-4">
            <li>PHP</li>
            <li>WordPress</li>
            <li>MySQL</li>
          </ul>
        </TechStack>
      </Experience>
      <Experience
        title="Totally Communications Ltd"
        role="Full Stack Developer"
        time={t("twoYears")}
        link="https://totally.tech"
        date="Jun '15 - May '17"
        logo={totallyLogo}
      >
        <p>{t('totally')}</p>
        <TechStack>
          <ul className="pl-4">
            <li>PHP</li>
            <li>Zend</li>
            <li>jQuery</li>
          </ul>
        </TechStack>
      </Experience>
    </section>
  );
}
