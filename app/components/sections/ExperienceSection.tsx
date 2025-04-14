import Experience from "@/app/components/Experience";
import TechStack from "@/app/components/TechStack";

export default function ExperienceSection() {
  return (
    <section className="mt-12 px-4 md:px-0 m-auto container">
      <h3 className="font-bold text-2xl">Profressional Experience</h3>
      <Experience
        title="BrainStation"
        role="Senior Educator"
        time="3 years"
        link="https://brainstation.io"
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
        time="1 year"
        link="https://www.graze.com"
      >
        <p>Worked on an internal monolithic PHP application</p>
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
      >
        <p>Worked on various WordPress websites</p>
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
      >
        <p>Worked on various PHP applications</p>
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
