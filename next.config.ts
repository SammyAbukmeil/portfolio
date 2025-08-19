import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
};

const withMdx = createMDX({});
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(withMdx(nextConfig));
