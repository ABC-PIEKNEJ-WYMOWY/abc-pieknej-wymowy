import {determineTypeOfModule} from "./determining-type-of-module/determineTypeOfModule.ts";
import {extractExtensionFromUrl} from "./extracting-extension-from-url/extractExtensionFromUrl.ts";
import {loadForCommonjsTypeScript} from "./loading/concrete/commonjs/loadForCommonjsTypeScript.ts";
import {loadForModuleTypeScript} from "./loading/concrete/module/loadForModuleTypeScript.ts";
import type {
	LoadFnOutput,
	LoadHookContext,
	RegisterHooksOptions,
} from "node:module";
export const optionsOfLoadingTypeScriptHook = {
	load: function load(
		url: string,
		context: LoadHookContext,
		nextLoad: (
			urlInNextLoad: string,
			contextInNextLoad?: Partial<LoadHookContext>,
		) => LoadFnOutput,
	): LoadFnOutput {
		if (typeof context.format === `string`) {
			const output = nextLoad(url, context);
			return output;
		} else {
			const extensionOfUrl = extractExtensionFromUrl(url);
			if (extensionOfUrl === null) {
				const output = nextLoad(url, context);
				return output;
			} else {
				switch (extensionOfUrl) {
					case `cts`: {
						const output = loadForCommonjsTypeScript(url, context, nextLoad);
						return output;
					}
					case `mts`: {
						const output = loadForModuleTypeScript(url, context, nextLoad);
						return output;
					}
					case `ts`: {
						const typeOfModule = determineTypeOfModule(url);
						switch (typeOfModule) {
							case `commonjs`: {
								const output = loadForCommonjsTypeScript(
									url,
									context,
									nextLoad,
								);
								return output;
							}
							case `module`: {
								const output = loadForModuleTypeScript(url, context, nextLoad);
								return output;
							}
						}
					}
					default: {
						const output = nextLoad(url, context);
						return output;
					}
				}
			}
		}
	},
} as const satisfies RegisterHooksOptions;
