import type {schemaForProcessEnvOfTesting} from "../../schema-for-process-env/schemaForProcessEnvOfTesting.ts";
import type {ConfigurationOfTesting} from "../ConfigurationOfTesting.ts";
import type {z} from "zod";
export function parseConfigurationOfTestingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfTesting>,
): ConfigurationOfTesting {
	const configurationOfTesting: ConfigurationOfTesting = {};
	return configurationOfTesting;
}
