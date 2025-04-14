import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  isLive: boolean;
  img: StaticImageData;
}

export default function Project({ children, title, isLive, img }: Props) {
  const pillClasses = "p-1 rounded-2xl text-xs";

  return (
    <article className="project mt-6">
      <h4 className="font-bold text-xl">{title}</h4>
      <Image
        className="my-4"
        src={img}
        width={600}
        height={400}
        alt="A screenshot of a project"
      />
      {isLive ? (
        <span className={`bg-green-400 ${pillClasses}`}>Live</span>
      ) : (
        <span className={`bg-red-400 ${pillClasses}`}>Not Live</span>
      )}
      {children}
    </article>
  );
}
