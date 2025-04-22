import { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  role: string;
  time: string;
  link: string;
  date: string;
  logo: StaticImageData;
}

export default function Experience({
  children,
  title,
  role,
  time,
  link,
  date,
  logo,
}: Props) {
  return (
    <article className="my-15 max-w-[750px]">
      <div className="flex">
        <img
          src={logo.src}
          alt={`${title} logo`}
          className="w-8 mr-2 mb-2 rounded-full"
        />
        <a
          target="_blank"
          href={link}
          className="underline underline-offset-4 decoration-primary hover:underline-offset-6 transition-all"
        >
          <h4 className="font-bold text-xl mb-1">{title}</h4>
        </a>
      </div>
      <h4 className="font-bold text-l">{role}</h4>
      <p className="italic">{date}</p>
      <p><small>{time}</small></p>
      <div className="mt-4">{children}</div>
    </article>
  );
}
