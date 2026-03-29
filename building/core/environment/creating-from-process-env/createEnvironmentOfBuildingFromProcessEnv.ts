import type {schemaForProcessEnvOfBuilding} from "../../schema-for-process-env/schemaForProcessEnvOfBuilding.ts";
import {parseWithoutAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv} from "../fields/configuration/implementations/without-adapter/parsing-from-process-env/parseWithoutAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv.ts";
import type {WithoutAdapterConfigurationOfEnvironmentOfBuilding} from "../fields/configuration/implementations/without-adapter/WithoutAdapterConfigurationOfEnvironmentOfBuilding.ts";
import type {WithoutAdapterEnvironmentOfBuilding} from "../implementations/without-adapter/WithoutAdapterEnvironmentOfBuilding.ts";
import type {SupportedEnvironmentOfBuilding} from "../supported/SupportedEnvironmentOfBuilding.ts";
import type {z} from "zod";
export function createEnvironmentOfBuildingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfBuilding>,
): SupportedEnvironmentOfBuilding {
	switch (processEnv.ADAPTER__NAME) {
		/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
		case null: {
			const configurationOfEnvironment: WithoutAdapterConfigurationOfEnvironmentOfBuilding =
				parseWithoutAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv(
					processEnv,
				);
			const environment: WithoutAdapterEnvironmentOfBuilding = {
				adapter: null,
				configuration: configurationOfEnvironment,
				type: `withoutAdapter`,
			};
			return environment;
		}
	}
}
