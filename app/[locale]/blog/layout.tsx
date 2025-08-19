import Header from "@/app/components/layout/Header";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header isBlog={true} />
      <section className="blog m-auto px-4 md:px-0 md:max-w-3xl mb-16">
        {children}
      </section>
    </>
  );
}
