import type {schemaForProcessEnvOfTesting} from "../../../../schema-for-process-env/schemaForProcessEnvOfTesting.ts";
import type {ConfigurationOfEnvironmentOfTesting} from "../ConfigurationOfEnvironmentOfTesting.ts";
import type {z} from "zod";
export function parseConfigurationOfEnvironmentOfTestingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfTesting>,
): ConfigurationOfEnvironmentOfTesting {
	const configuration: ConfigurationOfEnvironmentOfTesting = {};
	return configuration;
}
