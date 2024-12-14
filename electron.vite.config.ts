import react from "@vitejs/plugin-react";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import { resolve } from "path";

export default defineConfig({
	main: {
		plugins: [externalizeDepsPlugin()],
		resolve: {
			alias: {
				"@lib": resolve("src/main/lib"),
				"@shared": resolve("src/shared"),
			},
		},
	},
	preload: {
		plugins: [externalizeDepsPlugin()],
	},
	renderer: {
		assetsInclude: "src/renderer/assets/**",
		resolve: {
			alias: {
				"@renderer": resolve("src/renderer"),
				"@shared": resolve("src/shared"),
				"@assets": resolve("src/renderer/src/assets"),
				"@components": resolve("src/renderer/src/components"),
				"@styled-system": resolve("styled-system"),
			},
		},
		plugins: [react()],
	},
});
