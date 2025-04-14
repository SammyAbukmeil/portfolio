import Header from "@/app/components/layout/Header";
import Hero from "./components/layout/Hero";
import Footer from "@/app/components/layout/Footer";
import SideProjectSection from "@/app/components/sections/SideProjectSection";
import ExperienceSection from "./components/sections/ExperienceSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SideProjectSection />
        <hr />
        <ExperienceSection />
      </main>
      <Footer />
    </>
  );
}
