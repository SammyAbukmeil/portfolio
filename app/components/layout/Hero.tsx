import Image from "next/image";
import headshot from "@/app/images/headshot.jpg";
import { Github, Linkedin } from "lucide-react";
import * as motion from "motion/react-client";

export default function Hero() {
  return (
    <section className="m-auto max-w-3xs md:max-w-md">
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.3,
            duration: 2,
          },
        }}
      > */}
        <Image
          className="m-auto mb-6 rounded-4xl"
          src={headshot}
          width={200}
          height={200}
          alt="A photo of Sammy"
        />
      {/* </motion.div> */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.4,
            duration: 2,
          },
        }}
      > */}
        <p className="text-center">
          I'm passionate about learning and am currently diving into the world
          of{" "}
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
      {/* </motion.div> */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.4,
            duration: 2,
          },
        }}
      > */}
        <div className="flex justify-center mt-6 gap-3">
          <a href="https://github.com/SammyAbukmeil" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/sammyabukmeil/" target="_blank">
            <Linkedin />
          </a>
        </div>
      {/* </motion.div> */}
    </section>
  );
}
