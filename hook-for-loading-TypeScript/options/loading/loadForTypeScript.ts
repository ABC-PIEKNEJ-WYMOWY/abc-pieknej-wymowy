import {
	type LoadFnOutput,
	type LoadHookContext,
	stripTypeScriptTypes,
} from "node:module";
export function loadForTypeScript(
	formats:
		| {
				readonly output: `commonjs`;
				readonly reformattedContext: `commonjs-typescript`;
		  }
		| {
				readonly output: `module`;
				readonly reformattedContext: `module-typescript`;
		  },
	url: string,
	context: LoadHookContext,
	nextLoad: (
		urlInNextLoad: string,
		contextInNextLoad?: Partial<LoadHookContext>,
	) => LoadFnOutput,
): LoadFnOutput {
	const reformattedContext = {
		...context,
		format: formats.reformattedContext,
	} as const satisfies LoadHookContext;
	const output = nextLoad(url, reformattedContext);
	if (output.source === undefined) {
		return output;
	} else {
		const sourceOfOutputWithoutTypes: string = stripTypeScriptTypes(
			// eslint-disable-next-line @typescript-eslint/no-base-to-string
			output.source.toString(),
		);
		return {
			...output,
			format: formats.output,
			source: sourceOfOutputWithoutTypes,
		};
	}
}
