import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex justify-center gap-4 my-10">
      <a
        href="https://github.com/SammyAbukmeil"
        target="_blank"
      >
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/sammyabukmeil/"
        target="_blank"
      >
        <Linkedin />
      </a>
    </footer>
  );
}
