import type {ConfigurationOfTesting} from "../../core/configuration/ConfigurationOfTesting.ts";
import {parseConfigurationOfTestingFromProcessEnv} from "../../core/configuration/parsing-from-process-env/parseConfigurationOfTestingFromProcessEnv.ts";
import {schemaForProcessEnvOfTesting} from "../../core/schema-for-process-env/schemaForProcessEnvOfTesting.ts";
import {z} from "zod";
const resultOfParsing = schemaForProcessEnvOfTesting.safeParse(
	process.env,
) satisfies z.ZodSafeParseResult<z.output<typeof schemaForProcessEnvOfTesting>>;
if (!resultOfParsing.success) {
	console.error(
		`An error occurred while loading the config from the environment variables:
${z.prettifyError(resultOfParsing.error)}`,
	);
	process.exit(1);
}
export const configurationOfTesting = parseConfigurationOfTestingFromProcessEnv(
	resultOfParsing.data,
) satisfies ConfigurationOfTesting;
