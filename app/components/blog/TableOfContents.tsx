import { Hash } from "lucide-react";

interface Props {
  items: { text: string; link: string; nested: boolean }[];
}

export default function TableOfContents({ items }: Props) {
  return (
    <section className="my-8 bg-zinc-100 dark:bg-primary-dark p-4">
      <ul className="list-none">
        {items.map((item, i) => (
          <li
            key={i}
            className={`flex items-center my-0.5 ${item.nested ? "ml-4" : ""}`}
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
