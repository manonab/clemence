import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				mainColor: "#FCF6EF",
				pinkVive: "#FD96FF",
				grayBlack: "#201F20",
				yellowHome: "#F8FAD2",
				orange: "#FF5C00",
				redHome: "#FF0101",
				blueHome: "#0071F3",
				saumon: "#FCDED7",
				royalBlue: "#0071F3",
				magenta: "#E00F6D",
			},
			fontFamily: {
				clash: ["Clash"],
				clashBold: ["Clash-Bold"],
				clashMedium: ["Clash-Medium"],
				clashExtra: ["Clash-Extra"],
				clashSemibold: ["Clash-Semibold"],
				clashLight: ["Clash-Light"],
				kate: ["kate"],
				kateMedium: ["kate-medium"],
				kateBlak: ["kate-black"],
				neueMedium: ["neue-medium"],
				neueSemiBold: ["neue-semi"],
				neueBold: ["neue-bold"],
				neueExtra: ["neue-extra"],
				neueRegular: ["neue-regular"],
				neueCondensed: ["neue-condensed"],
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
