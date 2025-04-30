import Project from "@/app/components/Project";
import Links from "@/app/components/Links";
import TechStack from "@/app/components/TechStack";
import minoImg from "@/app/images/mino.png";
import holmesImg from "@/app/images/holmes.png";
import biaBakesImg from "@/app/images/bia-bakes.png";

export default function SideProjectSection() {
  return (
    <section className="mt-12 px-4 md:px-0 m-auto container">
      <h3 className="font-bold text-2xl">Side Projects</h3>
      <Project title="Mino" isLive={true} img={minoImg}>
        <p className="mt-2">
          A native app to help non-verbal people communicate via text-to-speech.
          Users can create blocks with images and text, and when clicked, the
          app speaks the text.
        </p>
        <p className="mt-4">
          I built this app for my nephew who uses it daily! I have some other
          users who found the app organically.
        </p>
        <TechStack>
          <ul className="pl-4">
            <li>React Native</li>
            <li>
              Firebase
              <ul className="pl-6">
                <li>Auth</li>
                <li>Storage</li>
                <li>Firestore</li>
              </ul>
            </li>
            <li>Expo Speech</li>
          </ul>
        </TechStack>
        <Links>
          <ul className="pl-4">
            <li>
              <a
                className="underline underline-offset-4 decoration-primary hover:underline-offset-6 transition-all"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.minoSpeak&pli=1"
              >
                Google Play Store
              </a>
            </li>
            <li>
              <a
                className="underline underline-offset-4 decoration-primary hover:underline-offset-6 transition-all"
                target="_blank"
                href="https://apps.apple.com/gb/app/mino-speak/id6449201524"
              >
                Apple App Store
              </a>
            </li>
          </ul>
        </Links>
      </Project>
      <Project title="Holmes" isLive={true} img={holmesImg}>
        <p className="mt-2">
          Collaborated with a colleague to create the web interface for Holmes
          as a freelance project. The app helps users find reviews on rental
          properties.
        </p>
        <p className="mt-4">
          The client already had a React Native app hooked up to a Firebase
          backend, our job was to build a web interface which was designed by{" "}
          <a
            className="underline underline-offset-4 decoration-primary hover:underline-offset-6 transition-all"
            target="_blank"
            href="https://www.premonday.com"
          >
            Premonday
          </a>
        </p>
        <TechStack>
          <ul className="pl-4">
            <li>React</li>
            <li>
              Firebase
              <ul className="pl-6">
                <li>Auth</li>
                <li>Storage</li>
                <li>Realtime Database</li>
              </ul>
            </li>
            <li>Tailwind</li>
          </ul>
        </TechStack>
        <Links>
          <ul className="pl-4">
            <li>
              <a
                className="underline underline-offset-4 decoration-primary hover:underline-offset-6 transition-all"
                target="_blank"
                href="https://holmes-app.com"
              >
                Website
              </a>
            </li>
          </ul>
        </Links>
      </Project>
      <Project title="Bia Bakes" isLive={false} img={biaBakesImg}>
        <p className="mt-2">
          Developed a website for a bakery in Jordan to help advertise their
          products. The website has a CMS integrated which allowed her to change
          the menu whenever she wanted.
        </p>
        <p className="mt-4">
          The website was running for 3 years before the client decided to take
          the website down to cut costs.
        </p>
        <p className="mt-4">
          The designs were created by{" "}
          <a
            className="underline underline-offset-4 decoration-primary hover:underline-offset-6 transition-all"
            target="_blank"
            href="https://www.premonday.com"
          >
            Premonday
          </a>
        </p>
        <TechStack>
          <ul className="pl-4">
            <li>WordPress</li>
            <li>
              AWS
              <ul className="pl-6">
                <li>EC2</li>
                <li>RDS</li>
              </ul>
            </li>
          </ul>
        </TechStack>
      </Project>
    </section>
  );
}
