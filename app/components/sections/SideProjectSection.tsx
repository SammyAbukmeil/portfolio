"use client";

import Project from "@/app/components/Project";
import Links from "@/app/components/Links";
import TechStack from "@/app/components/TechStack";
import minoImg from "@/app/images/mino.png";
import kobeYachtClubImg from "@/app/images/the-kobe-yacht-club.png";
import aerialinkImg from "@/app/images/aerialink.png";
import holmesImg from "@/app/images/holmes.png";
import biaBakesImg from "@/app/images/bia-bakes.png";
import { useTranslations } from "next-intl";

export default function SideProjectSection() {
  const t = useTranslations("SideProjects");
  return (
    <section className="mt-12 px-4 md:px-0 m-auto container">
      <h3 className="font-bold text-2xl">{t('title')}</h3>
      <Project
        title="The Kobe Yacht Club"
        isLive={true}
        img={kobeYachtClubImg}
        summary={<p>{t('kobeYachtClub.description1')}</p>}
      >
        <p>
          {t('kobeYachtClub.description2')}
        </p>
        <TechStack>
          <ul className="pl-4">
            <li>WordPress</li>
            <li>PHP (custom child theme)</li>
            <li>Ultimate Member</li>
            <li>Bold Page Builder</li>
            <li>ConoHa WING (hosting)</li>
          </ul>
        </TechStack>
        <Links>
          <ul className="pl-4">
            <li>
              <a
                className="underline underline-offset-4 decoration-primary hover:underline-offset-6 transition-all"
                target="_blank"
                href="https://kobeyachtclub.jp"
              >
                {t('links.website')}
              </a>
            </li>
          </ul>
        </Links>
      </Project>
      <Project
        title="Aerialink"
        isLive={true}
        img={aerialinkImg}
        summary={<p>{t('aerialink.description1')}</p>}
      >
        <p>
          {t('aerialink.description2')}
        </p>
        <TechStack>
          <ul className="pl-4">
            <li>Ruby on Rails</li>
            <li>React</li>
            <li>Cloudflare</li>
            <li>GitHub Actions</li>
          </ul>
        </TechStack>
        <Links>
          <ul className="pl-4">
            <li>
              <a
                className="underline underline-offset-4 decoration-primary hover:underline-offset-6 transition-all"
                target="_blank"
                href="https://aerialinkshop.jp"
              >
                {t('links.website')}
              </a>
            </li>
          </ul>
        </Links>
      </Project>
      <Project
        title="Mino"
        isLive={true}
        img={minoImg}
        summary={<p>{t('mino.description1')}</p>}
      >
        <p>
          {t('mino.description2')}
        </p>
        <TechStack>
          <ul className="pl-4">
            <li>React Native</li>
            <li>
              Firebase
              <ul className="pl-6">
                <li>Auth</li>
                <li>Storage</li>
                <li>Firestore</li>
              </ul>
            </li>
            <li>Expo Speech</li>
          </ul>
        </TechStack>
        <Links>
          <ul className="pl-4">
            <li>
              <a
                className="underline underline-offset-4 decoration-primary hover:underline-offset-6 transition-all"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.minoSpeak&pli=1"
              >
                {t('links.googlePlay')}
              </a>
            </li>
            <li>
              <a
                className="underline underline-offset-4 decoration-primary hover:underline-offset-6 transition-all"
                target="_blank"
                href="https://apps.apple.com/gb/app/mino-speak/id6449201524"
              >
                {t('links.appleStore')}
              </a>
            </li>
          </ul>
        </Links>
      </Project>
      <Project
        title="Holmes"
        isLive={false}
        img={holmesImg}
        summary={<p>{t('holmes.description1')}</p>}
      >
        <p>
          {t('holmes.description2')}{" "}
          <a
            className="underline underline-offset-4 decoration-primary hover:underline-offset-6 transition-all"
            target="_blank"
            href="https://www.premonday.com"
          >
            Premonday
          </a>
        </p>
        <TechStack>
          <ul className="pl-4">
            <li>React</li>
            <li>
              Firebase
              <ul className="pl-6">
                <li>Auth</li>
                <li>Storage</li>
                <li>Realtime Database</li>
              </ul>
            </li>
            <li>Tailwind</li>
          </ul>
        </TechStack>
        <Links>
          <ul className="pl-4">
            <li>
              <a
                className="underline underline-offset-4 decoration-primary hover:underline-offset-6 transition-all"
                target="_blank"
                href="https://holmes-app.com"
              >
                {t('links.website')}
              </a>
            </li>
          </ul>
        </Links>
      </Project>
      <Project
        title="Bia Bakes"
        isLive={false}
        img={biaBakesImg}
        summary={<p>{t('biaBakes.description1')}</p>}
      >
        <p>
          {t('biaBakes.description2')}
        </p>
        <p className="mt-4">
          {t('biaBakes.description3')}{" "}
          <a
            className="underline underline-offset-4 decoration-primary hover:underline-offset-6 transition-all"
            target="_blank"
            href="https://www.premonday.com"
          >
            Premonday
          </a>
        </p>
        <TechStack>
          <ul className="pl-4">
            <li>WordPress</li>
            <li>
              AWS
              <ul className="pl-6">
                <li>EC2</li>
                <li>RDS</li>
              </ul>
            </li>
          </ul>
        </TechStack>
      </Project>
    </section>
  );
}
