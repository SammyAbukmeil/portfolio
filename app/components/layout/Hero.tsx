import Image from "next/image";
import headshot from "@/app/images/headshot.jpg";

export default function Hero() {
  return (
    <section className="m-auto max-w-3xs md:max-w-md">
      <Image
        className="m-auto mb-6"
        src={headshot}
        width={200}
        height={200}
        alt="A photo of Sammy"
      />
      <p>
        I'm passionate about learning and currently diving into the world of{" "}
        <span className="underline decoration-wavy underline-offset-4 decoration-primary">
          algorithms
        </span>
        ,{" "}
        <span className="underline decoration-wavy underline-offset-4 decoration-primary">
          data structures
        </span>{" "}
        and{" "}
        <span className="underline decoration-wavy underline-offset-4 decoration-primary">
          design patterns
        </span>
      </p>
    </section>
  );
}
