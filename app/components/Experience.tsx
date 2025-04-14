import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  role: string;
  time: string;
}

export default function Experience({ children, title, role, time }: Props) {
  return (
    <article className="my-15 max-w-[750px]">
      <h4 className="font-bold text-xl mb-1">{title}</h4>
      <h4 className="font-bold text-l mb-1">{role} - {time}</h4>
      <div className="mt-4">{children}</div>
    </article>
  );
}
