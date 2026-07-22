"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  chart: string;
}

let initialised = false;

export default function Mermaid({ chart }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      const mermaid = (await import("mermaid")).default;

      if (!initialised) {
        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          fontFamily: "inherit",
          themeVariables: {
            background: "#1E1E1E",
            primaryColor: "#58886f",
            primaryTextColor: "#ffffff",
            primaryBorderColor: "#6EAA8B",
            secondaryColor: "#464646",
            tertiaryColor: "#2a2a31",
            lineColor: "#AACCCD",
            textColor: "#ffffff",
            mainBkg: "#58886f",
            nodeBorder: "#6EAA8B",
            clusterBkg: "#2a2a31",
            clusterBorder: "#464646",
            edgeLabelBackground: "#1E1E1E",
          },
        });
        initialised = true;
      }

      try {
        const id = `mermaid-${Math.random().toString(36).slice(2, 11)}`;
        const { svg } = await mermaid.render(id, chart.trim());
        if (!cancelled) setSvg(svg);
      } catch {
        if (!cancelled) setError(true);
      }
    }

    render();

    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (error) {
    return (
      <pre className="my-8 p-4 bg-code-block text-white overflow-x-auto">
        {chart.trim()}
      </pre>
    );
  }

  return (
    <div
      ref={ref}
      className="my-8 flex justify-center overflow-x-auto [&_svg]:max-w-full [&_svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
