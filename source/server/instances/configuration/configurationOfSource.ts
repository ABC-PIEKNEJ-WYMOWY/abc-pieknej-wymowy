import type {ConfigurationOfSource} from "../../core/configuration/ConfigurationOfSource.ts";
import {parseConfigurationOfSourceFromProcessEnv} from "../../core/configuration/parsing-from-process-env/parseConfigurationOfSourceFromProcessEnv.ts";
import {schemaForProcessEnvOfSource} from "../../core/schema-for-process-env/schemaForProcessEnvOfSource.ts";
import z from "zod";
const resultOfParsing = schemaForProcessEnvOfSource.safeParse(
	process.env,
) satisfies z.ZodSafeParseResult<z.output<typeof schemaForProcessEnvOfSource>>;
if (!resultOfParsing.success) {
	console.error(
		`An error occurred while loading the config from the environment variables:
${z.prettifyError(resultOfParsing.error)}`,
	);
	process.exit(1);
}
export const configurationOfSource = parseConfigurationOfSourceFromProcessEnv(
	resultOfParsing.data,
) satisfies ConfigurationOfSource;
