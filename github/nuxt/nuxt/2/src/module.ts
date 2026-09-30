import { defineNuxtModule, createResolver, addTypeTemplate } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtModule({
	meta: {
		name: "my-module",
	},
	setup(_options, _nuxt) {
		addTypeTemplate({
			src: resolve("./test.d.ts"),
			filename: "types/test.d.ts",
		});
	},
});
