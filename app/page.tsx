import Image from "next/image";
import headshot from "@/app/images/headshot.jpg";
import Project from "./components/Project";
import minoImg from "@/app/images/mino.webp";

export default function Home() {
  return (
    <>
      <header className="text-center py-12">
        <h1 className="font-bold text-2xl">Sammy Abukmeil</h1>
        <h2 className="pt-2">Fullstack Software Engineer</h2>
      </header>
      <main>
        <section className="m-auto max-w-3xs md:max-w-md">
          <Image
            className="m-auto mb-6"
            src={headshot}
            width={200}
            height={200}
            alt="A photo of Sammy"
          />
          <p>
            I'm passionate about learning and currently diving into the world of{" "}
            <span className="underline decoration-wavy">algorithms</span>,{" "}
            <span className="underline decoration-wavy">data structures</span>{" "}
            and{" "}
            <span className="underline decoration-wavy">design patterns</span>
          </p>
        </section>
        <section className="mt-12 m-auto max-w-3xs md:max-w-2xl">
          <h3 className="font-bold text-2xl">Projects</h3>
          <Project title="Mino" isLive={true} img={minoImg}>
            <section className="tech-stack my-4">
              <h4 className="font-bold mb-2">Tech Stack</h4>
              <ul className="list-disc pl-4">
                <li>React Native</li>
                <li>
                  Firebase
                  <ul className="list-disc pl-6">
                    <li>Auth</li>
                    <li>Storage</li>
                    <li>Firestore</li>
                  </ul>
                </li>
                <li>Expo Speech</li>
              </ul>
            </section>
            <p>
              Mino is a native app to help non-verbal people to communicate via
              text-to-speech. Users can create blocks with images and text, and
              when clicked, the app speaks it out.
            </p>
            <p className="mt-4">
              I built this app for my nephew who uses it daily! I have some
              other users who found the app organicially.
            </p>
            <section className="links mt-4">
              <h4 className="font-bold">Links</h4>
              <ul className="list-disc pl-4">
                <li>
                  <a
                    className="underline text-blue-700"
                    href="https://play.google.com/store/apps/details?id=com.minoSpeak&pli=1"
                  >
                    Google Play Store
                  </a>
                </li>
                <li>
                  <a
                    className="underline text-blue-700"
                    href="https://apps.apple.com/gb/app/mino-speak/id6449201524"
                  >
                    Apple App Store
                  </a>
                </li>
              </ul>
            </section>
          </Project>
          {/* <Project title="Holmes" isLive={true}>
            Holmes is a...
          </Project>
          <Project title="Bia Bakes" isLive={false}>
            Bia Bakes was a...
          </Project> */}
        </section>
      </main>
      <footer className="flex justify-center gap-4 my-10">
        <a href="https://github.com/SammyAbukmeil" target="_blank" className="underline text-blue-700">GitHub</a>
        <a href="https://www.linkedin.com/in/sammyabukmeil/" target="_blank" className="underline text-blue-700">LinkedIn</a>
      </footer>
    </>
  );
}
