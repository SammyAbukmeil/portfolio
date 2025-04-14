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
      <h4 className="font-bold text-xl mb-4">{title}</h4>
      <div className="md:flex gap-1">
        <div className="relative w-full h-[500px]">
          <Image src={img} fill alt="A screenshot of a project" />
        </div>
        <div className="mt-4 pl-4">
          {isLive ? (
            <span className={`bg-green-400 ${pillClasses}`}>Live</span>
          ) : (
            <span className={`bg-red-400 ${pillClasses}`}>Not Live</span>
          )}
          {children}
        </div>
      </div>
    </article>
  );
}
