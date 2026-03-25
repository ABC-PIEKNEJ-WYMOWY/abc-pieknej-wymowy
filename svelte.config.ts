import type {Config} from "@sveltejs/kit";
const {environmentOfBuilding: environment} = await import(
	`./building/instances/environment/environmentOfBuilding.ts`
);
export default {
	compilerOptions: {runes: true},
	kit: {
		adapter: environment.adapter,
		csrf: {trustedOrigins: []},
		env: {dir: `.`},
		files: {
			appTemplate: `./source/client/HTML-templates/success/success-HTML-template.html`,
			assets: `./source/static-assets`,
			errorTemplate: `./source/client/HTML-templates/error/error-HTML-template.html`,
			hooks: {
				client: `./source/client/hooks.ts`,
				server: `./source/server/hooks.ts`,
			},
			lib: `./source`,
			routes: `./source/routes`,
			src: `./source`,
		},
		paths: {assets: ``, base: ``, relative: false},
	},
	vitePlugin: {prebundleSvelteLibraries: false},
} as const satisfies Config;
