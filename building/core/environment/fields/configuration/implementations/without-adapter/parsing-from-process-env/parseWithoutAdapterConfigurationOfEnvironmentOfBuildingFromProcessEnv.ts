import type {schemaForProcessEnvOfBuilding} from "../../../../../../schema-for-process-env/schemaForProcessEnvOfBuilding.ts";
import type {WithoutAdapterConfigurationOfEnvironmentOfBuilding} from "../WithoutAdapterConfigurationOfEnvironmentOfBuilding.ts";
import type {z} from "zod";
export function parseWithoutAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv(
	processEnv: Extract<
		z.output<typeof schemaForProcessEnvOfBuilding>,
		{readonly ADAPTER__NAME: null}
	>,
): WithoutAdapterConfigurationOfEnvironmentOfBuilding {
	const configuration: WithoutAdapterConfigurationOfEnvironmentOfBuilding = {
		adapter: null,
		hosting: {basePath: processEnv.HOSTING__BASE_PATH},
	};
	return configuration;
}
