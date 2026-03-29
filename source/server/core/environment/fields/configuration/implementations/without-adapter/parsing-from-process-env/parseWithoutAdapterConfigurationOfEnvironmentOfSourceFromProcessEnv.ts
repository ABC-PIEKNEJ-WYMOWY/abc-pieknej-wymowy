import type {schemaForProcessEnvOfSource} from "../../../../../../schema-for-process-env/schemaForProcessEnvOfSource.ts";
import type {WithoutAdapterConfigurationOfEnvironmentOfSource} from "../WithoutAdapterConfigurationOfEnvironmentOfSource.ts";
import type {z} from "zod";
export function parseWithoutAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv(
	processEnv: Extract<
		z.output<typeof schemaForProcessEnvOfSource>,
		{readonly ADAPTER__NAME: null}
	>,
): WithoutAdapterConfigurationOfEnvironmentOfSource {
	const configuration: WithoutAdapterConfigurationOfEnvironmentOfSource = {
		adapter: null,
	};
	return configuration;
}
