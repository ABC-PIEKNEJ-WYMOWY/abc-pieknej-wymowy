import type {Config} from "@sveltejs/kit";
const {environmentOfBuilding: environment} = await import(
	`./building/instances/environment/environmentOfBuilding.ts`
);
/* eslint-disable-next-line import-x/no-default-export */
export default {
	compilerOptions: {runes: true},
	kit: {
		/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
		...(environment.adapter === null ? {} : {adapter: environment.adapter}),
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
		paths: {
			assets: ``,
			base: environment.configuration.hosting.basePath ?? ``,
			relative: false,
		},
	},
	vitePlugin: {prebundleSvelteLibraries: false},
} as const satisfies Config;
