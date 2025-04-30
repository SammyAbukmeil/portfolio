import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
};

const withMdx = createMDX({});

export default withMdx(nextConfig);
