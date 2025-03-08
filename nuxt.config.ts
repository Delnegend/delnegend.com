import path from "node:path";

import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";

const title = "Delnegend";
const description = "Delnegend's portfolio.";

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
			title,
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },

				{ name: "title", content: title },
				{ name: "description", content: description },

				{ property: "og:type", content: "website" },
				{ property: "og:url", content: "https://delnegend.com/" },
				{ property: "og:title", content: title },
				{ property: "og:description", content: description },
				// { property: "og:image", content: "https://delnegend.com/banner.png" },

				// { property: "twitter:card", content: "https://delnegend.com/banner.png" },
				{ property: "twitter:url", content: "https://delnegend.com/" },
				{ property: "twitter:title", content: title },
				{ property: "twitter:description", content: description },
				// { property: "twitter:image", content: "https://delnegend.com/banner.png" },
			],
			htmlAttrs: {
				lang: "en",
				class: "dark",
			},
		},
	},
});
