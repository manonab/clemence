import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#FCF6EF",
        customBlack: "#212121",
        lightPink: "#FFA7A7",
        darkRed: "#D82020",
        mediumRed: "#FF2626",
        customRed: "#FF0101",
      },
      fontFamily: {
        marsdenBlack: ["marsdenBlack"],
        marsdenBold: ["marsdenBold"],
        marsdenExtraLight: ["marsdenExtraLight"],
        marsdenHairLine: ["marsdenHairLine"],
        marsdenHeavy: ["marsdenHeavy"],
        marsdenSemiBold: ["marsdenSemiBold"],
        marsdenSuper: ["marsdenSuper"],
        marsdenThin: ["marsdenThin"],
        marsdenMedium: ["marsdenMedium"],
        marsdenRegular: ["marsdenRegular"],
        marsdenLight: ["marsdenLight"],
        marsdenUltra: ["marsdenUltra"],
        helveticaNeue: ["helveticaNeue"],
        helveticaCondensed: ["helveticaCondensed"],
        footer: ["Public Sans", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        title: ["190px", "90%"],
        bannerTitile: ["160px", "90%"],
        serviceTitle: ["60px", "100%"],
        homeMobileTitle: ["60px", "90%"],
        capicheMobile: ["65px", "90%"],
        homeMobileContent: ["20px", "90%"],
        homeMobileServices: ["55px", "90%"],
        homeMobileTitleServices: ["45px", "90%"],
        welcome: ["200px", "100%"],
        titleMobile: ["50px", "100%"],
      },
    },
  },
  plugins: [],
};
export default config;
