import Header from "../components/layout/Header";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header isBlog={true} />
      <section className="m-auto max-w-3xs md:max-w-2xl mb-16">{children}</section>
    </>
  );
}
