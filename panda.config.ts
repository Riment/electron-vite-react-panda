import { defineConfig } from "@pandacss/dev";
import { globalCss } from "./src/renderer/theme/global-css";
import { buttonRecipe } from "./src/renderer/theme/recipes/button.recipe";

export default defineConfig({
	preflight: true,
	minify: false,
	hash: false,

	globalCss,

	// Enable JSX patterns
	jsxFramework: "react",

	// Where to: look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}"],

	// Files to: exclude
	exclude: [],

	// The output directory for your css system
	outdir: "styled-system",

	theme: {
		extend: {
			tokens: {
				colors: {
					"--black": { value: "#000000" },
					"--gray-3": { value: "#2c2c2e" },
					"--gray-4": { value: "#3a3a3c" },
					"--gray-5": { value: "#48484a" },
					"--gray-6": { value: "#636366" },
					"--gray-7": { value: "#8e8e93" },
					"--gray-8": { value: "#aeaeb2" },
					"--gray-9": { value: "#c7c7cc" },
					"--gray-10": { value: "#d1d1d6" },
					"--gray-11": { value: "#e5e5ea" },
					"--gray-12": { value: "#f2f2f7" },

					"--white": { value: "#ffffff" },
					"--blue": { value: "#007aff" },
					"--green": { value: "#30d158" },
					"--yellow": { value: "#ffcc00" },
					"--orange": { value: "#ff6f61" },

					"--red": { value: "#d70015" },
					"--red-hover": { value: "#cc0014" },
					"--red-active": { value: "#d70015" },

					"--blue-50": { value: "#eff6ff" },
					"--blue-100": { value: "#dbeafe" },
					"--blue-200": { value: "#bfdbfe" },
					"--blue-300": { value: "#93c5fd" },
					"--blue-400": { value: "#60a5fa" },
					"--blue-500": { value: "#3b82f6" },
					"--blue-600": { value: "#2563eb" },
					"--blue-700": { value: "#1d4ed8" },
					"--blue-800": { value: "#1e40af" },
					"--blue-900": { value: "#1e3a8a" },
					"--blue-950": { value: "#172554" },
				},
				zIndex: {
					toast: { value: "9999" },
					popup: { value: "200" },
					modal: { value: "100" },
					overlay: { value: "99" },
					tooltip: { value: "20" },
					above: { value: "10" },
					default: { value: "1" },
					below: { value: "-1" },
				},
				radii: {
					default: { value: "15px" },
					button: { value: "10px" },
					input: { value: "10px" },
					circle: { value: "999px" },
				},
				fonts: {
					thin: { value: "var(--font-inter-thin), sans-serif" },
					light: { value: "var(--font-inter-light), sans-serif" },
					regular: { value: "var(--font-inter-regular), sans-serif" },
					medium: { value: "var(--font-inter-medium), sans-serif" },
					bold: { value: "var(--font-inter-bold), sans-serif" },
				},
				fontSizes: {
					default: { value: "14px" },
					btn: { value: "14px" },
					input: { value: "14px" },
					title: { value: "20px" },
					small: { value: "10px" },
					medium: { value: "14px" },
					large: { value: "17px" },
					big: { value: "40px" },
				},
				shadows: {
					light: { value: "0 2px 4px -1px rgba(26, 27, 31, 0.05)" },
					regular: { value: "0 2px 8px -2px rgba(26, 27, 31, 0.08)" },
					medium: { value: "0 2px 12px -4px rgba(26, 27, 31, 0.12)" },
					bold: { value: "0 2px 24px -6px rgba(26, 27, 31, 0.2)" },
					black: { value: "0 0 10px 0 rgba(26, 27, 31, 0.5)" },
				},
			},
			semanticTokens: {
				colors: {
					primary: { value: "{colors.--blue-500}" },
					primary_hover: { value: "{colors.--blue-600}" },
					primary_active: { value: "{colors.--blue-700}" },
					primary_disable: { value: "{colors.--blue-100}" },

					primary_light: { value: "{colors.--blue-200}" },
					primary_light_hover: { value: "{colors.--blue-300}" },
					primary_light_active: { value: "{colors.--blue-400}" },
				},
			},
			recipes: {
				button: buttonRecipe,
			},
			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
		},
	},
});
