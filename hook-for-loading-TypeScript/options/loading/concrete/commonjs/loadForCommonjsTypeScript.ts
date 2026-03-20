import {loadForTypeScript} from "../../loadForTypeScript.ts";
import type {LoadFnOutput, LoadHookContext} from "node:module";
export function loadForCommonjsTypeScript(
	url: string,
	context: LoadHookContext,
	nextLoad: (
		urlInNextLoad: string,
		contextInNextLoad?: Partial<LoadHookContext>,
	) => LoadFnOutput,
): LoadFnOutput {
	const output = loadForTypeScript(
		{output: `commonjs`, reformattedContext: `commonjs-typescript`},
		url,
		context,
		nextLoad,
	);
	return output;
}
