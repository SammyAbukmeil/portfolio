import Experience from "@/app/components/Experience";
import TechStack from "@/app/components/TechStack";
import totallyLogo from "@/app/images/totally-tech.jpeg";
import passionDigitalLogo from "@/app/images/passion-digital.jpeg";
import akaLogo from "@/app/images/aka-logo.jpeg";
import grazeLogo from "@/app/images/graze-logo.jpeg";
import promoveritasLogo from "@/app/images/promoveritas-logo.jpeg";
import brainstationLogo from "@/app/images/brainstation-logo.jpeg";
import konradLogo from "@/app/images/konrad-logo.jpeg";
import { formatDistanceStrict } from "date-fns";
import { revalidatePath } from "next/cache";

export default function ExperienceSection() {
  const calculateCurrentJob = () => {
    const time = formatDistanceStrict(new Date(), new Date(2025, 4, 14), {
      unit: "month",
      roundingMethod: "ceil",
    });

    revalidatePath("/");

    return time;
  };

  return (
    <section className="mt-12 px-4 md:px-0 m-auto container">
      <h3 className="font-bold text-2xl">Professional Experience</h3>
      <Experience
        title="Konrad Group"
        role="Senior Software Developer"
        time={`${calculateCurrentJob} and counting...`}
        link="https://www.konrad.com"
        date="Apr '25 - Present"
        logo={konradLogo}
      >
        <p>Fullstack development for a digital agency</p>
        <TechStack>
          <ul className="pl-4">
            <li>TypeScript</li>
            <li>React</li>
            <li>Express</li>
          </ul>
        </TechStack>
      </Experience>
      <Experience
        title="BrainStation"
        role="Senior Educator"
        time="3 years"
        link="https://brainstation.io"
        date="Mar '22 - Apr '25"
        logo={brainstationLogo}
      >
        <p>
          Teaching groups of students on a 3 month software engineering bootcamp
        </p>
        <TechStack>
          <ul className="pl-4">
            <li>HTML</li>
            <li>CSS &amp; Sass</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node &amp; Express</li>
            <li>MySQL</li>
            <li>Deployment via Heroku &amp; Netlify</li>
          </ul>
        </TechStack>
      </Experience>
      <Experience
        title="PromoVeritas"
        role="Senior Backend Developer"
        time="1 year"
        link="https://www.promoveritas.com"
        date="Feb '21 - Mar '22"
        logo={promoveritasLogo}
      >
        <p>Worked on a rebuild of a prize draw competition API</p>
        <TechStack>
          <ul className="pl-4">
            <li>PHP</li>
            <li>Laravel</li>
            <li>AWS</li>
          </ul>
        </TechStack>
      </Experience>
      <Experience
        title="Graze"
        role="Backend Engineer"
        time="9 months"
        link="https://www.graze.com"
        date="Mar '20 - Dec '20"
        logo={grazeLogo}
      >
        <p>Worked on an internal PHP application to manage stock and orders</p>
        <TechStack>
          <ul className="pl-4">
            <li>PHP</li>
            <li>PHPUnit</li>
            <li>MySQL</li>
          </ul>
        </TechStack>
      </Experience>
      <Experience
        title="AKA UK"
        role="Full Stack Developer"
        time="2.5 years"
        link="https://www.akauk.com"
        date="Feb '17 - Mar '20"
        logo={akaLogo}
      >
        <p>Worked on various WordPress websites for theatre shows</p>
        <TechStack>
          <ul className="pl-4">
            <li>PHP</li>
            <li>WordPress</li>
            <li>MySQL</li>
          </ul>
        </TechStack>
      </Experience>
      <Experience
        title="Passion Digital"
        role="Full Stack Developer"
        time="6 months"
        link="https://passion.digital"
        date="May '17 - Sept '17"
        logo={passionDigitalLogo}
      >
        <p>Worked on various WordPress websites for clients</p>
        <TechStack>
          <ul className="pl-4">
            <li>PHP</li>
            <li>WordPress</li>
            <li>MySQL</li>
          </ul>
        </TechStack>
      </Experience>
      <Experience
        title="Totally Communications Ltd"
        role="Full Stack Developer"
        time="2 years"
        link="https://totally.tech"
        date="Jun '15 - May '17"
        logo={totallyLogo}
      >
        <p>Worked on various PHP applications for clients</p>
        <TechStack>
          <ul className="pl-4">
            <li>PHP</li>
            <li>Zend</li>
            <li>jQuery</li>
          </ul>
        </TechStack>
      </Experience>
    </section>
  );
}
