import hagemanto from "eslint-plugin-hagemanto";
import pluginVue from "eslint-plugin-vue";

export default [
	{ name: "yomuyume/files", files: ["src/**/*.{ts,vue}"] },
	{ name: "yomuyume/ignores", ignores: ["**/*.d.ts", ".nuxt", "*.config.js"] },

	...hagemanto({
		enableJsx: false,
		vueConfig: pluginVue.configs["flat/recommended"],
	}),

	{
		rules: {
			"tailwindcss/no-custom-classname": "off",
		},
	},
];
