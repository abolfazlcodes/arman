import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgColor: "var(--main-bg-color)",
        white: "var(--white-color)",
        "text-primary": "var(--text-primary)",
        primary: "var(--primary-color)",
        "dark-color": "#282C33",
        "purple-2": "var(--purple-2)",
        "purple-5": "#553F72",
        "gray-1": "var(--gray-1)",
        "gray-2": "#ABB2BF",
        "gray-3": "#4E4458",
        "gray-4": "#9C8AAE",
        "gray-9": "#14161A80",
      },
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        "10.5": "42px",
        "13": "50px",
        "14.5": "58px",
      },
      width: {
        21: "84px",
        22: "88px",
      },
      spacing: {
        41: "164px",
        42: "168px",
        42.5: "170px",
        43: "172px",
      },
      borderRadius: {
        5: "5px",
        20: "20px",
        40: "40px",
      },
      fontSize: {
        title1: ["32px", "42px"],
        title2: ["32px", "36px"],
        title3: ["24px", "25px"],
        "title-span": ["32px", "39px"],
        body1: ["18px", "25px"],
        body2: ["16px", "25px"],
        caption1: ["18px", "18px"],
        caption2: ["14px", "16px"],
      },
      boxShadow: {
        heroImage: "0px 4px 4px -1px #370C620F",
        heroImage2: "0px 8px 6px -1px #370C621A",
      },
    },
  },
  plugins: [],
};
export default config;
