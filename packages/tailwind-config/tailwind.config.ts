import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
