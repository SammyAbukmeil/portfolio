import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function TechStack({ children }: Props) {
  return (
    <section className="tech-stack my-4">
      <h4 className="font-bold mb-2">Tech Stack</h4>
      {children}
    </section>
  );
}
