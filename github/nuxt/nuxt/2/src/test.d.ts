import "vue-router";

declare module "vue-router" {
	interface RouteMeta {
		aaa: {
			test_type: "wiki" | "novel";
		};
	}
}
