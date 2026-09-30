import { defineNuxtModule } from "@nuxt/kit";

export interface ModuleOptions {
	test?: Array<{
		test2: string;
	}>;
}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: "ahhhhhhh",
	},
	setup(options, _nuxt) {
		console.log(JSON.stringify(options, null, 4));
	},
});
