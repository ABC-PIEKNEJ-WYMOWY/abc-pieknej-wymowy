import {loadForTypeScript} from "../../loadForTypeScript.ts";
import type {LoadFnOutput, LoadHookContext} from "node:module";
export function loadForModuleTypeScript(
	url: string,
	context: LoadHookContext,
	nextLoad: (
		urlInNextLoad: string,
		contextInNextLoad?: Partial<LoadHookContext>,
	) => LoadFnOutput,
): LoadFnOutput {
	const output = loadForTypeScript(
		{output: `module`, reformattedContext: `module-typescript`},
		url,
		context,
		nextLoad,
	);
	return output;
}
