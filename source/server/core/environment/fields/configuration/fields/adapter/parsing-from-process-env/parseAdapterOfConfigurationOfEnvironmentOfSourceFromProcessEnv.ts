import type {schemaForProcessEnvOfSource} from "../../../../../../schema-for-process-env/schemaForProcessEnvOfSource.ts";
import type {SupportedAdapterOfConfigurationOfEnvironmentOfSource} from "../supported/SupportedAdapterOfConfigurationOfEnvironmentOfSource.ts";
import type {z} from "zod";
export function parseAdapterOfConfigurationFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfSource>,
): SupportedAdapterOfConfigurationOfEnvironmentOfSource {
	const error: Error = new Error();
	throw error;
}
