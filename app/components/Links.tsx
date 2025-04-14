import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Links({ children }: Props) {
  return (
    <section className="links mt-4">
      <h4 className="font-bold">Links</h4>
      {children}
    </section>
  );
}
