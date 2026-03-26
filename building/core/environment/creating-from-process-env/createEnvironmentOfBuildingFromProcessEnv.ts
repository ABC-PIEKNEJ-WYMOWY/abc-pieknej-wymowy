import type {schemaForProcessEnvOfBuilding} from "../../schema-for-process-env/schemaForProcessEnvOfBuilding.ts";
import {parseWithNodeAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv} from "../fields/configuration/implementations/with-Node-adapter/parsing-from-process-env/parseWithNodeAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv.ts";
import type {WithNodeAdapterConfigurationOfEnvironmentOfBuilding} from "../fields/configuration/implementations/with-Node-adapter/WithNodeAdapterConfigurationOfEnvironmentOfBuilding.ts";
import {parseWithoutAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv} from "../fields/configuration/implementations/without-adapter/parsing-from-process-env/parseWithoutAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv.ts";
import type {WithoutAdapterConfigurationOfEnvironmentOfBuilding} from "../fields/configuration/implementations/without-adapter/WithoutAdapterConfigurationOfEnvironmentOfBuilding.ts";
import type {WithNodeAdapterEnvironmentOfBuilding} from "../implementations/with-Node-adapter/WithNodeAdapterEnvironmentOfBuilding.ts";
import type {WithoutAdapterEnvironmentOfBuilding} from "../implementations/without-adapter/WithoutAdapterEnvironmentOfBuilding.ts";
import type {SupportedEnvironmentOfBuilding} from "../supported/SupportedEnvironmentOfBuilding.ts";
import createNodeAdapter from "@sveltejs/adapter-node";
import type {Adapter} from "@sveltejs/kit";
import type {z} from "zod";
export function createEnvironmentOfBuildingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfBuilding>,
): SupportedEnvironmentOfBuilding {
	switch (processEnv.ADAPTER__NAME) {
		case `Node`: {
			const adapterOfEnvironment: Adapter = createNodeAdapter({});
			const configurationOfEnvironment: WithNodeAdapterConfigurationOfEnvironmentOfBuilding =
				parseWithNodeAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv(
					processEnv,
				);
			const environment: WithNodeAdapterEnvironmentOfBuilding = {
				adapter: adapterOfEnvironment,
				configuration: configurationOfEnvironment,
				type: `withNodeAdapter`,
			};
			return environment;
		}
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
