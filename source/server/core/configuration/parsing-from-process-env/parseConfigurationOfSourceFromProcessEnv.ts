import type {schemaForProcessEnvOfSource} from "../../schema-for-process-env/schemaForProcessEnvOfSource.ts";
import type {ConfigurationOfSource} from "../ConfigurationOfSource.ts";
import type {z} from "zod";
export function parseConfigurationOfSourceFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfSource>,
): ConfigurationOfSource {
	const configurationOfSource: ConfigurationOfSource = {};
	return configurationOfSource;
}
