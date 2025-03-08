import path from "node:path";

import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	css: ["~/app.css"],
	srcDir: "./src/",
	experimental: {
		viewTransition: true,
		typedPages: true,
	},
	vite: {
		build: {
			target: "esnext",
		},
		resolve: {
			alias: {
				"~": path.resolve(__dirname, "./src"),
			},
		},
		css: {
			postcss: {
				plugins: [tailwind(), autoprefixer()],
			},
		},
	},
	components: {
		dirs: [],
	},
	imports: {
		scan: false,
		autoImport: false,
	},
	ssr: true,
	app: {
		head: {
			title: "Delnegend",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ hid: "description", name: "description", content: "Delnegend's portfolio." },
			],
		},
	},
});
