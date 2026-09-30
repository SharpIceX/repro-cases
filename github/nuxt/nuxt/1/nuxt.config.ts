export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	hooks: {
		"pages:extend"(pages) {
			pages.forEach((page) => {
				page.path = decodeURIComponent(page.path);
			});
		},
	},
});
