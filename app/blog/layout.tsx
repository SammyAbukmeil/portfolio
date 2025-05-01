import Link from "next/link";
import Header from "../components/layout/Header";
import { ArrowLeft } from "lucide-react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header isBlog={true} />
      <section className="m-auto px-4 md:px-0 md:max-w-3xl mb-16">
        {children}
      </section>
    </>
  );
}
