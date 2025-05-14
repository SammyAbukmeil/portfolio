import { Hash } from "lucide-react";

interface Props {
  items: { text: string; link: string; nested: boolean }[];
}

export default function Navbar({ items }: Props) {
  return (
    <section className="mt-8 bg-zinc-100 dark:bg-primary-dark p-4">
      <p>Contents</p>
      <ul className="list-none">
        {items.map((item, i) => (
          <li
            key={i}
            className={`flex items-center ${item.nested ? "ml-4" : ""}`}
          >
            <Hash size={18} />
            <a className="underline" href={item.link}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
