import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
	modules: ["@unocss/nuxt"],
	vite: {
		build: {
			cssMinify: "lightningcss",
		},
	},
});
