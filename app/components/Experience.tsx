import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  role: string;
  time: string;
  link: string;
  date: string;
}

export default function Experience({
  children,
  title,
  role,
  time,
  link,
  date,
}: Props) {
  return (
    <article className="my-15 max-w-[750px]">
      <a
        target="_blank"
        href={link}
        className="underline underline-offset-4 decoration-primary hover:underline-offset-6 transition-all"
      >
        <h4 className="font-bold text-xl mb-1">{title}</h4>
      </a>
      <h4 className="font-bold text-l">
        {role} - {time}
      </h4>
      <p className="italic">{date}</p>
      <div className="mt-4">{children}</div>
    </article>
  );
}
