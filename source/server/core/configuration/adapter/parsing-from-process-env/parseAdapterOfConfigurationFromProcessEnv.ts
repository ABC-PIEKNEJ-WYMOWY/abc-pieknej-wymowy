import type {schemaForProcessEnvWithAdapter} from "../schema-for-process-env/schemaForProcessEnvWithAdapter.ts";
import type {SupportedAdapterOfConfiguration} from "../supported/SupportedAdapterOfConfiguration.ts";
import type {z} from "zod";
export function parseAdapterOfConfigurationFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvWithAdapter>,
): SupportedAdapterOfConfiguration {
	const error: Error = new Error();
	throw error;
}
