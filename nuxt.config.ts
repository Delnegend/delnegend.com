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
		}
	},
	components: {
		dirs: [],
	},
	imports: {
		scan: false,
		autoImport: false,
	},
});
