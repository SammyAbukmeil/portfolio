import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  h1: ({ children, ...props }: HeadingProps) => (
    <h1
      id={
        typeof children === "string"
          ? children.toLowerCase().replace(/\s+/g, "-")
          : undefined
      }
      className="text-xl underline underline-offset-4 font-medium py-6"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: HeadingProps) => (
    <h2
      id={
        typeof children === "string"
          ? children.toLowerCase().replace(/\s+/g, "-")
          : undefined
      }
      className="font-medium underline underline-offset-4 text-lg mt-12 mb-3"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: HeadingProps) => (
    <h3
      id={
        typeof children === "string"
          ? children.toLowerCase().replace(/\s+/g, "-")
          : undefined
      }
      className="underline underline-offset-4 font-medium mt-10 mb-3"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: HeadingProps) => (
    <h4
      id={
        typeof children === "string"
          ? children.toLowerCase().replace(/\s+/g, "-")
          : undefined
      }
      className="underline underline-offset-4 mt-10 mb-3"
      {...props}
    >
      {children}
    </h4>
  ),
  p: (props: ParagraphProps) => (
    <p className="dark:text-white leading-6 mb-4" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol
      className="dark:text-white list-decimal pl-5 space-y-2 mb-4"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul className="dark:text-white list-disc pl-5 space-y-1 my-4" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => <em {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium text-blue dark:text-accent" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "underline decoration-primary underline-offset-4 hover:underline-offset-6 transition-all";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-4 border-l-3 border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-white my-8"
      {...props}
    />
  ),
  hr: () => <hr className="my-16 mx-8 dark:border-zinc-600" />,
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
