import * as motion from "motion/react-client";
import Header from "@/app/components/layout/Header";
import Hero from "./components/layout/Hero";
import Footer from "@/app/components/layout/Footer";
import SideProjectSection from "@/app/components/sections/SideProjectSection";
import ExperienceSection from "@/app/components/sections/ExperienceSection";
import { scroll } from "@/app/animation/variants";
// import { useNavigation } from "./hooks/useNavigation";

export default function Home() {
  // const isNavigating = useNavigation();
  
  return (
    <>
      <Header isBlog={false} />
      <main>
        <Hero />
        <SideProjectSection />
        {/* <motion.div
          initial={isNavigating ? false : "offscreen"}
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={scroll}
        > */}
          <div className="border-1 border-primary m-8"></div>
          <ExperienceSection />
        {/* </motion.div> */}
      </main>
      <Footer />
    </>
  );
}
