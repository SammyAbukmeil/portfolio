import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/layout/Hero";
import Footer from "@/app/components/layout/Footer";
import SideProjectSection from "@/app/components/sections/SideProjectSection";
import ExperienceSection from "@/app/components/sections/ExperienceSection";

export default function Home() {
  return (
    <>
      <Header isBlog={false} />
      <main>
        <Hero />
        <SideProjectSection />
        <div className="border-1 border-primary m-8"></div>
        <ExperienceSection />
      </main>
      <Footer />
    </>
  );
}
