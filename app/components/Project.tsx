import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

interface Props {
  children: ReactNode;
  summary: ReactNode;
  title: string;
  isLive: boolean;
  img: StaticImageData;
}

export default function Project({
  children,
  summary,
  title,
  isLive,
  img,
}: Props) {
  const t = useTranslations("Project");
  const pillClasses = "p-1.5 rounded-2xl text-xs text-white";

  return (
    <article className="my-6">
      <details className="group">
        <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          <div className="flex items-center">
            <img
              src={img.src}
              alt={`A screenshot of ${title}`}
              className="w-8 aspect-square object-cover object-top mr-2 rounded-full"
            />
            <h4 className="font-bold text-xl mr-2">{title}</h4>
            {isLive ? (
              <span className={`bg-primary ${pillClasses}`}>{t("live")}</span>
            ) : (
              <span className={`bg-red-400 ${pillClasses}`}>{t("notLive")}</span>
            )}
            <ChevronDown
              aria-hidden="true"
              className="w-4 h-4 ml-auto shrink-0 transition-transform group-open:rotate-180"
            />
          </div>
          <div className="mt-2">{summary}</div>
        </summary>
        <div className="mt-4">
          <Image
            className="w-full md:w-1/2"
            width={750}
            height={500}
            src={img}
            alt={`A screenshot of ${title}`}
          />
          <div className="mt-4">{children}</div>
        </div>
      </details>
    </article>
  );
}
