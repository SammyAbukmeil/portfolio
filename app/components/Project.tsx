import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  isLive: boolean;
  img: StaticImageData;
}

export default function Project({ children, title, isLive, img }: Props) {
  const pillClasses = "p-1.5 rounded-2xl text-xs text-white";

  return (
    <article className="my-10 max-w-[750px]">
      <h4 className="font-bold text-xl mb-4">{title}</h4>
      <Image
        width={750}
        height={500}
        src={img}
        alt="A screenshot of a project"
      />
      <div className="mt-4">
        {isLive ? (
          <span className={`bg-primary ${pillClasses}`}>Live</span>
        ) : (
          <span className={`bg-red-400  ${pillClasses}`}>Not Live</span>
        )}
        {children}
      </div>
    </article>
  );
}
